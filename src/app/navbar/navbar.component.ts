import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  changePerspectiv: boolean = false;

  onChange() {
    this.changePerspectiv = !this.changePerspectiv;
  }
}
