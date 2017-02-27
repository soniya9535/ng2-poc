import { Component,OnInit } from '@angular/core';
import {PostService} from './services/posts.services';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {post} from './constants';

@Component({
  selector: 'jan1',
  template:`
  <button type="button" (click)="showFilterOptions()">Filter</button>
  <div *ngIf="showFilterOption">
  <label>Enter User id:</label>
  <input type="text" #userId/>
   <a [routerLink]="[userId.value]"><input type="button" (click)="displayFilteredData(userId.value)" value="Display Filtered Posts"/></a>
  </div>

  <div>
  <ul>
    <li *ngFor='let details of jan1'>
      <h2>{{details.title}}</h2>
      <p>{{details.body}}</p>
    </li>
  </ul>
  </div>
  `

})
export class Jan1Component implements OnInit {
posts: Observable<post[]>;
  private sub:any;
  jan1:post[]=[];
  items:post[];
  showFilterOption:boolean

constructor(private post:PostService,private router: Router,private route: ActivatedRoute){
this.showFilterOption=false;
}

ngOnInit(){
this.posts = this.post.posts;
console.log(this.posts);
this.posts.subscribe(res=>{
  this.items=res;
  for(var data of res){
    if(data.userId>=1 && data.userId<=5) {
      this.jan1.push(data);
    }
  }
});
}

showFilterOptions(){
  this.showFilterOption?this.showFilterOption=false:this.showFilterOption=true;
}

displayFilteredData(userId:number){
//this.router.navigate([userId]);
this.post.setFilterId(userId);
//this.jan1=this.post.getPosts();
}


}
