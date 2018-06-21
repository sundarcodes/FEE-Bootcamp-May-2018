import React, { Component } from 'react';
import LandingPage from './landing-page';
import LoginPage from './login-page';

import { Route, Switch } from 'react-router-dom'
import InterviewerSignUp from './inteviewer-signup';

const RegistrationRoutes = ({ match }) => {
    return (
        <div>
            {/* <Switch> */}
            <Route path="" exact component={LandingPage} />
            <Route path={match.url + 'login'} exact component={LoginPage} />
            <Route path={match.url + 'interviewer-signup'} exact component={InterviewerSignUp} />
            {/* </Switch> */}
        </div>
    )
}

// class RegistrationRoutes extends Component {
//     constructor({ match }) {
//         super();
//         console.log(match);
//     }
//     render() {
//         console.log(this.props.match);
//         return (
//             <div>
//                 {/* <Switch> */}
//                 <Route path="" exact component={LandingPage} />
//                 <Route path={this.props.match.url + 'login'} exact component={LoginPage} />
//                 <Route path={this.props.match.url + 'interviewer-signup'} exact component={InterviewerSignUp} />
//                 {/* </Switch> */}
//             </div>
//         );
//     }
// }

export default RegistrationRoutes;