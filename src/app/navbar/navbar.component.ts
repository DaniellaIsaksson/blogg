import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  changePerspectiv: boolean = true;

  onChange() {
    this.changePerspectiv = !this.changePerspectiv;
  }
}
