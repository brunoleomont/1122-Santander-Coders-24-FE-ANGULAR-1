import { Component } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
  user!: User;

  ngOnInit() {
    // this.user = new User(
    //   this.route.snapshot.params['name'],
    //   this.route.snapshot.params['email'],
    //   this.route.snapshot.params['country']
    // );
    // this.user = this.listUsers.find(
    //   (u) => u.username === this.route.snapshot.params['name']
    // )!;
  }

}
