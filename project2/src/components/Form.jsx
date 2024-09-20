import React from 'react'
import { MdMessage } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import { HiEmail } from 'react-icons/hi'
import img from '../images/image.png'
import Button from './Button/Button'

function Form() {
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
          icon={<HiEmail fontSize='24px' />}
        />

        <form>
          <div className='form_container'>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' />
          </div>
          <div className='form_container'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' />
          </div>
          <div className='form_container'>
            <label htmlFor='text'>Text</label>
            <input type='text' name='text' />
          </div>
        </form>
      </div>
      <div className='form-img'>{/* <img src={img} alt='' /> */}</div>
    </div>
  )
}

export default Form
