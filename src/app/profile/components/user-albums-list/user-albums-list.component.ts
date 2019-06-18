import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from '../../../shared/models/album';

@Component({
  selector: 'app-user-albums-list',
  templateUrl: './user-albums-list.component.html',
  styleUrls: ['./user-albums-list.component.sass']
})
export class UserAlbumsListComponent {

  selectedAlbumId: number;

  @Input() albums: Album[] = [];
  @Output() selectedAlbum = new EventEmitter<number>();

  /**
   * Constuctor
   */
  constructor() { }

  /**
   * Album changed
   */
  albumChanged() {
    this.selectedAlbum.emit(this.selectedAlbumId);
  }

}
