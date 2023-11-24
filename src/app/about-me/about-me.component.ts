import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent {
  // Deklarerar egenskaper och en boolean för att visa att formuläret har skickats
  name: string = '';
  email: string = '';
  message: string = '';
  sendBool: boolean = false;

  // Metod för att hantera skickandet av formuläret (loggar namn, email, meddelande)
  onSend(name: string, email: string, message: string): void {
    console.log('Name:' + name);
    console.log('Email:' + email);
    console.log('Message:' + message);
    this.sendBool = !this.sendBool;
  }
}
