import { Injectable } from '@angular/core';
import { User } from './user';

const USERS: User[] = [
	new User('Yuvaraj', 'shivarajnaidu@gmail.com'),
	new User('Madhu', 'madhu@gmail.com'),
	new User('Prakash', 'mailmeprakash@gmail.com'),
	new User('Udhaya', 'udhaya@gmail.com'),
	new User('Balu V', 'balunaidu95@gmail.com'),
	new User('Babu V', 'babu@gmail.com')
];

@Injectable()
export class UserService {

  constructor() { }

  getUsers(): Promise<User[]> {
  	return new Promise((resolve, reject) => {
       setTimeout(() => resolve(USERS), 500)
    })
  }

  getUserById(id: string): Promise<User> {
  	const user = USERS.find(user => user.id === id);
  	return Promise.resolve(user);
  }

  addUser(user: User): void {
  	const {name, email} = user;
  	USERS.push(new User(name, email));
  }

}
