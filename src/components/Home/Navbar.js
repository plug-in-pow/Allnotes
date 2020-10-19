import React, { Component } from 'react';
import SignOutLinks from './SignOutLinks';
import SignUpLinks from './SignUpLinks';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component {
    render() {
        const { auth } = this.props;
        const links = auth.uid ? <SignOutLinks /> : <SignUpLinks />;
        return (
            <nav className="nav-wrapper z-depth-0">
                <div className="container">
                    <Link to="/" className="brand-logo blue-text"><b>Allnotes</b></Link>
                    {auth.isLoaded && links}
                </div>
            </nav>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar);