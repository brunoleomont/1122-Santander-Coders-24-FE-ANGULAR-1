import { Injectable, inject } from '@angular/core';
import { User } from './models/user';
import { LocalService } from './local.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  localStorageService: LocalService = inject(LocalService);

  constructor() { }

  setUser(user: User) {
    // localStorage.setItem('user', JSON.stringify(user));
    let listUsers = new Array();
    if (this.getAllUsers() !== null) {
      listUsers = this.getAllUsers();
    }
    listUsers.push(user);
    this.localStorageService.setItem('users', JSON.stringify(listUsers));
  }

  getAllUsers(): User[] {
    return JSON.parse(this.localStorageService.getItem('users')!)
  }

  // TO-DO
  getUserByName(name: string): User {
    return JSON.parse(this.localStorageService.getItem('users')!)
  }

  // TO-DO
  removeUser() {
    this.localStorageService.removeItem('users');
  }
}
