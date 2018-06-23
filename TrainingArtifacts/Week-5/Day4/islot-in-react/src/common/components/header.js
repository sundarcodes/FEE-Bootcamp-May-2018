import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link className="navbar-brand" to={props.isAdmin ? "/admin" : "/interviewer"}>iSlot</Link>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <form className="navbar-form navbar-left">
                        <ul className="nav navbar-nav navbar-right">
                            {props.isAdmin && <li><Link to="/admin/analytics">Analytics</Link></li>}
                        </ul>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Header;