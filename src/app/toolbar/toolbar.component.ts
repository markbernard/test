import { Component, OnInit } from '@angular/core';

import { UpdateService } from '../update.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  sourceUrl:string = "";

  constructor(private updateService: UpdateService) { }

  ngOnInit(): void {
    this.sourceUrl = this.updateService.url;
  }

}
