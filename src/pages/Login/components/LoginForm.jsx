import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../../data/api';

function LoginForm({ setSessionUser }) {
  const navigate = useNavigate();
  const loginAction = async e => {
    const formData = new FormData(e.target);
    const response = await login('login', formData);
    setSessionUser(response.data);
    localStorage.setItem('session', JSON.stringify(response.data));
    switch (response.data.role_id) {
      case '1_ADMIN':
        navigate('/administration');
        break;
      case '2_CUSTOMER':
        navigate('/customer');
        break;
      case '3_TECHNICIAN':
        navigate('/technician');
        break;
    }

    console.log(response.data);
    // navigate('/administration');
  };
  return (
    <form
      className="flex flex-col gap-14"
      onSubmit={e => {
        e.preventDefault();
        loginAction(e);
      }}
    >
      <div>
        <label htmlFor="email" className="label">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="input"
        />
      </div>
      <div>
        <label htmlFor="password" className="label">
          Contraseña:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          required
          className="input"
        />
        <p className="mt-3 text-sm text-blue-500">¿Olvidaste tu contraseña?</p>
      </div>
      <div>
        <button type="submit" className="btn w-full">
          Enviar
        </button>
        <p className="mt-3 text-sm text-right text-blue-500">
          ¿No tienes una cuenta? Registrate
        </p>
      </div>
    </form>
  );
}

export default LoginForm;
