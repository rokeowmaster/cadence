import React from 'react'
import { Nav,Careers,Footer,Hero,JobBanner,JoinForm,Projects,Testimonial, NewsComponent } from '@/components'

const Home = () => {
  return (
    <main>
      <Nav />
      <Hero />
      <Careers />
      <NewsComponent />
      <Projects />
      <JobBanner />
      <JoinForm />
      <Testimonial />
      <Footer />
    </main>
  )
}

export default Home;