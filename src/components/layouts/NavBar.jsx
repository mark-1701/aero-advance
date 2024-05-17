import logo from '/src/assets/logo.png';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="flex justify-between items-center w-full h-20 shadow-md bg-gray-100 sm:px-14">
      <Link to={`/`} className=""><img src={logo} alt="Logo" className="w-32" /></Link>
    </div>
  );
}

export default NavBar;
