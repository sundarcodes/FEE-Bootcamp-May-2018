import React, { Component } from 'react';

class Temperature extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temperatureToDisplay: props.temperatureInfo.tempInKelvin - 270
        }
    }
    render() {
        return (
            <div class="banner-left">
                <div class="column1">
                    <img src="images/cloudy.png" id="cond-img" alt="weather_image"></img>
                </div>
                <div class="column2" id="temp-disp">
                    <div class="col2_1">
                        <span id="temp">{this.props.temperatureInfo.tempInKelvin === '' ? '-'
                            : this.state.temperatureToDisplay}</span>
                    </div>
                    <div class="col2_2">
                        <a id="cel">&#8451;</a>|
                <a id="fah">&#8457;</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Temperature;


{/* <div>
    <div class="banner">
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
    </div>
</div> */}

{/* <div>
<div class="banner">
    <div class="banner-left">
        <div class="column1">
            <img src="images/cloudy.png" id="cond-img" alt="weather_image"></img>
        </div>
        <div class="column2" id="temp-disp">
            <div class="col2_1">
                <span id="temp">40</span>
            </div>
            <div class="col2_2">
                <a id="cel">&#8451;</a>|
            <a id="fah">&#8457;</a>
            </div>
        </div>
    </div>
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
</div>
</div> */}