import angular from 'angular';

import { BillingModule } from '../src/billing.module';

export const AppModule = angular
    .module('app', [
        BillingModule
    ])
    .name;