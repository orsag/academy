import React from 'react'
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <>
      <Navbar />

      <section>
        <Outlet />
      </section>

      <Footer />
    </>
  )
}

export default RootLayout;