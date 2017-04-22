import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styles: [`
    input.ng-invalid {
      border: 1px solid red;
    }
  `]
})
export class TemplateDrivenComponent implements OnInit {
  
  fetchedUser:Object;
  fetchedPost:Object;
  
  user = {
    name:"Mussie Kahsai", email:"mosses@yahoo.com", post:"no post"
  }
  constructor(private service:ServiceService) {}

  ngOnInit() {
  }

  onSubmit(){
    //alert("Gooooooood!");
      this.fetchedUser=this.service.getUser();
      this.fetchedPost=this.service.getPost();

      //console.log(JSON.stringify(this.fetchedUser));

      for (var post in this.fetchedPost){
        console.log("User Name :"+this.fetchedUser['username']+" Email :"+this.fetchedUser['email'] );
        console.log("Post: " + this.fetchedPost[post]['title']);
      }
  
  }

  getData(){
    this.service.makeRequest();
    alert("Data Fetched!");
  }

}
