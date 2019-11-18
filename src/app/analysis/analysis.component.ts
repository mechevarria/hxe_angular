import { Component, OnInit, ViewChild } from '@angular/core';
import { AnalysisService } from './analysis.service';
import { CloudData, CloudOptions, TagCloudComponent } from 'angular-tag-cloud-module';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {
  @ViewChild(TagCloudComponent, {static: false}) tagCloudComponent: TagCloudComponent;

  selected: string = '';
  types: string[] = [];
  limit: number = 30;
  options: CloudOptions = {
    height: 600,
    overflow: false
  }
  data: CloudData[] = [];

  constructor(private analysisSerivce: AnalysisService) { }

  update(): void {
    console.log(`limit is ${this.limit} and selected is ${this.selected}`);
    this.analysisSerivce.getAnalysis(this.selected, this.limit).subscribe(res => {
      this.data = res;
      this.tagCloudComponent.reDraw();
    })

  }

  ngOnInit() {
    this.analysisSerivce.getAllTypes().subscribe(res => {
      this.types = res;
    });
  }

}
