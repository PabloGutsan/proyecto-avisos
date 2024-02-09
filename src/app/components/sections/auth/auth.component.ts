import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  loginform = this.formBuilder.group({
    username:['',[Validators.required, Validators.email]],
    password: ['', Validators.required]
  })

  constructor(private formBuilder:FormBuilder, private router:Router) { }

  ngOnInit(): void {
  }

  get username(){
    return this.loginform.controls.username;
  }

  get password(){
    return this.loginform.controls.password;
  }

  login(){
    if(this.loginform.valid){
      this.router.navigateByUrl('/home');
      this.loginform.reset();
    }
    else{
      this.loginform.markAllAsTouched();
      alert("Error al ingresar los datos");
  }
  }

}
