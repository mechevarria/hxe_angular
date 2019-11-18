import { Component, OnInit } from '@angular/core';
import { AnalysisService } from './analysis.service';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {
  selected: string = '';
  types: string[] = [];
  limit: number = 30;
  results: any = {};

  constructor(private analysisSerivce: AnalysisService) { }

  update(): void {
    console.log(`limit is ${this.limit} and selected is ${this.selected}`);
    this.analysisSerivce.getAnalysis(this.selected, this.limit).subscribe(res => {
      this.results = res;
    })

  }

  ngOnInit() {
    this.analysisSerivce.getAllTypes().subscribe(res => {
      this.types = res;
    });
  }

}
