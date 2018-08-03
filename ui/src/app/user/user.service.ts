import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from './user.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

    users: [User]

  constructor(private http:HttpClient) {}

  //private userUrl = 'http://localhost:8080/user-portal/user';
	private userUrl = '/api';

  public getUsers() {
    var user = new User()
    user.email = "prakash@gmail.com";
    user.firstName = "Prakash Chandra";
    user.id = "1001";
    user.lastName = "Pandey";
    this.users.push(user);

    user = new User()
    user.email = "akash@gmail.com";
    user.firstName = "Akash";
    user.id = "1002";
    user.lastName = "Pandey";
    this.users.push(user);

    return this.users;
  }

  public deleteUser(user) {
    return this.http.delete(this.userUrl + "/"+ user.id);
  }

  public createUser(user) {
    return this.http.post<User>(this.userUrl, user);
  }

}