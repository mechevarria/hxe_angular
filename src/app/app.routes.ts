import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {TableComponent} from './table/table.component';
import {ChartsComponent} from './charts/charts.component';
import { AppMapComponent } from './app-map/app-map.component';

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
        component: TableComponent,
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
      }
    ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];
