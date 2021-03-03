import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {LoginUser} from '../../dtos/loginuser';
import {first} from 'rxjs/operators';
import {MustMatch} from '../../validators/match-password.validator';
import {RegisterUser} from '../../dtos/registeruser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService) {
    // redirect to home if already logged in
    /*
    if (this.authService.currentUserValue) {
      this.router.navigate(['/']);
    }
    */
    this.registerForm = this.formBuilder.group({
      username: [null, Validators.required],
      email: [null, Validators.required],
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(6)]],
      confirmPassword: [null, Validators.required]
    }, {validators: MustMatch('password', 'confirmPassword')});

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  ngOnInit(): void {
  }

  // convenience getter for easy access to form fields
  get f(): any {
    return this.registerForm.controls;
  }


  onSubmit(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }


    const user = new RegisterUser(this.f.username.value, [],
      this.f.email.value, this.f.password.value, this.f.firstname.value,
      this.f.lastname.value);

    this.loading = true;
    this.authService.register(user)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.error = error;
          this.loading = false;
        });
  }

}
