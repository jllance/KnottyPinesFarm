import React, { Component } from "react";
import DirectoryComponents from "./DirectoryComponents";

import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./KnottyPinesFarm";
import Contact from "./contactFarm";
import { COMMENTS } from "../shared/comments";
import AboutComponent from "./OurFarm";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      KnottyPinesFarm: KnottyPinesFarm,
      comments: COMMENTS,

    };
  }

  render() {



    return (
      <div>
        <Header />

        <Footer />
      </div>
    );
  }
}

export default Main;
