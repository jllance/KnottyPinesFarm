import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false,
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Jumbotron fluid>
          <div class="container">
            <div class="row">
              <div class="col-4 col-sm-1 col-md-2">
                <a title="Image from clipart.email">
                  <img
                    src="https://cdn.clipart.email/b6cf98d40ef7ebc50b5c71d270e5dbe0_images-for-rooster-silhouette-clip-art-rooster-silhouette-png-_880-907.jpeg"
                    height="100"
                    width="100"
                    alt="Silhouette Transparent Background Rooster Clipart"
                    class="img-fluid img-thumbnail"
                  />
                </a>
              </div>
              <div class="col-6 text-lg-center ">
                <h1>Knotty Pine Farm</h1>
              </div>
            </div>
          </div>
        </Jumbotron>
        <nav class="navbar navbar-expand-sm navbar-dark sticky-top">
          <div class="container">
            <a class="navbar-brand" href="#" title="Image from clipart.email">
              <img
                src="https://cdn.clipart.email/b6cf98d40ef7ebc50b5c71d270e5dbe0_images-for-rooster-silhouette-clip-art-rooster-silhouette-png-_880-907.jpeg"
                alt="Silhouette Transparent Background Rooster Clipart"
                class="img-fluid img-thumbnail"
                height="50"
                width="50"
              />
            </a>
            <button
              class="navbar-toggler ml-auto img-thumbnail"
              type="button"
              data-toggle="collapse"
              data-target="#farmNavbar"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="farmNavbar">
              <ul class="navbar-nav">
                <li class="nav-item-active">
                  <a class="nav-link" href="#">
                    <i class="fa fa-home fa-lg text-white"></i>Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="OurFarm.html">
                    <i class="fa fa-info fa-lg text-white"></i>About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="Sales">
                    <i class="fa fa-list fa-lg text-white">Sales</i>{" "}
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="Animals.html">
                    <i class="fa fa-address-card fa-lg text-white"></i>Animals
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="contactFarm.html">
                    <i class="fa fa-address-card fa-lg text-white"></i>Contact
                    Us
                  </a>
                </li>
              </ul>
              <span class="navbar-text ml-auto">
                <a role="button" data-toggle="modal" data-target="#loginModal">
                  <i class="fa fa-sign-in"></i> Login
                </a>
              </span>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Header;
