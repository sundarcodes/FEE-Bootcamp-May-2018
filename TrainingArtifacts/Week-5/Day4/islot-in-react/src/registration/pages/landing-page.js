import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './landing-page.css';

class LandingPage extends Component {
    render() {
        return (
            <div>
                <h1 className="banner text-center">Welcome to iSlot App</h1>
                <div className="buttonContainer">
                    <Link to="login" className="btn btn-primary">Login</Link>
                    <Link to="interviewer-signup" className="btn btn-primary">Sign up as Interviewer</Link>
                    <Link to="admin-signup" className="btn btn-primary">Sign up as Admin</Link>
                </div>
            </div>
        );
    }
}

export default LandingPage;