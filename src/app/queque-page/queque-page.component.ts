import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-queque-page',
  templateUrl: './queque-page.component.html',
  styleUrls: ['./queque-page.component.css']
})
export class QuequePageComponent implements OnInit {



  posts: any;
  ROOT_URL: string = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
  }



  // maybe create get method which pull the queue 

  // http request to delete first number and return new queue
  popFirstNumber() {

  }
  // http request to insert new number and return queue
  pushNewNumber() {
    this.posts = this.http.get(this.ROOT_URL)
  }


  // test button
  getData() {

  }

}
