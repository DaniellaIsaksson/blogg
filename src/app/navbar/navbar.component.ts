import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private router: Router) {}

  // Boolean för att byta vy
  changePerspectiv: boolean = false;

  // Metod för att byta vy och navigera till home page.
  onChange() {
    this.changePerspectiv = !this.changePerspectiv;
    // Navigera till home page efter att perspektivet har ändrats till guest
    this.router.navigate(['/']);
  }
}
