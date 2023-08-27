import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUserService } from 'src/app/services/login-user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private router: Router,private loginService:LoginUserService) {}

  logout(){
    this.loginService.logout();
    this.router.navigate(["emh"]);
  }
  
  
}
