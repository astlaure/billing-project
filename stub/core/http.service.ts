import angular, { IQService } from 'angular';

export class HttpService {
    constructor(private $q: IQService) {}

    public get(): angular.IPromise<BillingStatement> {
        return this.$q(function(resolve, reject) {
            setTimeout(() => {
                resolve(mockStatement);
            }, 500);
        })
    }
}

const mockStatement: BillingStatement = {
    id: '00001',
    terms: [
        {
            id: '1111',
            startDate: new Date(2017, 1, 1),
            endDate: new Date(2019, 1, 1),
            amount: 1000.00,
        }
    ]
}
