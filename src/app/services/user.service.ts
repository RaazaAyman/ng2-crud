import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const apiURL: string = 'http://localhost:3000/api/users';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

// Get User List
  getUsers(): Promise<User[]> {
    return this.http
    .get(apiURL)
    .toPromise()
    .then((data: any) => {
      const {users, isSuccess, message} = data;
      if (!isSuccess) {
        throw new Error(message || 'Something Went Wrong')
      }
      return users;
    })
    .catch(this.handleError);
  }

// Get User By His ID
  getUserById(id: string): Promise<User> {
    return this.http
    .get(`${apiURL}/${id}`)
    .toPromise()
    .then((data: any) => {
      const {user, isSuccess, message} = data;
      if (!isSuccess) {
        throw new Error(message || 'Something Went Wrong')
      }
      return user;
    })
    .catch(this.handleError);
  }


// Create New User 
  addUser(user: User): Promise<User> {
  	const {name, email} = user;
    return this.http
    .post(apiURL, {name, email})
    .toPromise()
    .then((data: any) => (data || {}).user)
    .catch(this.handleError);
  }

// Delete User
  deleteUser(user: User): Promise<Object> {
    const { id } = user;
    return this.http
    .delete(`${apiURL}/${id}`)
    .toPromise()
    .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
