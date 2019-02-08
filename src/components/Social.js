import React, { Component } from 'react';

export default class Social extends Component {
    render() {
        return (
            <div id="social" class="container-fluid text-center">
                <h2>Social</h2>
                <h4>Connect With Me!</h4><br></br>

                <div class="col-sm-4">
                    <span class="links"><a href="https://github.com/fzhang13" target="_blank" rel="noopener noreferrer"><i class="fab fa-github" style={{ fontSize: 50 }}></i>
                        <p><strong>GitHub</strong></p></a></span>
                    <p></p>
                </div>
                <div class="col-sm-4">
                    <span class="links"><a href="https://www.linkedin.com/in/felix-zhang-48b50a64/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin" style={{ fontSize: 50 }}></i>
                        <p><strong>LinkedIn</strong></p></a></span>
                    <p></p>
                </div>
                <div class="col-sm-4">
                    <span class="links"><a href="https://www.instagram.com/fzhang1213/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram" style={{ fontSize: 50 }}></i>
                        <p><strong>Instagram</strong></p></a></span>
                    <p></p>
                </div>

                <br></br>
            </div>
        )
    }
}

