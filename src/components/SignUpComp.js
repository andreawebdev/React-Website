import React, { Component } from "react";
// import "../../App.css"
import "../App.css";
import "./Header.css";
import "./SignUpComp.css";
// import Form from "react-bootstrap/Form";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      fullname: "",
      username: "",
      email: "",
      password: "",
    };
    this.changefullname = this.changefullname.bind(this);
    this.changeusername = this.changeusername.bind(this);
    this.changeemail = this.changeemail.bind(this);
    this.changepassword = this.changepassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    const userRegistered = {
      fullname: this.state.fullname,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };

    
    this.setState({
      fullname: "",
      username: "",
      email: "",
      password: "",
    });
  }
  changefullname(event) {
    this.setState({
      fullname: event.target.value,
    });
  }
  changeusername(event) {
    this.setState({
      username: event.target.value,
    });
  }
  changeemail(event) {
    this.setState({
      email: event.target.value,
    });
  }
  changepassword(event) {
    this.setState({
      password: event.target.value,
    });
  }

  render() {
    return (
      <section>
        <div className="container  text-center my-5">
          <br></br>
          <br></br>
          <div className="text-center mb-5 my-5 ">
            <h1 className=" text-center mb-5 my-5 ">Sign up</h1>
          </div>

          <div className="form-div myform">
            <form onSubmit={this.onSubmit}>
              {/* <span class="label label-default text-left">Fmull</span> */}
              <input
                type="text"
                onChange={this.changefullname}
                value={this.state.fullname}
                className="form-control form-group"
                placeholder="Fullname"
              />
              {/* <span class="label label-default text-left">Fullname</span> */}
              <input
                type="text"
                onChange={this.changeusername}
                value={this.state.username}
                className="form-control form-group"
                placeholder="Username"
              />
              {/* <span class="label label-default text-left">Email</span> */}
              <input
                type="text"
                onChange={this.changeemail}
                value={this.state.email}
                className="form-control form-group"
                placeholder="Email"
              />
              {/* <span class="label label-default text-left">Password</spa */}
              <input
                type="password"
                onChange={this.changepassword}
                value={this.state.password}
                className="form-control form-group"
                placeholder="Password"
              />
              <input type="submit" className="btn button_c  " value="submit" />
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default SignUp;
