import SystemLogout from '../../../components/system/SystemLogout';
import SystemSideBarLink from '../../../components/system/SystemSideBarLink';

const AdministrationSideBarLinks = ({ selectedLink }) => {
  return (
    <>
      <SystemSideBarLink link={'/administration/dashboard'} icon={'dashboard'} linkTitle={'Dashboard'} selectedLink={selectedLink} />
      <SystemSideBarLink link={'/administration/my-tickets'} icon={'confirmation_number'} linkTitle={'Mis Tickets'} selectedLink={selectedLink} />
      <SystemSideBarLink link={'/administration/available-tickets'} icon={'confirmation_number'} linkTitle={'Tickets Disponibles'} selectedLink={selectedLink} />
      <SystemSideBarLink link={'/administration/tickets'} icon={'confirmation_number'} linkTitle={'Todos los Tickets'} selectedLink={selectedLink} />
      <SystemSideBarLink link={'/administration/resolve-tickets'} icon={'construction'} linkTitle={'Resolver Tickets'} selectedLink={selectedLink} />
      <SystemSideBarLink link={'/administration/escalations'} icon={'trending_up'} linkTitle={'Escalaciones'} selectedLink={selectedLink} />
      <SystemSideBarLink link={'/administration/users'} icon={'group'} linkTitle={'Usuarios'} selectedLink={selectedLink} />
      <SystemSideBarLink link={'/administration/settings'} icon={'settings'} linkTitle={'Configuraciones'} selectedLink={selectedLink} />
      <SystemLogout icon={'logout'} linkTitle={'Salir'} selectedLink={selectedLink} />
    </>
  );
};

export default AdministrationSideBarLinks;
