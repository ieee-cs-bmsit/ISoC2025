import React from 'react'
import './About.css'



function About() {
  return (
    <div>
      <div className="about-main-container">
        <div className="left-container">
          <div className="stay-updated-container">
            <p className='font-title lg:px-4 py-2'> Stay Updated </p>
          </div>

          <div className="about-content space-grotesk-regular">
            <p>Open source is more than just code- it's a community.</p>
            <p>Stay connected, collaborate, and keep your journey going beyond the event!</p>
          </div>

          <div className='button-div'>
            <button className='left-button'><span className='space-grotesk-regular '>Join Here</span></button></div>
        </div>

        <div className="right-container">
          <iframe className="frame" src="https://discord.com/widget?id=1357044781171347466&theme=dark" allowtransparency="true" frameborder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
        </div>

      </div>
    </div>
  )
}

export default About

