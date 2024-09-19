import React from 'react'
import { FaPhoneAlt, FaComments } from 'react-icons/fa'
import img from '../images/image.png'

function Form() {
  return (
    <div className='container'>
      <div className='Form'>
        <button className='contact-button'>
          <FaComments size={24} /> {/* Chat icon */}
          VIA SUPPORT CHAT
        </button>
        <button className='contact-button '>
          <FaPhoneAlt size={24} /> {/* Phone icon */}
          VIA CALL
        </button>
      </div>
      <div className='form-img'>
        <img src={img} alt='' />
      </div>
    </div>
  )
}

export default Form
