import { Metadata } from '@redwoodjs/web'

import Cta from 'src/components/homePage/CTA/Cta'
import DevTeams from 'src/components/homePage/DevTeams/DevTeams'
import Faq from 'src/components/homePage/FAQ/Faq'
import Features from 'src/components/homePage/Features/Features'
import Hero from 'src/components/homePage/Hero/Hero'
import Landing from 'src/components/homePage/Landing/Landing'
import Plans from 'src/components/homePage/Plans/Plans'
import SingleTestimonial from 'src/components/homePage/SingleTestimonial/SingleTestimonial'
import Testimonials from 'src/components/homePage/Testimonials/Testimonials'
import VideoContainer from 'src/components/homePage/VideoContainer/VideoContainer'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />

      <Hero />

      <DevTeams />

      <VideoContainer />

      <Testimonials />

      <Features />

      <Plans />

      <SingleTestimonial />

      <Faq />

      <Cta />
    </>
  )
}

export default HomePage
