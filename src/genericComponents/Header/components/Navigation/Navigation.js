import React from "react";
import NavigationTemplate from "./NavigationTemplate";



function Navigation() {
  return <NavigationTemplate 
  collections={"Collection"} 
  men={"Men"}
  women= {"Women"}
  about={"About"}
  contact={"Contact"} />;
}

export default Navigation;
