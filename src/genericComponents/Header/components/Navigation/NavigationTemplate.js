import React from "react";
import "./NavigationTemplate.css";



function NavigationTemplate(props) {
  return (
    <nav>
      <ul className="nav-items">
        <li className="nav-list-item">{props.collections}</li>
        <li className="nav-list-item">{props.men}</li>
        <li className="nav-list-item">{props.women}</li>
        <li className="nav-list-item">{props.about}</li>
        <li className="nav-list-item">{props.contact}</li>
      </ul>
    </nav>
  );
}

export default NavigationTemplate;
