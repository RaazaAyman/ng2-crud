import { Component, OnInit } from '@angular/core';
import { User } from '../services/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  user: User;
  constructor(private userService: UserService) { }

  ngOnInit() {
   
  }

  createUser(userName: any): void {
  	this.user = userName.value;
    this.userService.addUser(this.user);
  	userName.reset();
  }

}
