import React, { Component } from "react";

export default class EnlargeImage extends Component {
    constructor(props) {
        super(props);

        this.state ={
            visibility: ""
        };

        this.closeImg = this.closeImg.bind(this);
    }

    closeImg(event){
        if(event.target.name === "image") {
            return;
        }
        
        this.setState({
            visibility: "hidden"
        });
        this.props.resetHiddenPic();
    }

    render() {
        if (!this.props.imgSrc) {
            return <div></div>;
        } else {
            let isItVisible = this.props.visibility ? this.state.visibility : "";
            return (
                <div onClick ={this.closeImg} id="imgEnlarger" className="col-12 " style={{ visibility: isItVisible, position: "fixed", top: 0, bottom: 0, left: 0, right: 0,  zIndex: "99", backgroundColor: "rgba(0,0,0,0.5)" }}>
                    <div style={{ display: "table", width:"100%", height:"100%" }}>
                        <div onClick={this.preventDefault} style={{ display:"table-cell" , textAlign:"center", verticalAlign:"middle", zIndex: "100" }}>
                            <div style={{ position: "relative" }}>
                                <img src={this.props.imgSrc} name="image" width="60%" alt="Enlarged Pic"/>
                                <input type="image" value="Close" src="https://image.flaticon.com/icons/svg/61/61155.svg" alt="Close" onClick={this.closeImg} style={{ position: "absolute", top: "-35px", rigth: "-55px", width: "1%" }} />
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}