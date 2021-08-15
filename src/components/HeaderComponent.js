import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';

class Header extends Component {

        constructor(props) {
            super(props);
            this.state = {
                isNavOpen: false,
                isModalOpen: false,
            };
            this.toggleNav = this.toggleNav.bind(this)
        }

        toggleNav() {
            this.setState({
                isNavOpen: !this.state.isNavOpen
            });
        }

    render() {

        return(
            <div>
                <Navbar color='dark' dark expand='md' sticky='top'>
                    <NavbarBrand to="/">
                        On Partners
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/platform">
                                        <i className="fa fa-home fa-lg"/> Platform
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/directory">
                                        <i className="fa fa-list fa-lg"/> Blog
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <i className="fa fa-info fa-lg"/> About Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <i className="fa fa-address-card fa-lg"/> Sign Up
                                    </NavLink>
                                </NavItem>
                            </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Header
