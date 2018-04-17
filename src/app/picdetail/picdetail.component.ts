import { Component, OnInit, Input } from '@angular/core';

import { Pic } from '../shared/pic';
import { PICTURES } from '../shared/pictures';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PicturesService } from '../services/pictures.service';

@Component({
  selector: 'app-picdetail',
  templateUrl: './picdetail.component.html',
  styleUrls: ['./picdetail.component.scss']
})
export class PicdetailComponent implements OnInit {

  @Input()

  pic : Pic;

  constructor(private picservice: PicturesService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    this.pic = this.picservice.getPic(id);
  }
  goBack(): void {
    this.location.back();
  }


}
