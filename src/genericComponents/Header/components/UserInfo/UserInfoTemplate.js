import React from 'react'
import './UserInfoTemplate.css'



function UserInfoTemplate(props) {
  return (
    <div className='user-info'>
        {props.cart}
        {props.avatar}
    </div>
  )
}

export default UserInfoTemplate