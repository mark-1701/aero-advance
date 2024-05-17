import { useState } from 'react';
import Banner from './pages/LandingPage/components/Banner';
import Destinations from './pages/LandingPage/components/Destinations';
import Message from './pages/LandingPage/components/Message'
import Benefits from './pages/LandingPage/components/Benefits';
import Contact from './pages/LandingPage/components/Contact';
import NavBar from './pages/LandingPage/components/NavBar';
import Footer from '/src/components/Footer'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <NavBar />
        <Banner />
      </header>
      <main>
        <Destinations />
        <Message />
        <Benefits />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
