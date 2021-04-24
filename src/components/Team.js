import React from "react";
import "./team.css";
// import {Spring} from "react-spring"
function Team() {

  
  return (
  // <Spring>{props=>(
  //   <div style={props}></div>
  // )}</Spring>
  <section>
    <div className="container my-5 mt-5 hero_1 ">
      <h1 className="mb-5 text-dark ">Our Team</h1>
      <div className="row">
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-0 shadow">
            <img
              src="https://source.unsplash.com/TMgQMXoglsM/500x350"
              class="card-img-top"
              alt="..."
            />
            <div className="card-body text-center">
              <h5 className="card-title mb-0">Team Member</h5>
              <div className="card-text text-black-50">Founding partner</div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-0 shadow">
            <img
              src="https://source.unsplash.com/9UVmlIb0wJU/500x350"
              class="card-img-top"
              alt="..."
            />
            <div className="card-body text-center">
              <h5 className="card-title mb-0">Team Member</h5>
              <div className="card-text text-black-50">Travel consultant</div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-0 shadow">
            <img
              src="https://source.unsplash.com/sNut2MqSmds/500x350"
              class="card-img-top"
              alt="..."
            />
            <div className="card-body text-center">
              <h5 className="card-title mb-0">Team Member</h5>
              <div className="card-text text-black-50">Travel consultant</div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-0 shadow">
            <img
              src="https://source.unsplash.com/9UVmlIb0wJU/500x350"
              class="card-img-top"
              alt="..."
            />
            <div className="card-body text-center">
              <h5 className="card-title mb-0">Team Member</h5>
              <div className="card-text text-black-50">Travel consultant</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Team;
