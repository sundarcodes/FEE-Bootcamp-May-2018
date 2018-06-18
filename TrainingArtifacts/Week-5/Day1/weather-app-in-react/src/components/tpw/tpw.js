import React, { Component } from 'react';

class Tpw extends Component {
    render() {
        return (
            <div class="banner-right">
                <div class="row1">
                    <div class="pressure"> Pressure: <span id="pressure"> 80Hg</span></div>
                    <div class="humidity"> Humidity: <span id="humidity"> 80%</span></div>
                    <div class="wind"> Wind:<span id="wind"> 80%</span></div>
                </div>
                <div class="row2">
                    <div class="btn-group">
                        <button type="button" class="btn btn-primary">Temperature</button>
                        <button type="button" class="btn btn-primary">Pressure</button>
                        <button type="button" class="btn btn-primary">Wind</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tpw;