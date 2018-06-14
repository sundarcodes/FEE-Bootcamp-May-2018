import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// class Counter extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { seconds: 2  };
//     }
//     incremantCounter() {
//         this.setState((prevState, props) => { return { seconds: prevState.seconds + 3 } })
//     }
//     componentDidMount() {
//         this.timerId = setInterval(() => this.incremantCounter(), 2000)
//     }
//     componentWillUnmount() {
//         clearInterval(this.timerId);
//     }
//     render() {
//         return (
//             <div><h1>Counter Machine</h1>
//                 <h2>Seconds{this.state.seconds}s</h2></div>
//         );
//     }
// }


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
