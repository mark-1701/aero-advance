import { Navigate, Route, Routes } from 'react-router-dom';
import Users from '../pages/Administration/pages/Users/Users';
import Tickets from '../pages/Administration/pages/Tickets/Tickets';
import Dashboard from '../pages/Administration/pages/Dashboard/Dashboard';
import MyTickets from '../pages/Administration/pages/MyTickets/MyTickets';
import AdministrationRoute from './AdministrationRoute';
import ProtectedRoute from './ProtectedRoute';

const AdministrationRoutes = (sessionUser) => {
  return (
    <Route path="/administration" element={<ProtectedRoute isAllowed={!!sessionUser} />}>
      <Route path="" element={<Navigate to="users" />} />
      <Route path="dashboard" element={<AdministrationRoute selectedLink={'dashboard'} module={<Dashboard />}  />} />
      <Route path="users" element={<AdministrationRoute selectedLink={'usuarios'} module={<Users />}  />} />
      <Route path="tickets" element={<AdministrationRoute selectedLink={'tickets'} module={<Tickets />}  />} />
      <Route path="my-tickets" element={<AdministrationRoute selectedLink={'empleados'} module={<MyTickets />}  />} />
    </Route>
  );
};

export default AdministrationRoutes;
