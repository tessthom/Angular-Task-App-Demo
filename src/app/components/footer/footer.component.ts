import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  // I want to get the current year dynamically, so am using a property
  currentYear: number;

  constructor() {
    this.currentYear = new Date().getFullYear();
  }

}
