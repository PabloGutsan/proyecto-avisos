import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent implements OnInit {

  recoverForm = this.formBuilder.group({
    email: ['', Validators.required]
  })

  constructor(private formBuilder:FormBuilder, private router:Router) { }

  ngOnInit(): void {
  }

  get email(){
    return this.recoverForm.controls.email;
  }

  recover(){
    if(this.recoverForm.valid){
      this.router.navigateByUrl('/auth');
      this.recoverForm.reset();
    }
    else{
      this.recoverForm.markAllAsTouched();
      alert("Error al recuperar la contraseña.");
  }
  }
}
