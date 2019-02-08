import React, { Component } from 'react'


export default class Instagram extends Component {

    componentWillMount() {
        const script = document.createElement('script');
        script.src = "https://cdn.curator.io/published/ab355d35-82c5-433e-a3db-42fc699f3b5a.js";
        script.async = true;
        document.body.appendChild(script);
    }
    render() {
        return (
            <div class="container-fluid">
                <div id="curator-feed-felix-zhang"><a href="https://curator.io" target="_blank" rel="noopener noreferrer" class="crt-logo crt-tag">Powered by Curator.io</a></div>
                </div>
        )
    }
}

