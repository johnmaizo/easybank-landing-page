import React from 'react'

import '../SCSS/style.scss'
import '../SCSS/reset.scss'
import '../SCSS/responsive.scss'


import Header from './sections/Header.jsx'
import Hero from './sections/Hero.jsx'
import Main from './sections/Main.jsx'
import Footer from './sections/Footer.jsx'

const Home = () => {
  return (
    <>
        <Header />
        <main>
            <Hero />
            <Main />
        </main>
        <Footer />
    </>
  )
}

export default Home