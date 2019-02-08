import React,{Component} from 'react';

export default class Nav extends Component{
  render(){
    return(
        <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
          <div class="navbar-header nav-bar-left">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>                        
            </button>
            <a class="navbar-brand navbar-left" href="#">Felix Zhang</a>
          </div>
          <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav navbar-right">
              <li><a href="#about">ABOUT</a></li>
              <li><a href="#skills">SKILLS</a></li>
              <li><a href="#software">TOOLS</a></li>
              <li><a href="#services">CLOUD</a></li>
              <li><a href="#social">SOCIAL</a></li>
              <li><a href="#contact">CONTACT</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
}
}

