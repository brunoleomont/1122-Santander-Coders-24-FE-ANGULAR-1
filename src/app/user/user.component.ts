import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  user!: User;
  user1 = new User('user1', 'email', 'BR');
  user2 = new User('user2', 'email@us', 'US');
  user3 = new User('user3', 'email@es', 'ES');
  user4 = new User('user4', 'email@br', 'BR');
  listUsers = [this.user1, this.user2, this.user3, this.user4];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // this.user = new User(
    //   this.route.snapshot.params['name'],
    //   this.route.snapshot.params['email'],
    //   this.route.snapshot.params['country']
    // );
    this.user = this.listUsers.find(
      (u) => u.username === this.route.snapshot.params['name']
    )!;
  }
}
