import { useEffect, useState } from 'react';
import LandingPage from './pages/LandingPage/LandingPage';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import CustomerLayout from './pages/Customer/components/CustomerLayout';
import TechnicianLayout from './pages/Technician/components/TechnicianLayout';
import AdministrationRoutes from './routes/AdministrationRoutes';
import ProtectedRoute from './routes/ProtectedRoute';
import Users from './pages/Administration/pages/Users/Users';
import Tickets from './pages/Administration/pages/Tickets/Tickets';
import Dashboard from './pages/Administration/pages/Dashboard/Dashboard';
import MyTickets from './pages/Administration/pages/MyTickets/MyTickets';
import AdministrationRoute from './routes/AdministrationRoute';
import ResolveTickets from './pages/Administration/pages/ResolveTickets/ResolveTickets';
import AvailableTickets from './pages/Administration/pages/AvailableTickets/AvailableTickets';
import Escalations from './pages/Administration/pages/Escalation/Escalations';
import { AdminAccessPermissions, CustomerAccessPermissions, TechnicianAccessPermissions } from './utils/AccessPermissions';

function App() {
  const [sessionUser, setSessionUser] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const storedSession = JSON.parse(localStorage.getItem('session'));
    if (storedSession) setSessionUser(storedSession); 
    setIsLoading(false);
  }, []);
  if (isLoading) return <div>Cargando...</div>;
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login setSessionUser={setSessionUser}/>} />
        <Route path="/administration" element={<ProtectedRoute isAllowed={AdminAccessPermissions(sessionUser)} />}>
          <Route path="" element={<Navigate to="users" />} />
          <Route path="dashboard" element={<AdministrationRoute selectedLink={'dashboard'} module={<Dashboard />}  />} />
          <Route path="users" element={<AdministrationRoute selectedLink={'usuarios'} module={<Users />}  />} />
          <Route path="tickets" element={<AdministrationRoute selectedLink={'todos los tickets'} module={<Tickets />}  />} />
          <Route path="my-tickets" element={<AdministrationRoute selectedLink={'mis tickets'} module={<MyTickets />}  />} />
          <Route path="resolve-tickets" element={<AdministrationRoute selectedLink={'resolver tickets'} module={<ResolveTickets />}  />} />
          <Route path="available-tickets" element={<AdministrationRoute selectedLink={'tickets disponibles'} module={<AvailableTickets />}  />} />
          <Route path="escalations" element={<AdministrationRoute selectedLink={'escalaciones'} module={<Escalations />}  />} />
        </Route>
        <Route path='/customer' element={<ProtectedRoute isAllowed={CustomerAccessPermissions(sessionUser)}> <CustomerLayout/> </ProtectedRoute>} />
        <Route path='/technician' element={<ProtectedRoute isAllowed={TechnicianAccessPermissions(sessionUser)}> <TechnicianLayout/> </ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
