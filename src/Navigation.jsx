import React, {Component} from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom'

// See a great routing tutorial here for more sophisticated routing: https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf

export class Navigation extends Component {
    render(){
        return(
            <Navbar fixedTop inverse collapseOnSelect>
              <Navbar.Header>
                <Navbar.Brand>
                  <Link to='/'>Sam Kern</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav pullRight>
                  <NavItem><Link to='/'>About</Link></NavItem>
                  <NavItem><Link to='/work'>Work</Link></NavItem>
                  <NavItem><Link to='/'>Resume</Link></NavItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
        )
    }
}
