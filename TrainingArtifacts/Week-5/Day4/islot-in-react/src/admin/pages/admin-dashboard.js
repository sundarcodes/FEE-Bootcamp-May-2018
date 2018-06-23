import React, { Component } from 'react';
import Header from '../../common/components/header';
import { Link } from 'react-router-dom';

class AdminDashboard extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <h1 className="text-center">Admin Dashboard</h1>
                    <Link to="/admin/event">Go to Event</Link>
                </div>
            </div>
        );
    }
}

export default AdminDashboard;