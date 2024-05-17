import React from 'react';

import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import LoginForm from './components/LoginForm';
import BackgroundImage from '../../assets/airport_2.jpg';

function Login() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <NavBar />
        <main
          style={{ backgroundImage: `url(${BackgroundImage})` }}
          className="flex justify-center items-center h-screen bg-cover bg-center"
        >
          <div className='w-4/5 p-8 rounded bg-white sm:w-96'>
            <h1 className='title text-center'>Iniciar Sesión</h1>
            <LoginForm />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Login;
