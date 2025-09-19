import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  email: string = '';
  password: string = '';

  onSignup() {
    // Temporary storage
    localStorage.setItem('user', this.email);
    alert('Signup successful ');
  }
}
