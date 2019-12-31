import { Login } from './../../models/login.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

 loginForm: FormGroup
 loginModel: Login
 loginFields: Array<FormlyFieldConfig>

 constructor(){
   this.loginForm = new FormGroup({})
   this.loginModel = new Login()
   this.loginFields = this.loginModel.formField()
 }

  onSubmit(){
    console.log(this.loginForm.value)
  }


}
