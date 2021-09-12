import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    // this.authService.onRedirect()
    // .then((result: AuthenticationResult) => {
    //   console.log(result);
    //   console.log(this.authService.isAuthenticated);
    //   if (!this.authService.isAuthenticated) {
    //     this.authService.signIn();
    //   }
    // }
    // );
  }

}
