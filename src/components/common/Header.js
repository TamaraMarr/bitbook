import React, { Component } from "react";
import { Link } from "react-router-dom";

import AuthenticationService from "../../services/AuthenticationService";

import "./Header.css";

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.logout = new AuthenticationService();
    }

    render() {
        return (
            <nav className="col-12 navbar navbar-expand-lg navbar-dark Header_navColor" >
                <Link to="/feed" className="Header_logoStyle">
                    BitBook
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end pull-right" id="navbarColor01">
                    <ul className="navbar-nav" style={{ fontSize: "1.2em", backgroundColor: "#785964" }}>
                        <li data-toggle="collapse" data-target="#navbarColor01">
                            <Link className="Header_navLinkStyle" to="/feed">
                                Feed<span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li data-toggle="collapse" data-target="#navbarColor01">
                            <Link className="Header_navLinkStyle" to="/people">
                                People
                            </Link>
                        </li>
                        <li data-toggle="collapse" data-target="#navbarColor01">
                            <Link className="Header_navLinkStyle" to="/profile">
                                Profile
                            </Link>
                        </li>
                        <li onClick={this.logout.logout}>
                            <Link className="Header_navLinkStyle" to="/login">
                                Log Out
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}