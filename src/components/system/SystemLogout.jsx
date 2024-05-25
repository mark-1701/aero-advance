import React from 'react';
import { useLocation, Link, Navigate, useNavigate } from 'react-router-dom';

const SystemLogout = ({ link, icon, linkTitle, selectedLink }) => {
  const navigate = useNavigate();
  return (
    <li>
      <a
        title={linkTitle}
        className={`flex items-center gap-3 text-white hover:bg-indigo-500 ${
          selectedLink.toLowerCase() == linkTitle.toLowerCase() &&
          'bg-indigo-500'
        } cursor-pointer`}
        onClick={e => {
          localStorage.removeItem('session');
          navigate('/');
        }}
      >
        <span className="material-symbols-outlined flex flex-none justify-center items-center h-14 w-14">
          {icon}
        </span>
        {linkTitle}
      </a>
    </li>
  );
};

export default SystemLogout;
