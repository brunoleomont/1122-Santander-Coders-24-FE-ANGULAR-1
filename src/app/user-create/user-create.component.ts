import { Component, inject } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {
  user: User = new User('', '', '', 0, 0);
  userService: UserService = inject(UserService);

  countries = ['US', 'BR', 'ES']

  onSubmit() {
    this.userService.setUser(this.user);
    alert('User criado com sucesso!\n' + JSON.stringify(this.user));
    this.user.username = '';
    this.user.email = '';
    this.user.country = '';
    this.user.salary = 0;
    this.user.weight = 0;
  }
}
