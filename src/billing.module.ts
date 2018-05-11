import angular from 'angular';
import { BillingComponent } from './billing.component';

export const BillingModule = angular
    .module('billing', [])
    .component('billing', BillingComponent)
    .name;