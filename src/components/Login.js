import React, { Component } from "react";
import { observer } from "mobx-react";
import UserStore from "../stores/UserStore";
import LoginForm from "./LoginForm";
import SubmitButton from "./SubmitButton";

class Login extends Component {
  async componentDidMount() {
    try {
      let res = await fetch("/isLoggedIn", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      let result = await res.json();

      if (result && result.success) {
        UserStore.loading = false;
        UserStore.isLoggedIn = true;
        UserStore.username = result.username;
      } else {
        UserStore.loading = false;
        UserStore.isLoggedIn = false;
      }
    } catch (e) {
      UserStore.loading = false;
      UserStore.isLoggedIn = false;
    }
  }
  async doLogout() {
    try {
      let res = await fetch("/logout", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      let result = await res.json();

      if (result && result.success) {
        UserStore.isLoggedIn = false;
        UserStore.username = "";
      }
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    if (UserStore.loading === true) {
      return (
        <div className="login">
          <div className="login-container">
            Welcome {UserStore.username}
            <SubmitButton
              text={"Log out"}
              disabled={false}
              onClick={() => this.doLogout()}
            ></SubmitButton>
          </div>
        </div>
      );
    }
    return (
      <div className="login">
        <div className="login-container">
          <LoginForm />
        </div>
      </div>
    );
  }
}

export default observer(Login);
