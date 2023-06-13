import React from 'react'
import './HeaderTemplate.css'




function HeaderTemplate(props) {
  return (
    <header className='header'>
      <div className='burger-nav'>
        {props.burgerNav}
      </div>
      {props.logo}
        <div className="logo-nav">
            {props.nav}
        </div>    
        {props.userInfo}
    </header>

  )
}

export default HeaderTemplate