import { Component, OnInit } from '@angular/core';
import { AppMapService } from './app-map.service';
import { MessageService } from '../message/message.service';
import * as MapboxDraw from '@mapbox/mapbox-gl-draw';
import { Map } from 'mapbox-gl';

@Component({
  selector: 'app-app-map',
  templateUrl: './app-map.component.html',
  styleUrls: ['./app-map.component.css']
})
export class AppMapComponent implements OnInit {
  geojson: any;
  draw: any;

  constructor(private appMapService: AppMapService, private messageService: MessageService) {
  }

  loadMap(map: Map) {
    this.draw = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        polygon: true,
        trash: true
      }
    });
    map.addControl(this.draw, 'top-right');
    map.on('draw.update', this.updateArea);
    map.on('draw.create', this.updateArea);
    map.on('draw.delete', this.updateArea);
  }

  updateArea(e: any) {
    console.log(e);
  }

  ngOnInit() {
    this.appMapService.getData().subscribe(res => {
      this.geojson = res;
      this.messageService.success('Successfully loaded map data');
    });
  }
}
