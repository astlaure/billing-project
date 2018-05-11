import angular from 'angular';

import { BillingModule } from '../src/billing.module';
import { HttpService } from './core/http.service';

export class AppController {
    public config: any;
    constructor(private HttpService: HttpService) {
        this.config = {
            company: 'belair',
        }
    }
}

export const AppModule = angular
    .module('app', [
        BillingModule
    ])
    .service('HttpService', HttpService)
    .controller('AppController', AppController)
    .name;
