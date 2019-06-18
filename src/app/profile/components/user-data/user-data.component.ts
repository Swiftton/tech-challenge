import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../shared/services/data.service';
import { User } from '../../../shared/models/user';
import { Album } from '../../../shared/models/album';
import { Photo } from '../../../shared/models/photo';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.sass']
})
export class UserDataComponent implements OnInit {

  users: User[] = [];
  albums: Album[] = [];
  photos: Photo[] = [];

  /**
   * Constructor
   *
   * @param [DataService] dataService
   */
  constructor(private dataService: DataService) { }

  /**
   * On init lifecycle hook
   */
  ngOnInit() {
    this.dataService.getUsers().subscribe(
      (users: User[]) => this.users = users
    );
  }

  /**
   * User change handler
   *
   * @param [number] userId
   */
  userChanged(userId: number) {
    if (userId) {
      this.albums = [];
      this.photos = [];
      this.dataService.getAlbums(userId).subscribe(
        (albums: Album[]) => this.albums = albums
      );
    }
  }

  /**
   * Album change handler
   *
   * @param [number] albumId
   */
  albumChanged(albumId: number) {
    if (albumId) {
      this.photos = [];
      this.dataService.getPhotos(albumId).subscribe(
        (photos: Photo[]) => this.photos = photos
      );
    }
  }

}
