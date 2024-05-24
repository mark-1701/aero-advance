import { useState, useEffect } from 'react';
import SystemNavBar from '../../../components/system/SystemNavBar';
import SystemSideBar from '../../../components/system/SystemSideBar';

const AdministrationLayout = ({ sideBarLinks, module }) => {
  const initialMenuBtnState = localStorage.getItem('menuBtn') === 'true';
  const [menuBtn, setMenuBtn] = useState(initialMenuBtnState);
  useEffect(() => {
    localStorage.setItem('menuBtn', menuBtn);
  }, [menuBtn]);
  return (
    <>
      <SystemNavBar
        title={'Sistema Administración'}
        menuBtn={menuBtn}
        setMenuBtn={setMenuBtn}
      />
      <div className="h-[calc(100vh_-_5rem)] flex">
        <SystemSideBar menuBtn={menuBtn} sideBarLinks={sideBarLinks} />
        {/* aumenta un marginleft de 14 por el espacio del sidemenu */}
        <main className="w-full p-8 overflow-auto max-sm:ml-14">{module}</main>
      </div>
    </>
  );
};

export default AdministrationLayout;
