import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const SystemSideBarLink = ({ link, icon, linkTitle, selectedLink }) => {
  const location = useLocation();
  const [page, setPage] = useState('');

  useEffect(() => {
    let path = location.pathname.endsWith('/')
      ? location.pathname.slice(0, -1)
      : location.pathname;
    const lastTerm = path.split('/').pop();
    setPage(lastTerm);
  }, [location]);

  return (
    <li>
      <Link
        to={link}
        className={`flex items-center gap-3 text-white hover:bg-indigo-500 ${
          selectedLink.toLowerCase() == linkTitle.toLowerCase() &&
          'bg-indigo-500'
        }`}
      >
        <span className="material-symbols-outlined flex flex-none justify-center items-center h-14 w-14">
          {icon}
        </span>
        {linkTitle}
      </Link>
    </li>
  );
};

export default SystemSideBarLink;
