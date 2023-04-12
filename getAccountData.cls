public class getAccountData {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountRecords(string searchTerm)
    {
        if(searchTerm=='')
        {
             return [SELECT Name, AccountNumber, Phone FROM Account];
        }
        else
        {
             string searchKey = '%'+searchTerm+'%';
            return [SELECT Name, AccountNumber, Phone FROM Account WHERE Name LIKE:searchKey];
         }
    }
}