import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from "./user.model";
import { UserService } from "./user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  
  users: [User]
  
  constructor(private router: Router, private userService: UserService) { }
  
  public ngOnInit() {
    this.users = this.userService.getUsers();
  }
  
}
