import React from 'react'
import Typewriter from "typewriter-effect";
import './title.css'

function TittleMessage() {
  return (
    <div>
      <div className='titleMessage'>
       <div className='heading '>
        Hii, I am
        <br />
        <span><strong>Talib Saifi 👋</strong></span>
        <div className='sub'>
            <Typewriter options={{strings:["Web Developer", "Coding Enthusiast", "Cricket Lover"],
                autoStart: true,
                loop: true,
                delay: 50
            }}/>
        </div>
       </div>
      </div>
    </div>
  )
}

export default TittleMessage
