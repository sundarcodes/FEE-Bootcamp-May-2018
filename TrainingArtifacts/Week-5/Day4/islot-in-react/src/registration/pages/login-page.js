import React, { Component } from 'react';

class LoginPage extends Component {
    doLogin = () => {
        console.log('login button clicked');
    }
    render() {
        return (
            <div className="container">
                <h1 className="text-center">Login Page </h1>
            </div>
        );
    }
}

export default LoginPage;