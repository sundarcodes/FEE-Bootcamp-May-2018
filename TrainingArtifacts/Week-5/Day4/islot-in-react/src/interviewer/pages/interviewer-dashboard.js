import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class InterviewerDashboard extends Component {
    render() {
        return (
            <div>
                <h1 className="text-center">Interviewer Dash board</h1>
                <Link to="/interviewer/event">Go to event</Link>
            </div>
        );
    }
}

export default InterviewerDashboard;