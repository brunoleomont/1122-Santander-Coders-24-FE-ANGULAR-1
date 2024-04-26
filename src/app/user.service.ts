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
    let listUsers = new Array();
    if (this.getAllUsers() !== null) {
      listUsers = this.getAllUsers();
    }
    return listUsers.find(
      (u) => u.username === name
    )!;
  }

  // TO-DO
  removeUser(name: string): void {
    let listUsers = new Array();
    if (this.getAllUsers() !== null) {
      listUsers = this.getAllUsers();
    }
    let newList = listUsers.filter(u => u.username !== name);
    this.localStorageService.setItem('users', JSON.stringify(newList));
  }
}
