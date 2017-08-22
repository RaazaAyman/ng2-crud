import { Component, OnInit } from '@angular/core';

interface User {
	name: string,
	email: string
}

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  user: User;
  constructor() { }

  ngOnInit() {
   
  }

  createUser(userName: any): void {
  	this.user = userName.value;
  	console.log(this.user)
  	
  	userName.reset();
  }

}
