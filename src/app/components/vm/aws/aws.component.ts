import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'

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
      'ami':new FormControl(null),
      'instanceType':new FormControl(null),
      'numberOfInctances':new FormControl(null),
      'storage':new FormControl(null),
      'securityGroup':new FormControl(null)
    })
  }
  onSubmit(){
    console.log(this.awsForm);
    
  }

}
