import angular, { translate } from 'angular';
import { BillingComponent } from './billing.component';

import billingText from './billing.json';

export const BillingModule = angular
  .module('billing', [])
  .component('billing', BillingComponent)
  .config(function($translateProvider: translate.ITranslateProvider) {
    $translateProvider
      .translations('en', billingText.en)
      .translations('fr', billingText.fr)
      .preferredLanguage('en');
  })
  .name;
