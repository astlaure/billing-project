import { IComponentOptions } from 'angular';
import html from './billing.component.html';

class BillingController {
    public message: string;
    public test: string = 'subtitle';
    constructor() {
        this.message = 'Hello World';
    }
}

export const BillingComponent: IComponentOptions = {
    bindings: {
        fetchService: '<',
    },
    template: html,
    controller: BillingController,
}