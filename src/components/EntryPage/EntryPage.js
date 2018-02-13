import React from "react";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";
import Welcome from "./Welcome";

import "./EntryPage.css";

const EntryPage = () => {
        return (
            <div className="row" style={{ marginTop: "100px" }}>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <Welcome />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 table">
                    <div>
                        <Link to="/"><h3 className={`EntryPage_formStyle ${window.location.hash.indexOf("/register") !== -1 ? "EntryPage_hover" : "EntryPage_hover EntryPage_checked"}`} onClick={this.changeClass} style={{paddingTop: "9px"}}>Log In</h3></Link>
                        <Link to="/register"><h3 className={`EntryPage_formStyle ${window.location.hash.indexOf("/register") !== -1 ? "EntryPage_hover EntryPage_checked" : "EntryPage_hover"}`} style={{paddingTop: "9px"}}>Register</h3></Link>
                    </div>
                    <div className="EntryPage_switchBox">
                        <div>
                            <Switch>
                                <Route exact path="/login" component={Login} />
                                <Route exact path="/register" component={Register} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>

        );
}

export default EntryPage;