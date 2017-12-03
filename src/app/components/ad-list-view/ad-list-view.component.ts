import { Component, OnInit } from '@angular/core';
import { Advertisement } from '../../models/advertisement';
import { AdsService } from '../../services/ads.service';

@Component({
  selector: 'app-ad-list-view',
  templateUrl: './ad-list-view.component.html',
  styleUrls: ['./ad-list-view.component.css']
})
export class AdListViewComponent implements OnInit {

  currentAds: Array<Advertisement>;

  constructor(private adsService:AdsService) { }

  getAllAds() {
    this.adsService.getAllAds()
      .subscribe(currentAds => this.currentAds = currentAds);
  }

  ngOnInit() {
    this.getAllAds();
  }

}
