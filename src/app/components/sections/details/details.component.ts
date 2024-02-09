import { Component, OnInit } from '@angular/core';
import { Post } from '../result/result';
import { Router, ActivatedRoute } from '@angular/router';
import { ResultService } from '../result/result.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public post: Post = new Post() 

  constructor(
    public postService: ResultService,
    private router: Router,
    public activateRoute: ActivatedRoute
    ) {

     }

  ngOnInit(): void {

    this.addPost()
   
  }

  addPost(): void{

    this.activateRoute.params.subscribe(params => {
      let id = params['id']
      if (id){
        this.postService.getPost(id).subscribe((post) => this.post = this.post)
      }
    })

  }

  

}
