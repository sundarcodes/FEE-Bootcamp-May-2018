import React from 'react';

// class Header extends Component {
//     render() {
//         return (
//             <div>
//                 <h1> --- {this.props.text} -- </h1>
//             </div>
//         );
//     }
// }

function Header(props) {
    return (
        <div className="text-center">
            <h1> --- {props.text} -- </h1>
        </div>
    )
}

export default Header;