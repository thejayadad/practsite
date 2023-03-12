import React from 'react'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import TopSweet from '../../components/topSweet/TopSweet'
import Feature from '../../components/features/Feature'
import Sweets from '../../components/sweets/Sweets'
import Gallery from '../../components/gallery/Gallery'
import Footer from '../../components/footer/Footer'
import Highlight from '../../components/highlight/Highlight'
import Mailing from '../../components/mailing/Mailing'


const Home = () => {
  return (
    <div>


        <Header />
        <TopSweet />
        <Feature />
        <Sweets />
        <Highlight />
        <Mailing />
        <Gallery />
        <Footer />

    </div>
  )
}

export default Home