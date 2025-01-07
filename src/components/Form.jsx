
import React from 'react'
import './FormStyles.css'

const Form = () => {
  return (
    <div className="form">
        <label>Your Name</label>
        <input type="text"/>
        <label>Email</label>
        <input type="email"/>
        <label>Subject</label>
        <input type="text"/>
        <label>Message</label>
        <textarea rows="6" placeholder="Type your Message here" />
        <button className="btn">Submit</button>
    </div>
  )
}

export default Form