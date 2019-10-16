import { Component, OnInit } from '@angular/core';
import { AppMapService } from './app-map.service';
import { MessageService } from '../message/message.service';
import * as MapboxDraw from '@mapbox/mapbox-gl-draw';
import { Map, LngLat } from 'mapbox-gl';
import { Polygon, FeatureCollection } from 'geojson';

@Component({
  selector: 'app-app-map',
  templateUrl: './app-map.component.html',
  styleUrls: ['./app-map.component.css']
})

export class AppMapComponent implements OnInit {
  featureCollection: FeatureCollection = {
    type: 'FeatureCollection',
    features: []
  };
  selectedCluster: any;

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
    map.on('draw.delete', this.deleteArea.bind(this));

  }

  deleteArea(e: any): void {
    this.featureCollection = {
      type: 'FeatureCollection',
      features: []
    };
    this.selectedCluster = null;
  }

  updateArea(e: any): void {
    let polygon: Polygon = e.features[0].geometry;
    this.appMapService.postData(polygon).subscribe(res => {
      this.featureCollection = res.featureCollection;
      this.messageService.success(`Found ${this.featureCollection.features.length} events`);
    });
  }

  ngOnInit() {
  }
}
