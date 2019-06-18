import { Component, Input } from '@angular/core';
import { Photo } from '../../../shared/models/photo';

@Component({
  selector: 'app-user-photos-list',
  templateUrl: './user-photos-list.component.html',
  styleUrls: ['./user-photos-list.component.sass']
})
export class UserPhotosListComponent {

  @Input() photos: Photo[] = [];

  /**
   * Constructor
   */
  constructor() { }

}
