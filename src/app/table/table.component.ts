import { Component, OnInit } from '@angular/core';
import { EventService } from './event.service';
import { Event } from './event';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {

  events: Event[] = [];
  count: number = 0;
  limit: number = 10;
  page: number = 1;

  constructor(private eventService: EventService) {
  }

  load(): void {
    this.eventService.getEvents(this.page, this.limit).subscribe(res => {
      if (res !== null) {
        this.events = res.results;
        this.count = parseInt(res.count);
      }
    });
  }

  pageChanged(event: any): void {
    this.page = event.page;
    this.load();
  }

  limitChanged(): void {
    this.page = 1;
    this.load();
  }

  ngOnInit() {
    this.load();
  }
}
