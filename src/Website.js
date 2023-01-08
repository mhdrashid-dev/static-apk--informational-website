import React from 'react'
import HomePage from './Pages/HomePage'
import NavbarPage from './Pages/NavbarPage'
import ServicePage from './Pages/ServicePage'

function Website() {
  return (
    <div>
      <NavbarPage></NavbarPage>
      <HomePage></HomePage>
      <ServicePage></ServicePage>
    </div>
  )
}

export default Website
