import { Component } from "react";
import logo from '../img/logo.svg'

class Header extends Component {

  render(){    
    return(        
      <header id="header" className="header">
        <h1 className="visually-hidden">ToDo app. Create your own to-do list</h1>
        <div className="header__search">
          <a href="index.html">
            <img className="header__logo" src={logo} alt="Senla logo" />
          </a>
          <label htmlFor="toDoSearch">
            <span className="visually-hidden">Search task for to do</span>        
            <input type="text" className="search" id="toDoSearch" placeholder="Search task for to do" />
          </label>
        </div>        
      </header>
    )
  }
}

export default Header;