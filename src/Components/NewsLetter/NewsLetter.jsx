import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className="newsletter">
    <h1>Get Exclusive ofeers on Your Email</h1>
    <p>Subscribe to Our Newsletter and stay updated</p>
    <div>
      <input type="email"  placeholder='Your Email'/>
      <button>Subscribe</button>
    </div>
      
    </div>
  )
}

export default NewsLetter
