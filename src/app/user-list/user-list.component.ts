import { Component, OnInit } from '@angular/core';

interface User {
	name: string,
	email: string,
	id: number
};

class User {
	constructor(name: string, email: string) {
		this.id = Math.floor((Math.random() * 10) + Math.random());
		this.name = name;
		this.email = email;
	}
}

const USERS: User[] = [
	new User('Yuvaraj', 'shivarajnaidu@gmail.com'),
	new User('Madhu', 'madhu@gmail.com'),
	new User('Prakash', 'mailmeprakash@gmail.com'),
	new User('Udhaya', 'udhaya@gmail.com'),
	new User('Balu', 'balunaidu95@gmail.com'),
	new User('Babu', 'babu@gmail.com')
];

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];
  constructor() {
  }

  ngOnInit() {
  	this.users = USERS;
  }

}
