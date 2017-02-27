import { Component,OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';

import {PostService} from './services/posts.services';
import {post} from './constants';
@Component({
  selector: 'filtered-jan1',
  template:`
  <h1>Filtered Jan1 details with id:{{id}}</h1>
  <div>
  <ul>
    <li *ngFor='let details of filteredJan1'>
      <h2>{{details.title}}</h2>
      <p>{{details.body}}</p>
    </li>
  </ul>
  </div>
  `

})
export class FilteredJan1Component implements OnInit {
  id:number;
  filteredJan1:post[]=[];
constructor(private postService:PostService){

}

ngOnInit(){
  this.postService.posts.subscribe(res=>console.log(res));
  this.id=this.postService.getFilterId();
this.filteredJan1=this.postService.getPosts();
}

}
