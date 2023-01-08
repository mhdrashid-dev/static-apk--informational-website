import React from 'react'
import AboutPage from './Pages/AboutPage'
import FeaturePage from './Pages/FeaturePage'
import HomePage from './Pages/HomePage'
import NavbarPage from './Pages/NavbarPage'
import ServicePage from './Pages/ServicePage'
import WorkflowPage from './Pages/WorkflowPage'

function Website() {
  return (
    <div>
      <NavbarPage></NavbarPage>
      <HomePage></HomePage>
      <ServicePage></ServicePage>
      <FeaturePage></FeaturePage>
      <WorkflowPage></WorkflowPage>
      <AboutPage></AboutPage>
    </div>
  )
}

export default Website
