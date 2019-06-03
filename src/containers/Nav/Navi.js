import React from 'react';
import './Navi.css';
/* import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap'; */

  import { NavLink as RRNavLink } from 'react-router-dom';
import { Navbar,NavLink,Nav } from 'reactstrap';
// ...


export default class Navi extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div class="navbar-nav ml-auto">
            <Navbar color="light" light expand="md">
                <Nav class="navbar navbar-expand-sm navbar-light bg-light fixed-top p">
                    <NavLink tag={RRNavLink} exact to="/" activeClassName="active" class="nav-item nav-link mx-3">Home</NavLink>
                     <NavLink tag={RRNavLink} exact to="/profile" class="nav-item nav-link mx-3">Profile</NavLink>
                   {/*   <NavLink tag={RRNavLink} exact to="/account-list" class="nav-item nav-link mx-3"> Account Actions</NavLink> */}
                    <NavLink tag={RRNavLink} exact to="/test" class="nav-item nav-link mx-3">test</NavLink>
                </Nav>
            </Navbar>
      {/*   <p>
                    <nav class="navbar navbar-expand-sm navbar-light bg-light fixed-top p">
                <a class="navbar-brand" href="#">Navbar</a>
                
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-
                target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-
                expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ml-auto">
                        <a class="nav-item nav-link mx-3" href="#">Home <span class="sr-only">(current)
                        </span></a>
                        <a class="nav-item nav-link mx-3" href="#">Features</a>
                        <a class="nav-item nav-link mx-3" href="#">Pricing</a>
                        <a class="nav-item nav-link ml-3" href="#">Disabled</a>
                    </div>
                </div>
            </nav>
        </p> */}
      </div>
    );
  }
}