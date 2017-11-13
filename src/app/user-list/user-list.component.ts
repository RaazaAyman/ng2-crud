import { Component, OnInit } from '@angular/core';
import  { Router } from '@angular/router';
import { User } from '../services/user';
import { UserService } from '../services/user.service';

import { CancelNavToUser } from './cancel-nav';

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


  toggleNavigation(event): void {
    const { nodeName } = event.target;
    this.canNavigate = (nodeName === 'A') ? true : false; 
  }

  getUsers(): void {
  	this.userService.getUsers()
  	.then(users => {
  		this.users = users;
  	})
  }

  goToUpdateUserView(event, user): void {
    this.toggleNavigation(event);
  }

  deleteUser(event, user): void {
    this.canNavigate = false;
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
    this.canNavigate = true;
  }

}
