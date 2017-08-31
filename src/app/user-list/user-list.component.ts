import { Component, OnInit } from '@angular/core';
import { User } from '../services/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})



export class UserListComponent implements OnInit {
  users: User[] = [];
  constructor(private userService: UserService) {
  	
  }

  getUsers(): void {
  	this.userService.getUsers()
  	.then(users => {
  		this.users = users;
  	})
  }

  ngOnInit(): void {
  	this.getUsers();
  }

}
