import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import {post} from '../constants';


@Injectable()
export class PostService implements OnInit {
  id: number;
  posts: Observable<post[]>
  filteredData: post[];
  private _posts: BehaviorSubject<post[]>;
  private baseUrl: string;
  private dataStore: {
    posts: post[]
  };


  constructor(private http: Http) {
    this.baseUrl = 'https://jsonplaceholder.typicode.com/posts';
    this.dataStore = { posts: [] };
    this._posts = <BehaviorSubject<post[]>>new BehaviorSubject([]);
    this.posts = this._posts.asObservable();
    this.loadAll();
  }

  ngOnInit() {

  }

  loadAll() {
    this.http.get(`${this.baseUrl}`).map(response => response.json()).subscribe(data => {
      //console.log(this.test);
      this.dataStore.posts = data;
      this._posts.next(Object.assign({}, this.dataStore).posts);
    }, error => console.log('Could not load todos.'));
  }

  setFilterId(userId: number) {
    this.id = userId;
    return this.getFilterId();
  }

  getFilterId() {
    return this.id;
  }

  getPosts(): post[] {
    this.posts.subscribe(res => {
      this.filteredData = [];
      for (var data of res) {
        if (data.userId == this.getFilterId()) {
          this.filteredData.push(data);
        }
      }
      //console.log(this.filteredData);
    })
    return this.filteredData;
  }

}
