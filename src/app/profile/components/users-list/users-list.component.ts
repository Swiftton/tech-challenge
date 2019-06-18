import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../shared/models/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.sass']
})
export class UsersListComponent {

  selectedUserId: number;

  @Input() users: User[] = [];
  @Output() selectedUser = new EventEmitter<number>();

  /**
   * Constructor
   */
  constructor() { }

  /**
   * User changed
   */
  userChanged() {
    this.selectedUser.emit(this.selectedUserId);
  }

}
