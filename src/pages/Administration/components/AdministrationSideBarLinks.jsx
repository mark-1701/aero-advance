import SystemSideBarLink from '../../../components/system/SystemSideBarLink';

const AdministrationSideBarLinks = ({ selectedLink }) => {
  return (
    <>
      <SystemSideBarLink link={'/administration/dashboard'} icon={'dashboard'} linkTitle={'Dashboard'} selectedLink={selectedLink} />
      <SystemSideBarLink link={'/administration/my-tickets'} icon={'confirmation_number'} linkTitle={'Mis Tickets'} selectedLink={selectedLink} />
      {/* <SystemSideBarLink link={'/administration/dashboard'} icon={'subject'} linkTitle={'Todos los Tickets'} selectedLink={selectedLink} /> */}
      <SystemSideBarLink link={'/administration/tickets'} icon={'subject'} linkTitle={'Tickets'} selectedLink={selectedLink} />
      <SystemSideBarLink link={'/administration/users'} icon={'group'} linkTitle={'Usuarios'} selectedLink={selectedLink} />
      <SystemSideBarLink link={'/administration/employees'} icon={'person_apron'} linkTitle={'Empleados'} selectedLink={selectedLink} />
      <SystemSideBarLink link={'/administration/customers'} icon={'person'} linkTitle={'Clientes'} selectedLink={selectedLink} />
      <SystemSideBarLink link={'/administration/settings'} icon={'settings'} linkTitle={'Configuraciones'} selectedLink={selectedLink} />
      <SystemSideBarLink link={'/'} icon={'logout'} linkTitle={'Salir'} selectedLink={selectedLink} />
    </>
  );
};

export default AdministrationSideBarLinks;
