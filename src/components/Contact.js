import React, { Component } from 'react';

export default class Contact extends Component {
    render() {
        return (
            <div id="contact" class="container-fluid text-center bg-grey">
                <h2 class="text-center">CONTACT</h2>
                <div class="row">
                    <div class="col-sm-4">
                        <p>Contact me and I will get back to you ASAP.</p>
                        <p><span class="location"><i class="fas fa-map-marked-alt"></i></span> Toronto, ON, Canada</p>
                        <p><span class="phone"><i class="fas fa-mobile"></i></span> <a href="tel:416-669-3928">+1 416-669-3928</a></p>
                        <p><span class="email"><i class="fas fa-at"></i></span><a href="mailto:xszhang3@myseneca.ca"> xszhang3@myseneca.ca</a></p>
                    </div>

                    <form action="mailto:xszhang3@myseneca.ca" method="POST" enctype="text/plain">
                        <div class="row">
                            <div class="col-sm-4 form-group">
                                <input class="form-control" id="name" placeholder="Name" type="text" required></input>
                            </div>
                            <div class="col-sm-4 form-group">
                                <input class="form-control" id="email" placeholder="Email" type="email" required></input>
                            </div>
                            <div class="col-sm-4  col-sm-offset-4 form-group">
                                <textarea class="form-control" id="message" placeholder="Message" rows="5" maxlength="500"></textarea><br></br>
                            </div>
                            <div class="row">
                                <div class="col-sm-12 form-group">
                                    <button class="btn btn-default" type="submit">Send</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>


        )

    }
}

