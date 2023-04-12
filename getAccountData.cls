public class getAccountData {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountRecords(string searchTerm)
    {
        if(searchTerm=='')
        {
             return [SELECT Name, AccountNumber, Type, BillingAddress, OwnerId FROM Account];
        }
        else
        {
             string searchKey = '%'+searchTerm+'%';
            return [SELECT Name, AccountNumber, Type, BillingAddress, OwnerId FROM Account WHERE Name LIKE:searchKey];
         }
    }
}