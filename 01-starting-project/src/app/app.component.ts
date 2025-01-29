import { Component } from '@angular/core';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  selectedId: string = '';
  users = DUMMY_USERS;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedId)?.name || '';
  }

  onSelectedUser(id: string) {
    this.selectedId = id;
  }
}
