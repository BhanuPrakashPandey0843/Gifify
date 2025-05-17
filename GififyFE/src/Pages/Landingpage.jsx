import React from 'react'
import Hero from "../Components/Hero/Hero"
import Newsletter from "../Components/Newsletter/Newsletter"
import Testimonials from "../Components/Testimonials/Testimonials"
const Landingpage = () => {
  return (
    <main>
      <section>
        <Hero />
      </section>
      
      <section>
      <Testimonials />
      </section>
      <section>
        <Newsletter />
      </section>
    </main>
  )
}

export default Landingpage
