import React from "react";
import "../Header/style.css"
function Header(props){

return(
    
<nav className="navbar  ">
<a className="navbar-brand" href="/">Clicky GAME</a>



  <ul className="navbar-nav ">
    
    <li className="nav-item">
      <div className="nav-link score">Score: {props.score}</div>
    </li>
    <li className="nav-item">
      <div className="nav-link  topScore">TopScore: {props.topScore}</div>
    </li>
  </ul>
 

</nav>


)


}



export default Header;


