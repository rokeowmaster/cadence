import React from 'react'
import { Nav,Careers,Footer,Hero,JobBanner,JoinForm,Projects,Testimonial } from '@/components'

const Home = () => {
  return (
    <main>
      <Nav />
      <Hero />
      <Careers />
      <Projects />
      <JobBanner />
      <JoinForm />
      <Testimonial />
      <Footer />
    </main>
  )
}

export default Home;