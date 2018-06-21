import React, { Component } from 'react';
import NameInformation from '../components/name-information';
import EmploymentInformation from '../components/employment-information';
import Personalinformation from '../components/personal-information';
import ContactInformation from '../components/contact-information';

class IdForm extends Component {
    constructor() {
        super();
        this.state = {
            isFormValid: false,
            firstName: '',
            fullName: '',
            employeeId: ''
        };
        this.updateFormStatus = this.updateFormStatus.bind(this);
        this.updateFormState = this.updateFormState.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    updateFormState(key, val) {
        this.setState({
            [key]: val
        });
    }

    updateFormStatus(formStatus) {
        this.setState({
            isFormValid: formStatus
        })
    }

    onSubmit() {
        console.log('Submitted');
        console.log(this.state);

        fetch('https://id-application-form.firebaseio.com/applicationIds.json', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...this.state
            })
        })
            .then(rsp => console.log(rsp));
    }
    render() {
        return (
            <div>
                <h1 id="header">Employee ID Card Form</h1>
                <form novalidate class="container">
                    <NameInformation updateFormStatus={this.updateFormStatus}
                        updateFormState={this.updateFormState} />
                    <br />
                    <br />
                    <EmploymentInformation />
                    <br />
                    <br />
                    <Personalinformation />
                    <br />
                    <br />
                    <br />
                    <ContactInformation />
                    <br />
                    <br />
                    <button type="button" class="btn btn-success" id="submitting" onClick={this.onSubmit}
                        disabled={!this.state.isFormValid}>submit</button>
                </form>

            </div>
        );
    }
}

export default IdForm;