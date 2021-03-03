import {Component, OnInit} from '@angular/core';
import {User} from './dtos/user';
import {Router} from '@angular/router';
import {AuthService} from './services/auth.service';
import {TokenStorageService} from './services/token-storage.service';
import {renderConstantPool} from '@angular/compiler-cli/ngcc/src/rendering/renderer';
import {Globals} from './global/globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
