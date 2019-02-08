import React, { Component } from 'react';

export default class Cloud extends Component {
    render() {
        return (
            <div id="services" class="container-fluid text-center bg-grey">
                <h2>Cloud/Hosting Services</h2>
                <h4>Tools I Use to Host</h4>
                <br></br>
                <div class="row slideanim">
                    <div class="col-sm-4">
                        <span class="prog-lang"><i class="devicon-github-plain colored" style={{ fontSize: 50 }}></i></span>
                        <h4>GitHub</h4>
                    </div>
                    <div class="col-sm-4">
                        <span class="prog-lang"><i class="devicon-heroku-plain colored" style={{ fontSize: 50 }}></i></span>
                        <h4>Heroku</h4>
                    </div>
                    <div class="col-sm-4">
                        <span class="prog-lang"><i class="devicon-google-plain colored" style={{ fontSize: 50 }}></i></span>
                        <h4>Google</h4>
                    </div>
                </div>
                <br></br>
            </div>
        )
    }
}

