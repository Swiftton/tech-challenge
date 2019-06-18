import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService, REQUEST_METHODS } from './api.service';
import { User } from '../models/user';
import { Album } from '../models/album';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  /**
   * Constructor
   *
   * @param [ApiService] apiService
   */
  constructor(private apiService: ApiService) { }

  /**
   * Get users
   *
   * @returns [Observable<User>]
   */
  getUsers(): Observable<User[]> {
    const url = '/users';

    return this.apiService.makeRequest(url, REQUEST_METHODS.HTTP_GET);
  }

  /**
   * Get albums
   *
   * @returns [Observable<Album>]
   */
  getAlbums(userId: number): Observable<Album[]> {
    const url = `/albums?userId=${userId}`;

    return this.apiService.makeRequest(url, REQUEST_METHODS.HTTP_GET);
  }

  /**
   * Get photos
   *
   * @returns [Observable<Photo>]
   */
  getPhotos(albumId: number): Observable<Photo[]> {
    const url = `/photos?albumId=${albumId}`;

    return this.apiService.makeRequest(url, REQUEST_METHODS.HTTP_GET);
  }
}
