import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(7)]],
      allergies: ['']
    });
  }

  ngOnInit(): void {}

  signup(): void {
    const { email, password, allergies } = this.signUpForm.value;
    const newUser: User = {
      id:'',
      email,
      password,
      allergies,
      token: ''
    };
    this.authService.signup(newUser).subscribe((response: any) => {
      localStorage.setItem('token', response.token);
      this.router.navigate(['accueil']);
    });
  }



}
