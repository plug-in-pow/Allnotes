import React, { Component } from 'react';
import SignOutLinks from './SignOutLinks';
import SignUpLinks from './SignUpLinks';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="nav-wrapper z-depth-0">
                <div className="container">
                    <Link to="/" className="brand-logo blue-text"><b>Allnotes</b></Link>
                    <SignOutLinks />
                    <SignUpLinks />
                </div>
            </nav>
        );
    }
}

export default Navbar;