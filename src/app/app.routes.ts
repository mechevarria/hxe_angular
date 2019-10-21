import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventComponent } from './event/event.component';
import { ChartsComponent } from './charts/charts.component';
import { AppMapComponent } from './app-map/app-map.component';
import { SearchComponent } from './search/search.component';

export const AppRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      breadcrumb: 'Home'
    },
    children: [
      {
        path: 'charts',
        component: ChartsComponent,
        data: {
          breadcrumb: 'Charts'
        }
      },
      {
        path: 'events',
        component: EventComponent,
        data: {
          breadcrumb: 'Events'
        }
      },
      {
        path: 'map',
        component: AppMapComponent,
        data: {
          breadcrumb: 'Map'
        }
      },
      {
        path: 'search',
        component: SearchComponent,
        data: {
          breadcrumb: 'Search'
        }
      }
    ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];
