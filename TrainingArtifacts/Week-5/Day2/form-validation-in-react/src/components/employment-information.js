import React, { Component } from 'react';

class EmploymentInformation extends Component {
    render() {
        return (
            <div>
                <div>
                    <label for="desination">Designation</label>
                    <select name="designation" class="form-control" id="designation">
                        <option value=""></option>
                        <option value="Associate Engineer">Associate Engineer</option>
                        <option value="General Manger">General Manger</option>
                        <option value="HR manager">HR manager</option>
                        <option value="Team Leader">Team Leader</option>
                    </select>
                </div>
                <span id="designationerror" class="spanHide"></span>
                <br />
                <br />
                <br />
                <div id="iddiv">
                    <label for="empcode">Employee Code</label>
                    <input type="text" class="form-control" id="empcode" />
                    <i class="glyphicon glyphicon-remove form-control-feedback empwrong"></i>
                    <i class="glyphicon glyphicon-ok form-control-feedback emptick "></i>
                </div>
                <span id="empcodeerror" class="alert alert-danger">
                    Employee code must start with 8 or 6 and must be 7 digits long
                    </span>
                <label for="joiningdate">Joining Date</label>
                <input type="date" class="form-control" id="joiningdate" />
                <span id="dateError" class="spanHide"></span>
                <br />
                <br />
                <div id="iddiv">
                    <label for="email">email(virtusa)</label>
                    <input type="email" class="form-control" id="email" />
                    <i class="glyphicon glyphicon-remove form-control-feedback emailwrong"></i>
                    <i class="glyphicon glyphicon-ok form-control-feedback emailtick "></i>
                </div>
                <div id="emailerror" class="spanHide"></div>
            </div>
        );
    }
}

export default EmploymentInformation;