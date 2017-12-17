import { Component, OnInit } from '@angular/core';
import  { Router } from '@angular/router';
import { User } from '../services/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})



export class UserListComponent implements OnInit {
  users: User[];
  canNavigate: boolean;
  constructor(private userService: UserService) {
    this.users = [];
    this.canNavigate = true;
  }

  getUsers(): void {
  	this.userService.getUsers()
  	.then(users => {
  		this.users = users;
  	})
  }

  deleteUser(event, user): void {
    event.preventDefault();
    event.stopPropagation();
    this.userService.deleteUser(user)
    .then((data: any) => {
      const { isSuccess } = data;
      if (isSuccess) {
        const index = this.users.indexOf(user);
        this.users.splice(index, 1);
      }
    })
  }

  ngOnInit(): void {
  	this.getUsers();
  }

}
