import React from "react";
import ReactDOM from "react-dom";
import Aboutus from "./Aboutus";





   it("render", ()=> {
        const section =document.createElement ("section");
        ReactDOM.render(<Aboutus />, section);
    } )