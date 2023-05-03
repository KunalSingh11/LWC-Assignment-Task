import { LightningElement, wire, track } from 'lwc';
import getAccounts from '@salesforce/apex/AccountDataController.getAccounts';
const columns = [
    {
        label: 'Name',
        fieldName: 'accLink',
        type: 'url',
        typeAttributes: { label: { fieldName: 'Name' }, target: '_blank' }
    }, {
        label: 'AccountNumber',
        fieldName: 'AccountNumber',
        type: 'text',
    }, {
        label: 'Type',
        fieldName: 'Type',
        type: 'text',
    }, {
        label: 'BillingAddress',
        fieldName: 'BillingAddress',
        type: 'text'
    }, {
        label: 'OwnerId',
        fieldName: 'OwnerId',
        type: 'text'
    }
];
export default class LinkLWCDatatable extends LightningElement {

    searchKey = '';
    searchHandler(event) {
        this.searchKey = event.target.value;
    }

    data = [];
    columns = columns;

    @wire(getAccounts, {
        searchTerm: '$searchKey'
    })
    wireAccounts({ error, data }) {
        if (data) {
            data = JSON.parse(JSON.stringify(data));
            data.forEach(res => {
                res.accLink = '/' + res.Id;
            });
            this.data = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
        }
    }
}