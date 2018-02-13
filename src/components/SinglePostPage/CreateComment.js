import React, { Component } from "react";

import DataService from "../../services/DataService";
import RedirectionService from "../../services/RedirectionService";

import "./CreateComment.css";

export default class CreateComment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comment: ""
        };

        this.dataService = new DataService();
        this.redirectionService = new RedirectionService();

        this.bindInit();
    }

    bindInit() {
        this.postComment = this.postComment.bind(this);
        this.collectCommentContent = this.collectCommentContent.bind(this);
    }

    postComment() {
        const body = {
            body: this.state.comment,
            postId: this.props.postId
        };

        this.dataService.postComment(
            body,
            response => {
                this.setState({
                    comment: ""
                });
                this.props.notifyAboutComment();
            },
            error => {
                console.log(error);
            }
        );
    }

    collectCommentContent(e) {
        const comment = e.target.value;
        this.setState({
            comment
        });
    }

    render() {
        return (
            <div>
                <textarea
                    onChange={this.collectCommentContent}
                    value={this.state.comment}
                    rows="3"
                    cols="100"
                    placeholder="Enter your comment here"
                    className="form-control"
                    style={{ width: "95%", margin: "5px auto" }}
                />
                <input
                    type="button"
                    value="Submit"
                    onClick={this.postComment}
                    className="btn CreateComment_generalButtonStyle col-sm-4 offset-sm-7 col-md-3 offset-md-8 col-lg-2 offset-lg-9"
                />
            </div>
        );
    }
}
