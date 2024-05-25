import React from 'react'
import TechnicianLayout from '../pages/Technician/components/TechnicianLayout'
import TechnicianSideBarLinks from '../pages/Technician/components/TechnicianSideBarLinks'

const TechnicianRoute = ({ selectedLink, module }) => {
  return (
    <TechnicianLayout
      sideBarLinks={<TechnicianSideBarLinks selectedLink={selectedLink} />}
      module={module}
    />
  )
}

export default TechnicianRoute