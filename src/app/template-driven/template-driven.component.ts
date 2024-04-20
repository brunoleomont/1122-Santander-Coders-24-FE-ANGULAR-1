import { Component } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {

  countries = ['US', 'BR', 'ES']

  user = new User('User 1', 'user@example.com', this.countries[1]);

  onSubmit() {
    alert(JSON.stringify(this.user));
  }
}
