import React from 'react'
import UserInfoTemplate from './UserInfoTemplate'
import Avatar from './Cart/Avatar'
import Cart from './Cart/Cart'


function UserInfo(props) {
  return (
    <UserInfoTemplate avatar ={<Avatar/>} cart = {<Cart handleCart={props.handleCart}/>}/>
  )
}

export default UserInfo