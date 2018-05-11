import { IComponentOptions } from 'angular';
import html from './billing.component.html';
import './billing.component.scss';

export class BillingController implements BillingComponentBindings {
    public fetchService: any;
    public config: any;
    
    public message: string;
    public test: string = 'subtitle';
    public statement: BillingStatement;

    constructor() {
        this.message = 'Hello World';
    }

    $onInit() {
        this.fetchService.get()
            .then(response => this.statement = response);
    }
}

interface BillingComponentBindings {
    fetchService: any;
    config: any;
}

export const BillingComponent: IComponentOptions = {
    bindings: {
        fetchService: '<',
        config: '<'
    },
    template: html,
    controller: BillingController,
}
