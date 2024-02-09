import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../users/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  public user: User = new User();
  public title: string = "Crear cuenta";

  registerForm = this.formBuilder.group({
    names:['',[Validators.required, Validators.required]],
    paternalSurname: ['', Validators.required],
    maternalSurname: ['', Validators.required],
    birthDate: ['', Validators.required],
    phone: ['', Validators.required],
    region: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    termsAndConditions: ['', Validators.required]
  })

  constructor(private formBuilder:FormBuilder, private router:Router) { }

  ngOnInit(): void {
  }

  public create(): void{
    
  }

  get names(){
    return this.registerForm.controls.names;
  }
  get paternalSurname(){
    return this.registerForm.controls.paternalSurname;
  }
  get maternalSurname(){
    return this.registerForm.controls.maternalSurname;
  }
  get birthDate(){
    return this.registerForm.controls.birthDate;
  }
  get phone(){
    return this.registerForm.controls.phone;
  }
  get region(){
    return this.registerForm.controls.region;
  }
  get email(){
    return this.registerForm.controls.email;
  }
  get password(){
    return this.registerForm.controls.password;
  }

  get termsAndConditions(){
    return this.registerForm.controls.termsAndConditions;
  }

  register(){
    if(this.registerForm.valid){
      this.router.navigateByUrl('/login');
      this.registerForm.reset();
    }
    else{
      this.registerForm.markAllAsTouched();
      alert("Error al crear al usuario");
  }
  }

}
