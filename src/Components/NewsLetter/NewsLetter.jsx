import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to  our newslatter and stay update</p>
        <div>
            <input type="Your Email Id" />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter;