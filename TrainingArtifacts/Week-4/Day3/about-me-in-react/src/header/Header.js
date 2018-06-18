import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header class='header'>
                <nav>
                    <div class="float-left">
                        <Link to="/">About Me</Link>
                        <Link to="/posts">Posts</Link>
                        {/* <a href="skills.html">Skills</a> */}
                    </div>
                    <div class="float-right">
                        <a href="https://github.com/sundarcodes/" target="_blank">
                            <i class="fab fa-github"></i>
                        </a>
                        <a>
                            <i class="fab fa-twitter"></i>
                        </a>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header