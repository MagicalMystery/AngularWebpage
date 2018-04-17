import { Component, OnInit } from '@angular/core';
import { Pic } from '../shared/pic';
import { PicturesService } from '../services/pictures.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  pics: Pic[];
  selectedPic : Pic;

  constructor(private picService: PicturesService) { }

  ngOnInit() {
    this.pics = this.picService.getPictures();
  }

  onselect(pic:Pic){

    this.selectedPic=pic;
  }

}
