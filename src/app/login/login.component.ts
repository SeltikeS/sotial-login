import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user!: SocialUser;

  constructor(private authService: SocialAuthService) { }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
    });
  }

  signWithGoogle(): any {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    console.log(this.user);
  }

  loginWithFacebook(): any {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): any {
    this.authService.signOut();
  }

}
