import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  listUsers: User[] = [];
  userService: UserService = inject(UserService);

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.listUsers = this.userService.getAllUsers();
  }

  removeUser(name: string) {
    this.userService.removeUser(name);
    this.listUsers = this.userService.getAllUsers();
  }
}
