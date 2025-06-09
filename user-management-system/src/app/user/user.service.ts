import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users = new BehaviorSubject<User[]>([]);

  getUsers(): Observable<User[]> {
    return this.users.asObservable();
  }

  addUser(user: User): void {
    const currentUsers = this.users.value;
    this.users.next([...currentUsers, user]);
  }
}
