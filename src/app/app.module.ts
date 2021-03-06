import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routes';
import { BsDropdownModule, CollapseModule, PaginationModule, TypeaheadModule } from 'ngx-bootstrap';
import { EventComponent } from './event/event.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ChartsComponent } from './charts/charts.component';
import { ChartsModule } from 'ng2-charts';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { AppMapComponent } from './app-map/app-map.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SearchComponent } from './search/search.component';
import { NotifierModule } from 'angular-notifier';
import { AnalysisComponent } from './analysis/analysis.component';
import { TagCloudModule } from 'angular-tag-cloud-module';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    HomeComponent,
    HeaderComponent,
    BreadcrumbComponent,
    ChartsComponent,
    SidebarComponent,
    AppMapComponent,
    SearchComponent,
    AnalysisComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    CollapseModule.forRoot(),
    TypeaheadModule.forRoot(),
    CommonModule,
    BrowserAnimationsModule,
    ChartsModule,
    TagCloudModule,
    NotifierModule.withConfig({
      position: {
        horizontal: {
          position: 'right'
        },
        vertical : {
          position: 'top',
          distance: 55
        }
      }
    }),
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoibWVjaGV2YXJyaWEiLCJhIjoiY2pxbXNuMXF0MGwzNTQ5bzJwNGtyMTRqdyJ9.WZfALlPxuOveabQDrroLcQ'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
