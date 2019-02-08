import React, { Component } from 'react';

export default class Tools extends Component {
  render() {
    return (
      <div id="software" class="container-fluid text-center">
        <h2>Software</h2>
        <h4>Tools I Use to Create</h4>
        <br></br>
        <div class="row slideanim">
          <div class="col-sm-4">
            <span class="prog-lang"><i class="devicon-visualstudio-plain colored" style={{ fontSize: 50 }}></i></span>
            <h4>Microsoft VS/Code</h4>
          </div>
          <div class="col-sm-4">
            <span class="prog-lang"><i class="fab fa-apple" style={{ fontSize: 50 }}></i></span>
            <h4>Xcode/Mac OS</h4>
          </div>
          <div class="col-sm-4">
            <span class="prog-lang"><i class="devicon-oracle-plain colored" style={{ fontSize: 50 }}></i></span>
            <h4>Oracle SQL developer</h4>
          </div>
        </div>
        <br></br>
        <div class="row slideanim">
          <div class="col-sm-4">
            <span class="prog-lang"><i class="devicon-windows8-original colored" style={{ fontSize: 50 }}></i></span>
            <h4>Microsoft OS</h4>
          </div>
          <div class="col-sm-4">
            <span class="prog-lang"><i class="devicon-ubuntu-plain colored" style={{ fontSize: 50 }}></i></span>
            <h4>Ubuntu</h4>
          </div>
          <div class="col-sm-4">
            <span class="prog-lang"><i class="devicon-linux-plain colored" style={{ fontSize: 50 }}></i></span>
            <h4>Linux</h4>
          </div>
        </div>
        <br></br>
        <div class="row slideanim">
          <div class="col-sm-4">
            <span class="prog-lang"><i class="devicon-android-plain colored" style={{ fontSize: 50 }}></i></span>
            <h4>Android Studio</h4>
          </div>
          <div class="col-sm-4">
            <span class="prog-lang"><i class="devicon-vim-plain colored" style={{ fontSize: 50 }}></i></span>
            <h4>Vim</h4>
          </div>
          <div class="col-sm-4">
            <span class="prog-lang"><i class="devicon-webstorm-plain colored" style={{ fontSize: 50 }}></i></span>
            <h4>Webstorm</h4>
          </div>
        </div>
      </div>
    )

  }
}

