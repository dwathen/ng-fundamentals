import { Component } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Component({
  templateUrl: './login.component.html'
})

export class LoginComponent {
  userName: string | undefined;
  password: string | undefined;

  constructor(private authService: AuthService, private router: Router) { }

  login(formValues: any) {
    this.authService.loginUser(formValues.userName, formValues.password);
    this.router.navigate(['events']);
  }

  cancel() {
    this.router.navigate(['events']);
  }
}
