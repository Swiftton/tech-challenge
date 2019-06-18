import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserDataComponent } from './components/user-data/user-data.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserAlbumsListComponent } from './components/user-albums-list/user-albums-list.component';
import { UserPhotosListComponent } from './components/user-photos-list/user-photos-list.component';

@NgModule({
  declarations: [
    UserDataComponent,
    UsersListComponent,
    UserAlbumsListComponent,
    UserPhotosListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    UserDataComponent
  ]
})
export class ProfileModule { }
