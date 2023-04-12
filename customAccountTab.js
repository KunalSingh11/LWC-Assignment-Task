import {
    LightningElement,
    wire
} from 'lwc';
import getAccountRecords from "@salesforce/apex/getAccountData.getAccountRecords";

export default class CustomAccountTab extends LightningElement {

    dataTableData;
    dataTableColumns = [{
            label: "Account Name",
            fieldName: "Name"
        },
        {
            label: "Account Number",
            fieldName: "AccountNumber"
        },
        {
            label: "Phone",
            fieldName: "Phone"
        }
    ];

    searchHandler(event) {
        this.searchKey = event.target.value;

    }

    resultData;
    searchKey = '';
    @wire(getAccountRecords, {
        searchTerm: '$searchKey'
    })
    showAccountData({
        error,
        data
    }) {
        if (data) {
            this.resultData = data;
            console.log(data);
        } else if (error) {
            console.log(error);
        }
    }
}