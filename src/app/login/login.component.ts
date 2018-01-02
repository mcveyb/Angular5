import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { PasswordValidator } from '../password-validator';
import { LoginService } from '../service/login.service';


///src/model
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
   form = new FormGroup({
     username: new FormControl('',Validators.required),
     //password: new FormControl('',Validators.required)
     password: new FormControl('',
          Validators.compose(
            [Validators.required,
              PasswordValidator.cannotContainSpace]
            )
          )
   });
  
   constructor(private _loginService:LoginService) { 

  }

  login(){
    //console.log(this.form.value); //Json Format
    var result=this._loginService.login(this.form.controls['username'].value, 
    this.form.controls['password'].value);

    if(!result){
      this.form.controls['password'].setErrors({
        invalidLogin:true
      });
    }
  }
}

  


