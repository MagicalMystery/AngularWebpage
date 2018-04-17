import { Component, OnInit } from '@angular/core';

import { Pic } from '../shared/pic';
import { PicturesService } from '../services/pictures.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pic: Pic;
  promotion: Promotion;

  constructor(private picservice: PicturesService, private promotionservice: PromotionService) { }

  ngOnInit() {
    this.pic = this.picservice.getFeaturedPic();
    this.promotion = this.promotionservice.getFeaturedPromotion();
  }

}
