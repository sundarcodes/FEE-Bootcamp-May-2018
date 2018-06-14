import React, { Component } from 'react';
import Header from '../components/header/header'
import Tile from '../components/tile/tile';

class LandingPage extends Component {
    constructor() {
        super();
        this.skillInformation = [
            {
                name: 'HTML',
                description: 'aaaa',
                imgURL: '/images/html.png'
            },
            {
                name: 'CSS',
                description: 'aaaa',
                imgURL: '/images/html.png'
            },
            {
                name: 'JS',
                description: 'aaaa',
                imgURL: '/images/html.png'
            },
            {
                name: 'React',
                description: 'aaaa',
                imgURL: '/images/html.png'
            },
            {
                name: 'Angular',
                description: 'aaaa',
                imgURL: '/images/html.png'
            },
            {
                name: 'Webpack',
                description: 'aaaa',
                imgURL: '/images/html.png'
            },
            {
                name: 'HTML',
                description: 'aaaa',
                imgURL: '/images/html.png'
            },
            {
                name: 'CSS',
                description: 'aaaa',
                imgURL: '/images/html.png'
            },
            {
                name: 'JS',
                description: 'aaaa',
                imgURL: '/images/html.png'
            },
            {
                name: 'React',
                description: 'aaaa',
                imgURL: '/images/html.png'
            },
            {
                name: 'Angular',
                description: 'aaaa',
                imgURL: '/images/html.png'
            },
            {
                name: 'Webpack',
                description: 'aaaa',
                imgURL: '/images/html.png'
            }
        ]
    }
    render() {
        return (
            <div>
                <Header text="We are learning" />
                <div className="container">
                    {this.skillInformation.map(skill => {
                        return (
                            <Tile skillName={skill.name} skillDescription={skill.description}
                                skillImg={skill.imgURL} />
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default LandingPage