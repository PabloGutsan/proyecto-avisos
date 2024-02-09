import { Component, OnInit } from '@angular/core';
import { ResultService } from './result.service';
import { Post } from './result';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  posts: Post[] = [];
  

  constructor(public resultService: ResultService) { }

  ngOnInit(): void {

    this.resultService.getPosts().subscribe(
      posts => this.posts = posts
    );

  }

}
