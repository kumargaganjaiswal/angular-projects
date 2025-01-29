import { Component, computed, input, Input, output, signal } from '@angular/core';

//import { DUMMY_USERS } from '../dummy-users';

//const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

type user = {
  id: string;
  avatar: string;
  name: string;
}
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({ required: true }) user!: user;

  // id = input.required<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();

  selectedUser = output<string>();

  /* normal Input
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  */
  // selectedUser = DUMMY_USERS[randomIndex];

  // selectedUser = signal(DUMMY_USERS[randomIndex]);

  imagePath = computed(() => {
    return "assets/users/" + this.user.avatar;
  });

  // get imagePath() {
  //   return "assets/users/" + this.avatar;
  // }
  onSelectedUser() {
    this.selectedUser.emit(this.user.id);
  }

}
