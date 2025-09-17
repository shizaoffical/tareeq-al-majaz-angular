import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  onLogin() {
    if (this.email === 'admin@example.com' && this.password === '1234') {
      alert('Login successful ✅');
      localStorage.setItem('user', this.email); // temporary storage
    } else {
      alert('Invalid credentials ❌');
    }
  }
}
