import React from 'react'
import avatar from '../../../../../assets/images/image-avatar.png'
import './Avatar.css'

function Avatar({image}) {
  return (

    <img className='avatar-img' src={avatar} alt="User" />
    
  )
}

export default Avatar