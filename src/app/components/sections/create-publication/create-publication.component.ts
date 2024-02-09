import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from '../result/result';
import { ResultService } from '../result/result.service';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-create-publication',
  templateUrl: './create-publication.component.html',
  styleUrls: ['./create-publication.component.css']
})
export class CreatePublicationComponent implements OnInit {

  public post: Post = new Post();
  public titleOne: string = "Crear publicación";

  createPostform = this.formBuilder.group({
    title:['',[Validators.required, Validators.required]],
    briefDescription: ['', Validators.required],
    category: ['', Validators.required],
    country: ['', Validators.required],
    detailedDescription: ['', Validators.required]
  })

  constructor(private spinner: NgxSpinnerService, private resultService: ResultService, private formBuilder:FormBuilder, private router:Router) { }

  ngOnInit(): void {
  }

  get title(){
    return this.createPostform.controls.title;
  }
  get briefDescription(){
    return this.createPostform.controls.briefDescription;
  }
  get category(){
    return this.createPostform.controls.category;
  }
  get country(){
    return this.createPostform.controls.country;
  }
  get detailedDescription(){
    return this.createPostform.controls.detailedDescription;
  }

  createPost(){

    this.spinner.show();
      setTimeout(()=>{
        this.spinner.hide();
      },2000)
    

    if(this.createPostform.valid){    

      Swal.fire({
          position: "center",
          icon: "warning",
          title: "Publicación creada con éxito!",
          showConfirmButton: false,
          timer: 2500,
          iconColor: '#000',
      });

      
      this.resultService.create(this.post).subscribe(
        () => this.router.navigate(['/result']) 
      )
      
    }
    else{
      this.createPostform.markAllAsTouched();

      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Debes completar todos los campos!",
        showConfirmButton: false,
        timer: 2500        
    });

      
  }
  }
}
