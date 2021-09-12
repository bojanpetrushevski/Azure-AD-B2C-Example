import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { THE_FAMILY_ID } from '@azure/msal-common/dist/utils/Constants';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService,
              private httpService: HttpClient) { }

   ngOnInit() {
    let accessToken;
    this.authService.acquireToken()
    .subscribe(token => {
      console.log(token);
      accessToken = token.accessToken;
      this.httpService.get('http://localhost:5000/api/demo', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .subscribe(result => console.log(result));
    });
  }

}
