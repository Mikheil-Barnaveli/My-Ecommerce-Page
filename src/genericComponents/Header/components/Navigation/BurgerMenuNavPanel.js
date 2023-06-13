import React from 'react';
import './BurgerMenuNavPanel.css'

function BurgerMenuNavPanel(props) {
  return (
    <div id='burger-nav-display' style={{width:props.navWidth, display:props.burgerNavDisplay}}>
      <a className="menu-item-link" href="/" style={{display:props.navItemDisplay}}>
      {props.collections}
      </a>
      <a className="menu-item-link" href="/about" style={{display:props.navItemDisplay}}>
      {props.men}
      </a>
      <a className="menu-item-link" href="/contact" style={{display:props.navItemDisplay}}>
      {props.women}
      </a>
      <a className="menu-item-link" href="/contact" style={{display:props.navItemDisplay}}> 
      {props.about}
      </a>
      <a className="menu-item-link" href="/contact" style={{display:props.navItemDisplay}}>
      {props.contact}
      </a>
      </div>
  );
}

export default BurgerMenuNavPanel;
