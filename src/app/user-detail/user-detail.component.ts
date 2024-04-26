import { Component, inject } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
  user = new User('', '', '', 0, 0);
  userService: UserService = inject(UserService);

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // this.user = new User(
    //   this.route.snapshot.params['name'],
    //   this.route.snapshot.params['email'],
    //   this.route.snapshot.params['country']
    // );
    // this.user = this.listUsers.find(
    //   (u) => u.username === this.route.snapshot.params['name']
    // )!;
    this.user = this.userService.getUserByName(this.route.snapshot.params['name'])
  }

}
