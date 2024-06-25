public with sharing class AccountHelper {
    public AccountHelper() {

    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getSearchAccounts(String searchWord) {
        String sanitizedSearch = String.escapeSingleQuotes(searchWord);
        String search = '%' + sanitizedSearch + '%';

        return [SELECT Id, Name FROM Account WHERE Name LIKE :search];
    }
}