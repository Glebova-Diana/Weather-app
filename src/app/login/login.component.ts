import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              public userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      login: new FormControl('', [Validators.required, Validators.minLength(6),
        Validators.maxLength(100)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6),
        Validators.maxLength(100)])
    });
  }

  getErrorMessage(field) {
    if (field.hasError('required')) {
      return 'You must enter a value';
    } else if (field.hasError('minlength')) {
      return 'Field must be at least 6 characters';
    } else if (field.hasError('maxlength')) {
      return 'Field must be 100 characters maximum';
    } else {
      return '';
    }
  }

  onSubmit() {
    if (this.loginForm.controls.login.value === this.userService.userLogin.login &&
      this.loginForm.controls.password.value === this.userService.userLogin.password) {
      this.router.navigateByUrl('/main-page');
    }
  }
}
