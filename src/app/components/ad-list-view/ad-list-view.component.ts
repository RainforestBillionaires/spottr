import { Component, OnInit } from '@angular/core';
import { AdListItemComponent } from '../ad-list-item/ad-list-item.component';

@Component({
  selector: 'app-ad-list-view',
  templateUrl: './ad-list-view.component.html',
  styleUrls: ['./ad-list-view.component.css']
})
export class AdListViewComponent implements OnInit {

  currentAds: AdListItemComponent[]

  constructor() { }

  ngOnInit() {
  }

}
