import React, { Component } from 'react';
import './Content.css';

class LandingPageContent extends Component {
    render() {
        return (
            <section>
                <h1>Hello</h1>
                <div class='content-container'>
                    <p>I am Sundar, a software engineer having 12+ yrs of experience in writing and developing network, system and web application
                      softwares. Started my career as a C,C++ programmer and has helped companies build network mangement softwares and later
                      went on to build stock exchange management systems software. Moved to web and mobile app development over the last
      couple of years and has absolutely enjoyed the transition since then.</p>
                    <p>Apart from coding, I love teaching and reading. I was a mentor in a programming bootcamp based out of India and enjoyed
                      every bit of it. If you don’t find me coding or reading, then you would either find me playing with my daughter or
                      helping out my wife setting up our home. But I have to admit that playing with my daughter is the most fun of them
      all :)</p>
                    <p>Over the years, I got to realize that writing code is an art which is not just about solving a problem but more importantly
      to write in such a way people are able to read, understand, learn, appreciate and maintain it.</p>
                    <p>The
      <a href="posts.html">posts</a> are my own little way of sharing my knowledge and giving back to the community from where I have learned
                                                            a lot. I also believe that knowledge is one of few commodities which when shared never decreases but on the contrary
      increases :) Would love to have your feedback, comments on my ramblings as its all based on my own little experiences..</p>
                </div>
            </section>
        )
    }
}

export default LandingPageContent