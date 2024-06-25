import { LightningElement } from 'lwc';
import getSearchAccounts from '@salesforce/apex/AccountHelper.getSearchAccounts';

export default class RevImperativeApexAccountList extends LightningElement {

    searchedAccounts;

    handleSearch() {
        let search = this.template.querySelector('.input').value;
        getSearchAccounts({ searchWord: search})
        .then((res) => {
            this.searchedAccounts = res;
        })
        .cathc((e)=> {
            console.log(e);
        })
    }
}