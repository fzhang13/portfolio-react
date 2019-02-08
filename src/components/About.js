import React, {Component} from 'react';

export default class About extends Component {
    render(){
    return (
        <div id="about" class="container-fluid">
            <div class="row">
                <div class="col-sm-8">
                    <h2>About Me</h2><br></br>
                    <h4>Hi. My name is Felix Zhang, and welcome to my portfolio website!</h4><br></br>
                    <p>I am a first generation Chinese immigrant that spent the better part of my two decades in Canada.
                      For as long as I can remember, I have always had a strong passion for technology. Recently I decided to take that
                      passion and make it a reality. Professionally, I see myself as a motivated individual with a strong work ethic
                      and attention to detail. In my spare time, I like to apply myself physically and challenge myself
                      to reach new heights constantly.
                    </p>
                    <br></br><a href="./resume.html"> <button class="btn btn-default btn-lg active">CV/Resume</button></a>
                    
                    <div class="col-sm-4">
                        <span class="portrait"><img src="img/portrait.jpg" alt="portrait" class="headshot"></img></span>
                    </div>
                </div>
            </div>
        </div>
            )
        }
    }
