import React, { Component } from 'react';

class ContactInformation extends Component {
    render() {
        return (
            <div>
                <div id="iddiv">
                    <label for="mobnum">Mobile Number</label>
                    <input type="text" class="form-control" id="mobnum" />
                    <i class="glyphicon glyphicon-remove form-control-feedback mobwrong"></i>
                    <i class="glyphicon glyphicon-ok form-control-feedback mobtick "></i>
                </div>
                <span id="mobnumerror" class="spanHide"></span>
                <br />
                <br />
                <br />
                <div id="iddiv">
                    <label for="emernum">Alternate Mobile Number</label>
                    <input type="text" class="form-control" id="emernum" />
                    <i class="glyphicon glyphicon-remove form-control-feedback emerwrong"></i>
                    <i class="glyphicon glyphicon-ok form-control-feedback emertick "></i>
                </div>
                <span id="emernumerror" class="spanHide"></span>
                <span class="alert alert-danger" >
                    Enter atleast one contact number
            </span>
            </div>
        );
    }
}

export default ContactInformation;