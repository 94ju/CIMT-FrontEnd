import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { Vmservice } from '../vm.service';

@Component({
  selector: 'app-aws',
  templateUrl: './aws.component.html',
  styleUrls: ['./aws.component.css']
})
export class AwsComponent implements OnInit {

  awsForm:FormGroup;
  constructor(private vmService:Vmservice) { }

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
    console.log(this.awsForm.value.ami,this.awsForm.value.instanceType,this.awsForm.value.numberOfInctances,this.awsForm.value.storage,this.awsForm.value.securityGroup);
    this.vmService.vmCreate(this.awsForm.value.ami,this.awsForm.value.instanceType,this.awsForm.value.numberOfInctances,this.awsForm.value.storage,this.awsForm.value.securityGroup)
  }

}
