import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class ServiceService {
  user: Object;
  post: Object;
  loading: boolean;
  constructor(public http:Http) { }
  
  makeRequest():void{
    this.loading = true;
    this.http.request('http://jsonplaceholder.typicode.com/users/1')
    .subscribe((res:Response)=>{this.user=res.json(); this.loading=false;});

    this.http.request('http://jsonplaceholder.typicode.com/posts?userId=1')
    .subscribe((res:Response)=>{this.post=res.json(); this.loading=false;});
    
  }
   
  getUser(){
    return this.user;
  }
  getPost(){
    return this.post;
  }

}
