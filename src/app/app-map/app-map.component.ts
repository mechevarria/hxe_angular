import { Component, OnInit } from '@angular/core';
import { AppMapService } from './app-map.service';
import { MessageService } from '../message/message.service';
import * as MapboxDraw from '@mapbox/mapbox-gl-draw';
import { Map } from 'mapbox-gl';
import { Polygon } from 'geojson';

@Component({
  selector: 'app-app-map',
  templateUrl: './app-map.component.html',
  styleUrls: ['./app-map.component.css']
})

export class AppMapComponent implements OnInit {
  events: Event[];
  geojson: any;

  constructor(private appMapService: AppMapService, private messageService: MessageService) {
  }

  loadMap(map: Map) {
    const draw = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        polygon: true,
        trash: true
      }
    });
    map.addControl(draw, 'top-right');
    map.on('draw.update', this.updateArea.bind(this));
    map.on('draw.create', this.updateArea.bind(this));
    map.on('draw.delete', this.updateArea.bind(this));
    
  }

  updateArea(e: any): void {
    console.log(`event type is ${e.type}`);
    if (e.type === 'draw.delete') {
      console.log('deleted');
      this.events = [];
    } else {
      let polygon: Polygon = e.features[0].geometry;
      this.appMapService.postData(polygon).subscribe(res => {
        this.events = res.results;
        this.messageService.success(`Found ${res.results.length} events`);
      });
    }
  }

  ngOnInit() {
  }
}
