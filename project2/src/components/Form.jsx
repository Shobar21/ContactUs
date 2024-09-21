import React, { useState } from 'react'
import { MdMessage } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import img from '../images/image.png'
import Button from './Button/Button'

function Form() {
  // Declare state for name, email, and text inputs
  const [name, setName] = useState('ani')
  const [email, setEmail] = useState('')
  const [text, setText] = useState('')

  // State to hold submitted values
  const [submittedData, setSubmittedData] = useState({})

  // Handle form submission
  const onSubmit = (e) => {
    e.preventDefault()

    // Update state based on form input values
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      text: e.target.text.value,
    }
    setSubmittedData(formData)

    // Reset form inputs (optional)
    setName('')
    setEmail('')
    setText('')
  }

  return (
    <div className='container'>
      <div className='Form'>
        <div className='top-btn'>
          <Button
            text='VIA SUPPORT CHAT'
            icon={<MdMessage fontSize='24px' />}
          />
          <Button text='VIA CALL' icon={<FaPhoneAlt fontSize='24px' />} />
        </div>
        <Button
          isOutline={true}
          text='VIA EMAIL FORM'
          icon={<HiMail fontSize='24px' />}
        />

        <form onSubmit={onSubmit}>
          <div className='form_container'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)} // Update name on input change
            />
          </div>
          <div className='form_container'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email on input change
            />
          </div>
          <div className='form_container'>
            <label htmlFor='text'>Text</label>
            <textarea
              name='text'
              rows='8'
              value={text}
              onChange={(e) => setText(e.target.value)} // Update text on input change
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'end' }}>
            <Button text='Submit Button' />
          </div>
        </form>

        {/* Display the submitted data */}
        {submittedData.name && (
          <div className='submitted-info'>
            <h3>Submitted Information</h3>
            <p>
              <strong>Name:</strong> {submittedData.name}
            </p>
            <p>
              <strong>Email:</strong> {submittedData.email}
            </p>
            <p>
              <strong>Text:</strong> {submittedData.text}
            </p>
          </div>
        )}
      </div>
      <div className='form-img'>
        <img src={img} alt='' />
      </div>
    </div>
  )
}

export default Form
