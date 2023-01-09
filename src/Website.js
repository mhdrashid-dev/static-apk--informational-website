import React from 'react'
import AboutPage from './Pages/AboutPage'
import ContactPage from './Pages/ContactPage'
import FeaturePage from './Pages/FeaturePage'
import FooterPage from './Pages/FooterPage'
import HomePage from './Pages/HomePage'
import NavbarPage from './Pages/NavbarPage'
import ReviewPage from './Pages/ReviewPage'
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
      <ReviewPage></ReviewPage>
      <ContactPage></ContactPage>
      <FooterPage></FooterPage>
    </div>
  )
}

export default Website
