import { Component, OnInit } from '@angular/core';
import {User} from '../../dtos/user';
import {UserService} from '../../services/user.service';
import {first} from 'rxjs/operators';
import {TokenStorageService} from '../../services/token-storage.service';
import {FormGroup} from '@angular/forms';
import {AppComponent} from '../../app.component';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      console.log(this.authService.getToken());
    }
  }
}
