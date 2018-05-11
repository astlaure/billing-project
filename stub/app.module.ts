import angular, { translate } from 'angular';
import angularTranslate from 'angular-translate';

import { BillingModule } from '../src/billing.module';
import { HttpService } from './core/http.service';

import appText from './app.json';

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
    angularTranslate,
    BillingModule
  ])
  .config(function($translateProvider: translate.ITranslateProvider) {
    $translateProvider
      .translations('en', appText.en)
      .translations('fr', appText.fr)
      .preferredLanguage('en');
  })
  .service('HttpService', HttpService)
  .controller('AppController', AppController)
  .name;
