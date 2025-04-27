import React, { useEffect } from 'react'
import { motion } from 'framer-motion'; // Import the motion component from framer-motion
import './Repos.css'
import Footer from '../components/Footer'

const Repospage = () => {

    useEffect(() => {
        // Scroll to top when visiting repos page
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
    }
    , []);
  return (
    <>
      <div className='ReposPage'>
        {/* Apply motion.div for animation */}
        <motion.div
          className="reposcontainer"
          initial={{ opacity: 0, y: 50 }}  // Initial state: start with opacity 0 and position 50px lower
          animate={{ opacity: 1, y: 0 }}   // Animate to opacity 1 and position 0px (normal position)
          transition={{ duration: 0.8 }}   // Animation duration: 0.8 seconds
        >
          <h1 style={{letterSpacing:1}}>Repos</h1>
          <p> The Repos Page will Live on <span> 15th May 2025</span></p>
          <p> For further updates, Join our Discord</p>
          <button><a href='https://discord.com/invite/apYEaEq4'>Join Discord</a></button>
        </motion.div>
      </div>
      <Footer/>
    </>
  )
}

export default Repospage