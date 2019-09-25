import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-aws',
  templateUrl: './aws.component.html',
  styleUrls: ['./aws.component.css']
})
export class AwsComponent implements OnInit {

  awsForm:FormGroup;
  constructor() { }

  ngOnInit() {
    this.awsForm=new FormGroup({
      'ami':new FormControl(null,Validators.required),
      'instanceType':new FormControl(null,Validators.required),
      'numberOfInctances':new FormControl(null,Validators.required),
      'storage':new FormControl(null,Validators.required),
      'securityGroup':new FormControl(null,Validators.required)
    })
  }
  onSubmit(){
    console.log(this.awsForm);
    
  }

}
