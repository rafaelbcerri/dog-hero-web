import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required ],
      password: ['', Validators.required],
      role: ['pet-owner', Validators.required],
    })

  }

  handleSubmit() {
    const name = this.signupForm.get('name').value;
    const email = this.signupForm.get('email').value;
    const password = this.signupForm.get('password').value;
    const role = this.signupForm.get('role').value;

    this.authService
      .register(name, email, password, role)
      .subscribe(
        () => {
          this.authService
            .authenticate(email, password)
            .subscribe(
              () => {
                const route = role === 'pet-owner' ? role : 'search';
                this.router.navigate([route]);
              },
              (error) => {
                console.log(error);
              }
            )


        },
        (error) => {
          console.log(error);
          this.signupForm.reset();
        }
      );

  }
}
