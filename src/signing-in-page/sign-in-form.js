import React, { Component } from "react";

import SignInTitle from "./sign-in-title";
import SignInBody from "./sign-in-body/sign-in-body";

export default class SignInForm extends Component {
  constructor() {
    super();

    this.state = {
      LoggedIn: "NOT_LOGGED_IN"
    };
  }

  render() {
    return (
      <div className="form-container">
        <div className="left-side">
          <SignInTitle />
          <SignInBody />
        </div>
        <div className="right-side">
          <p>
            My alaskan adventrue was truely amazing thanks to this random sign
            in page!
          </p>
          <p>-No One Ever...</p>
        </div>
      </div>
    );
  }
}
