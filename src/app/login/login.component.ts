import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private router: Router) {
    this.registerForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],

  });
  }

  ngOnInit(): void {
  }

get f() { return this.registerForm.controls; }

onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
        return;
    }

    localStorage.setItem('email',this.registerForm.value.email);

    this.router.navigate(['/home']);

}

onReset() {
    this.submitted = false;
    this.registerForm.reset();
}

onClear() {

}

}
