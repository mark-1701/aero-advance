import SystemSideBarLink from '../../../components/SystemSideBarLink';

const SideBarLinks = ({ selectedLink }) => {
  return (
    <>
      <SystemSideBarLink link={'/administration/dashboard'} icon={'dashboard'} linkTitle={'Dasboard'} selectedLink={selectedLink} />
      <SystemSideBarLink link={'/administration/checklist'} icon={'checklist'} linkTitle={'Tickets'} selectedLink={selectedLink} />
      <SystemSideBarLink link={'/administration/users'} icon={'group'} linkTitle={'Usuarios'} selectedLink={selectedLink} />
      <SystemSideBarLink link={'/administration/settings'} icon={'settings'} linkTitle={'Configuraciones'} selectedLink={selectedLink} />
      <SystemSideBarLink link={'/'} icon={'logout'} linkTitle={'Salir'} selectedLink={selectedLink} />
    </>
  );
};

export default SideBarLinks;
