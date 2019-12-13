import { Component, OnInit, ViewChild } from '@angular/core';
import { AnalysisService } from './analysis.service';
import { CloudData, CloudOptions, TagCloudComponent } from 'angular-tag-cloud-module';
import { MessageService } from '../message/message.service';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {
  @ViewChild(TagCloudComponent, { static: false }) tagCloudComponent: TagCloudComponent;

  selected: string = '';
  types: string[] = [];
  limit: number = 30;
  data: CloudData[] = [];

  constructor(private analysisSerivce: AnalysisService, private messageService: MessageService) { }

  update(): void {
    this.analysisSerivce.getAnalysis(this.selected, this.limit).subscribe(res => {
      if (res !== null) {
        this.data = res;
        this.tagCloudComponent.reDraw();
        this.messageService.success(`Successfully updated word cloud for '${this.selected}'`);
      }
    })

  }

  ngOnInit() {
    this.analysisSerivce.getAllTypes().subscribe(res => {
      this.types = res;
    });
  }

}
