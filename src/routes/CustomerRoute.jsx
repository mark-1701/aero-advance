import React from 'react'
import CustomerLayout from '../pages/Customer/components/CustomerLayout'
import CustomerSideBarLinks from '../pages/Customer/components/CustomerSideBarLinks'

const CustomerRoute = ({ selectedLink, module }) => {
  return (
    <CustomerLayout
      sideBarLinks={<CustomerSideBarLinks selectedLink={selectedLink} />}
      module={module}
    />
  )
}

export default CustomerRoute