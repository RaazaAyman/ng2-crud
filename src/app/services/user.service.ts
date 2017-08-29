import { Injectable } from '@angular/core';
import { User } from './user';

const USERS: User[] = [
	new User('Yuvaraj', 'shivarajnaidu@gmail.com'),
	new User('Madhu', 'madhu@gmail.com'),
	new User('Prakash', 'mailmeprakash@gmail.com'),
	new User('Udhaya', 'udhaya@gmail.com'),
	new User('Balu', 'balunaidu95@gmail.com'),
	new User('Babu', 'babu@gmail.com')
];

@Injectable()
export class UserService {

  constructor() { }

  getUsers(): Promise<User[]> {
  	return Promise.resolve(USERS);
  }

  getUserById(id: number): Promise<User> {
  	const user = USERS.find(user => user.id === id);
  	return Promise.resolve(user);
  }

  addUser(user: User): void {
  	const {name, email} = user;
  	USERS.push(new User(name, email));
  }

}