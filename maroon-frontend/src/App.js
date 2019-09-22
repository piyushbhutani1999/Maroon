import React, { Component } from "react";
import Modal from "./components/Modal";
import axios from "axios";

const 

class Link extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
            isActive: true
        };
    }
    render() {
        return (
            <a href={this.props.url}>
                {this.props.value}
            </a> 
        );
    }
}

class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return(
            this.createNavBar()
            //this.renderLink("home", "url")
        );
    }

    renderLink(value, url) {
        return (
            <Link value={value} url={url}></Link>
        );
    }

    createNavBar() {
        let navLinks = [];
        let i = 0;
        for (var link of this.props.linkList) {
            navLinks.push(<li key={i}>{this.renderLink(link, "url")}</li>);
            i = i + 1;
        }
        return (<ul>{navLinks}</ul>);
    }
}


class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
           <Navbar linkList={['home', 'lome']}>

           </Navbar>
        );
    }
}
export default App;