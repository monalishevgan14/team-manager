import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  profileForm = new FormGroup({
      username:new FormControl('',Validators.required),
      password: new FormControl('',[Validators.required,Validators.minLength(6)])    
  })

  get username() { return this.profileForm.get('username'); }
  get password() { return this.profileForm.get('password'); }

   constructor( private router: Router) { }

  // onSignup(){
  //   this.profileForm.markAllAsTouched(); 
  //   if (this.profileForm.valid) {
  //     const { username, password } = this.profileForm.value;
  //     if (username === 'monali14' && password === '123@ogd') {

  //       const user = { username, password };
  //       localStorage.setItem('user', JSON.stringify(user));
  //       alert('Login successful!');
  //       this.router.navigate(['/home']);
  //     } else {
  //       alert('Invalid username or password');
  //     }
  //   }
  
  // }

  onSignup() {
    this.profileForm.markAllAsTouched();

    if (this.profileForm.valid) {
      const { username, password } = this.profileForm.value;
      if (username === 'monali14' && password === '123@ogd') {
        const user = { username, password };
        console.log('user', user);
        
        localStorage.setItem('user', JSON.stringify(user)); // store as string
        alert('Login successful!');
        this.router.navigate(['/home']);
      } else {
        alert('Invalid username or password');
      }
    }
  }

}
