import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { UpdateService } from '../update.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(public activatedRoute:ActivatedRoute, public updateService: UpdateService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) =>{
      this.getUrl(paramMap);
    });
  }

  getUrl(paramMap: ParamMap): void {
    const incomingUrl = paramMap.get("url");

    if (incomingUrl == null) {
      this.updateService.url = "http://www.google.com/";
    } else {
      this.updateService.url = decodeURIComponent(incomingUrl);
    }
  }
}
