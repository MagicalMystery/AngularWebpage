import { Injectable } from '@angular/core';
import { Pic } from '../shared/pic';
import { PICTURES } from '../shared/pictures';

@Injectable()
export class PicturesService {

  constructor() { }
  getPictures(): Pic[] {
    return PICTURES;
  }
  getPic(id: number): Pic {
    return PICTURES.filter((pic) => (pic.id === id))[0];
  }

  getFeaturedPic(): Pic {
    return PICTURES.filter((pic) => pic.featured)[0];
  }

}
