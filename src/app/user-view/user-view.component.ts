import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location }                 from '@angular/common';
import { UserService }     from '../services/user.service';
import { User }     from '../services/user';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  user: User;
  userKeys: string[];
  constructor(
  private userService: UserService,
  private route: ActivatedRoute,
  private location: Location,
  private router: Router
  	) {}

  ngOnInit() {
  	 this.route.paramMap
    .switchMap((params: ParamMap) => this.userService.getUserById(params.get('id')))
    .subscribe(user => {
    	this.user = user;
    	this.userKeys = Object.keys(user);
    });
  }

  deleteUser(event, user): void {
    this.userService.deleteUser(user)
    .then((data: any) => {
      const { isSuccess } = data;
      if (isSuccess) {
        this.router.navigate(['users'])
      }
    })
  }

  goToUpdateUserView(event, user): void {

  }

}
