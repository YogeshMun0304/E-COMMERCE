import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Toaster } from "react-hot-toast";
function Layout({children}) {
  return (
    <div>
        <Header></Header>
    <main style={{ minHeight: "70vh" }}>
        <Toaster/> 
        {children}
    </main>
    <Footer></Footer>
    </div>
    
  )
}

export default Layout