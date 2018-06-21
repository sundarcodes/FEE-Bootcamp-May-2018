import React, { Component } from 'react';

class LoginPage extends Component {
    doLogin = () => {
        console.log('login button clicked');
    }
    render() {
        return (
            <div className="login-container">
                <form noValidate>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <button type="button" className="btn btn-primary" onClick={this.doLogin}>Login</button>
                </form>
            </div>
        );
    }
}

export default LoginPage;