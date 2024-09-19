import React from 'react'
import { FaPhoneAlt, FaComments } from 'react-icons/fa'

function Form() {
  return (
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
  )
}

export default Form
