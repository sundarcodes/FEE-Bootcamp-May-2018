import React, { Component } from 'react';

function DayTile(props) {
    return (
        <div className="col-xs-3" id="grid1" >
            <p id="fday1">{props.dayInfo.day}</p>
            <img src={props.dayInfo.imageURL} id="fimg1" alt="image" />
            <p><span id="high1">{props.dayInfo.maxTemp}</span><sup>o</sup><span id="low1">{props.dayInfo.minTemp}</span><sup>o</sup></p>
        </div>
    );
}

export default DayTile;