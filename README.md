# HXE Angular

Client appliation for [SAP HANA](https://www.sap.com/products/hana.html) services that taking advantage of the built-in REST, Search and Spatial engines. The backend project is located at [github/mechevarria/hxe_mta](https://github.com/mechevarria/hxe_mta). This project was generated with [Angular CLI](https://github.com/angular/angular-cli). [coreui](https://coreui.io/docs/getting-started/introduction/) is already integrated.  The project is also configured as a [docker](https://docs.docker.com/install/) container. Data is provided by the [Armed Conflict Location & Event Data](https://www.acleddata.com) project

 ![home.png](screenshots/home.png)
#
 ![map.png](screenshots/map.png)
#
 ![search.png](screenshots/search.png)
#
 ![chart.png](screenshots/chart.png)
#
 ![event.png](screenshots/event.png)

## Install

* Install dependencies with 
>`npm install`

## Development server

* In one terminal, start a dev build that watches source files and rebuilds automatically

> `npm run watch`

* In a separate terminal run the [express](https://expressjs.com/) server

>`npm run start`

The server will be running on [http://localhost:8080](http://localhost:8080)

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Run as docker container

Build the image with this script

> `docker-build.sh`

Run the continer with this script

> `docker-run.sh`  

## Further help

To learn more about SAP HANA development capabilities, go to [developers.sap.com](https://developers.sap.com/)

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

To get started with Angular, this is an excellent official [tutorial](https://angular.io/tutorial)

Mapbox component provided by [ngx-mapbox-gl](https://github.com/Wykks/ngx-mapbox-gl)

Bootstrap components were created using [ngx-bootstrap](https://github.com/valor-software/ngx-bootstrap)

Chart library by [ng2-charts](https://valor-software.com/ng2-charts/)

Toast notification done with [ngx-toastr](https://scttcper.github.io/ngx-toastr/)
