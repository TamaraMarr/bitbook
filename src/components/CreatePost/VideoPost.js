import React, { Component } from "react";

import "./Posts.css";

export default class VideoPost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: false,
            isThereError: false,
            videoPostContent: ""
        };

        this.bindInit();
    }

    bindInit() {
        this.createVideoPost = this.createVideoPost.bind(this);
        this.getVideoPost = this.getVideoPost.bind(this);
    }

    getVideoPost(event) {
        let videoPostContent = event.target.value;

        this.setState({
            videoPostContent
        });
    }

    createVideoPost() {
        const videoPostBody = {
            videoUrl: this.state.videoPostContent,
        };

        this.props.onPostCreate(videoPostBody, "video");
    }


    render() {
        return (
            <div>
                <input type="text" placeholder="This is a video post" onChange={this.getVideoPost} className="form-control Posts_inputStyle" required />
                <div className="row">
                    <div className="col-4 col-sm-4 col-md-3 col-lg-3 col-xl-3">
                        <input type="button" value="Post" className="btn Posts_postButtonStyle" name="videoPost" onClick={this.createVideoPost} />
                    </div>
                </div>
                <p>{this.state.isThereError ? `Error ${this.state.error}: Please enter the text of your post` : ""}</p>
            </div>
        );
    }
}