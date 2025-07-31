import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  username: string = '';
  // showPrompt=false;
  constructor(private router:Router) {
    const userData = localStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
      this.username = user.username || '';
    } else {
      // this.showPrompt=true;
      setTimeout(() => {
        this.router.navigate(['/signup']); // redirect to signup if no user data found
      }, 5000);   

    }

  }
  onLogout() {
    // remove stored user information
    localStorage.removeItem('user');
    // navigate back to login page
    this.router.navigate(['/signup']);
  }
}
