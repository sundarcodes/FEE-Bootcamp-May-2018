import React, { Component } from 'react';

class NameInformation extends Component {
    constructor(props) {
        super(props);
        this.onFirstNameChange = this.onFirstNameChange.bind(this);
        this.state = {
            fullNameValue: '',
            isFirstNameEmpty: false,
            isFullNameEmpty: false
        }
    }
    onFirstNameChange(event) {
        const name = event.target.value;
        if (name === '') {
            this.props.updateFormStatus(false);
            this.setState({
                isFirstNameEmpty: true
            })
        } else {
            this.props.updateFormStatus(true);
            this.setState({
                isFirstNameEmpty: false
            })
        }
    }
    onNameChange(nameType, fieldName, event) {
        const name = event.target.value;
        if (name === '') {
            this.props.updateFormStatus(false);
            this.setState({
                [nameType]: true
            })
        } else {
            this.props.updateFormStatus(true);
            this.setState({
                [nameType]: false
            })
        }
        this.props.updateFormState(fieldName, name);
    }
    // onFullNameChange(event) {
    //     const name = event.target.value;
    //     if (name === '') {
    //         this.props.updateFormStatus(false);
    //         this.setState({
    //             isFirstNameEmpty: true
    //         })
    //     } else {
    //         this.props.updateFormStatus(true);
    //         this.setState({
    //             isFirstNameEmpty: false
    //         })
    //     }
    // }
    render() {
        return (
            <div>
                <div id="iddiv">
                    <label for="firstname" id="lfname">First Name</label>
                    <input type="text" class="form-control" name="firstname" id="firstname"
                        onChange={this.onNameChange.bind(this, 'isFirstNameEmpty', 'firstName')} />
                    <i class="glyphicon glyphicon-remove form-control-feedback"
                        id="firstError"></i>
                    <i class="glyphicon glyphicon-ok form-control-feedback" id="firstError"></i>
                </div>
                <br />
                {this.state.isFirstNameEmpty && <span id="firstNameError" class="alert alert-danger">Please enter first name</span>}
                <br />
                <br />
                <div id="iddiv">
                    <label for="fullname">Full Name</label>
                    <input type="text" class="form-control" name="fullname" id="fullname"
                        onChange={this.onNameChange.bind(this, 'isFullNameEmpty', 'fullName')} />
                    <i class="glyphicon glyphicon-remove form-control-feedback fullwrong"></i>
                    <i class="glyphicon glyphicon-ok form-control-feedback fulltick "></i>
                </div>
                {this.state.isFullNameEmpty && <span id="firstNameError" class="alert alert-danger">Please enter full name</span>}
            </div>

        );
    }
}

export default NameInformation;