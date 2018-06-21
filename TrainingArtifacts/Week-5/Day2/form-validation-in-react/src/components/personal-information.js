import React, { Component } from 'react';

class Personalinformation extends Component {
    render() {
        return (
            <div>
                <label for="bloodgroup">Blood Group</label>
                <select name="bloodgroup" class="form-control" id="bloodgroup">
                    <option value=""></option>
                    <option value="A1+ve">A1+ve</option>
                    <option value="B+ve">B+ve</option>
                    <option value="B-ve">B-ve</option>
                    <option value="universal">universal</option>
                </select>
                <span id="bloodgrouperror" class="spanHide"></span>
            </div>
        );
    }
}

export default Personalinformation;