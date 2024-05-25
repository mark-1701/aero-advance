import SystemLogout from "../../../components/system/SystemLogout"
import SystemSideBarLink from "../../../components/system/SystemSideBarLink"

const CustomerSideBarLinks = ({ selectedLink }) => {
  return (
    <>
      <SystemSideBarLink link={'/customer/dashboard'} icon={'dashboard'} linkTitle={'Dashboard'} selectedLink={selectedLink} />
      <SystemSideBarLink link={'/customer/my-tickets'} icon={'confirmation_number'} linkTitle={'Mis Tickets'} selectedLink={selectedLink} />
      <SystemLogout icon={'logout'} linkTitle={'Salir'} selectedLink={selectedLink} />
    </>
  )
}

export default CustomerSideBarLinks