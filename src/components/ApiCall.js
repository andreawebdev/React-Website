import React, { Component } from "react";
import "./ApiCall.css";

export default class ApiCall extends Component {
  constructor() {
    super();
    this.state = {
      character: {},
    };
  }

  // normal request
  // componentDidMount(){
  //     fetch("https://official-joke-api.appspot.com/random_joke")
  //       .then((response) => response.json())

  //       .then((data) => {
  //         this.setState({
  //           character: data,
  //         });
  //       });

  async componentDidMount() {
    try {
      setInterval(async () => {
        const res = await fetch(
          "https://official-joke-api.appspot.com/random_joke"
        );
        const data = await res.json();

        this.setState({
          character: data,
        });
      }, 10000);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <section>
        <div class="joke pt-4 pb-4">
          <h1 className=" text-center text-uppercase my-1"> RANDOM JOKE</h1>
          <h3 className="text-center text-uppercase ">
            {" "}
            {this.state.character.setup}
          </h3>
          <h3 className=" text-center text-uppercase ">
            {" "}
            {this.state.character.punchline}
          </h3>
        </div>
      </section>
    );
  }
}
