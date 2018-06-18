import React, { Component } from 'react';
import './summary.css';

function Summary(props) {
    return (
        <div>
            <div class="searched-place" id="searched-place">
                <span id="place">{props.summaryInfo.cityLocation}
                </span>
            </div>
            <div class="day" id="current-day">
                <span id="day">{props.summaryInfo.day}</span>
            </div>
            <div class="weather-condition">
                <p id="cond">{props.summaryInfo.weatherCondition}</p>
            </div>
        </div>
    )
}

export default Summary;