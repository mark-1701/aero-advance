import SystemLogout from "../../../components/system/SystemLogout"
import SystemSideBarLink from "../../../components/system/SystemSideBarLink"

const TechnicianSideBarLinks = ({ selectedLink }) => {
  return (
    <>
      <SystemSideBarLink link={'/technician/dashboard'} icon={'dashboard'} linkTitle={'Dashboard'} selectedLink={selectedLink} />
      <SystemSideBarLink link={'/technician/my-tickets'} icon={'confirmation_number'} linkTitle={'Mis Tickets'} selectedLink={selectedLink} />
      <SystemSideBarLink link={'/technician/available-tickets'} icon={'confirmation_number'} linkTitle={'Tickets Disponibles'} selectedLink={selectedLink} />
      <SystemSideBarLink link={'/technician/resolve-tickets'} icon={'construction'} linkTitle={'Resolver Tickets'} selectedLink={selectedLink} />
      <SystemLogout icon={'logout'} linkTitle={'Salir'} selectedLink={selectedLink} />
    </>
  )
}

export default TechnicianSideBarLinks