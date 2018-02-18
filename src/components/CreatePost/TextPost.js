import React, { Component } from "react";

import DataService from "../../services/DataService";

import "./Posts.css";

export default class TextPost extends Component {
    constructor(props) {
        super(props);

        this.dataService = new DataService();

        this.state = {
            textPostContent: ""
        };

        this.bindInit();
    }

    bindInit() {
        this.createTextPost = this.createTextPost.bind(this);
        this.getTextPost = this.getTextPost.bind(this);
    }

    getTextPost(event) {
        let textPostContent = event.target.value;

        this.setState({
            textPostContent
        });
    }

    createTextPost() {
        const textPostBody = {
            text: this.state.textPostContent,
        };

        this.props.onPostCreate(textPostBody , "text");
    }

    render() {
        return (
            <div>
                <textarea placeholder="What's on your mind?" rows="7" className="form-control Posts_inputStyle" onChange={this.getTextPost} required></textarea>
                <input type="button" value="Post" className="btn Posts_postButtonStyle" name="textPost" onClick={this.createTextPost} />
                <div>{this.state.isThereError ? `Error ${this.state.error}` : ""}</div>
            </div>
        );
    }
}