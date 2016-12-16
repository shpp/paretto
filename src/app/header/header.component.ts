import { Component, OnInit } from '@angular/core';

import { AuthService } from "../authentication/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  username = '';

  constructor(private authService: AuthService) {}

  isAuth() {
    return this.authService.isAuthenticated();
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnInit() {
    this.username = this.authService.getUserEmail();
    console.log("ngOnInit");
    console.log(this.username);
  }

  getUserName(): string {
    this.username = this.authService.getUserEmail();
    return this.username;
  }

}
