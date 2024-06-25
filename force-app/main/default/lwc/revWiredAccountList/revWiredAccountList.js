import { LightningElement, wire } from 'lwc';
import getSearchAccounts from '@salesforce/apex/AccountHelper.getSearchAccounts';

export default class RevWiredAccountList extends LightningElement {

    searchedAccounts;
    searchWord;

    // Wire service 
    @wire(getSearchAccounts, {searchWord: '$searchWord'})
    searchedAccounts;

    columns = [
        {label: 'Name', fieldName: 'Name', type: 'name'}
    ];

    handleSearch() {
        let search = this.template.querySelector('.input').value;
        this.searchWord = search;
    }

//     handleOnChange(event) {
//         this.searchhWord = event.target.value;
//     }
}