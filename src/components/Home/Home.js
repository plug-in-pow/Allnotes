import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Section1 from './Section1';
import Section2 from './Section2';

class Home extends Component {
    render() {
        return (
            < BrowserRouter >
                <div className="Home">
                    <Navbar />
                    <Section1 />
                    <Section2 />
                </div>
            </BrowserRouter>
        );
    }
}

export default Home;
