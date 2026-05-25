import React from 'react'
import Navbar from './Home/Navbar';
import Header from './Home/Header';
import Overview from './Home/Overview';
import QuickFacts from './Home/Quickfacts';
import Notice from './Home/Notice';
import StartJourney from './Home/Startjourney'
import TestimonialsSection from './Home/testimonials'
import BlogPosts from './Home/blog';
import Footer from './Home/footer';
import ResourcesAndContact from './Home/resources-contact';
import About from './Home/About';


const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Overview/>
                  <About/>

      <QuickFacts/>
      <Notice/>
      <StartJourney/>
            <BlogPosts/>
      <TestimonialsSection/>
      <ResourcesAndContact/>
      <Footer/>
    </div>
  )
}

export default Home