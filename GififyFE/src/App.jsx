import React from 'react'
import Navbar from "./Components/Navbar/Navbar"
import Footer from './Components/Footer/Footer'
import Landingpage from './Pages/Landingpage'
import GoToTopButton from "./Components/GoToTopButton/GoToTopButton"

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Landingpage />
      </main>
      <Footer />
      <GoToTopButton />
    </>
  )
}

export default App

