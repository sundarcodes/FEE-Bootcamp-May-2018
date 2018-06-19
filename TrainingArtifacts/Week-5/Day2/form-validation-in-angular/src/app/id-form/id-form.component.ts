import { Http } from '@angular/http';
import { AbstractControl } from '@angular/forms';
import { ValidationErrors } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-id-form',
  templateUrl: './id-form.component.html',
  styleUrls: ['./id-form.component.css']
})
export class IdFormComponent implements OnInit {

  idFormGroup: FormGroup;
  constructor(private httpService: Http) {
    this.idFormGroup = new FormGroup({
      firstName: new FormControl('', Validators.required),
      fullName: new FormControl(''),
      designation: new FormControl('General Manger', Validators.required),
      employeeCode: new FormControl('', [Validators.required, Validators.pattern(/^8[0-9]*/)]),
      contactFormGroup: new FormGroup({
        contactNumber: new FormControl(''),
        alternateContactNumber: new FormControl('')
      }, this.checkifAtleastOneContactNumberIsPresent)
    })
  }

  ngOnInit() {
  }

  checkifAtleastOneContactNumberIsPresent(control: AbstractControl): ValidationErrors | null {
    console.log(control);
    const contactNum = control.get('contactNumber').value;
    const alternateContactNum = control.get('alternateContactNumber').value;
    if (contactNum === '' && alternateContactNum === '') {
      return {
        contactNumberMissing: true
      }
    }
    return null;
  }

  onSubmit() {
    console.log(this.idFormGroup.value);

    const postData = {

    }
    const url = 'https://id-application-form.firebaseio.com/applicationIds.json';
    this.httpService.post(url, this.idFormGroup.value)
      .subscribe(rsp => console.log(rsp));
    console.log('Posted');
  }

}
