import { IComponentOptions, translate } from 'angular';
import html from './billing.component.html';
import './billing.component.scss';

interface BillingComponentBindings {
  fetchService: any;
  config: any;
}
export class BillingController implements BillingComponentBindings {
  public fetchService: any;
  public config: any;
  
  public message: string;
  public messages: any;
  public test: string = 'subtitle';
  public statement: BillingStatement;

  constructor(private $translate: translate.ITranslateService) {
    this.message = 'Hello World';
    this.$translate.use('en');
  }

  $onInit() {
    this.fetchService.get()
      .then(response => this.statement = response);
  }
}

export const BillingComponent: IComponentOptions = {
  bindings: {
    fetchService: '<',
    config: '<'
  },
  template: html,
  controller: BillingController,
}
