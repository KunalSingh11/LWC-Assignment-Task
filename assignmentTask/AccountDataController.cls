public class AccountDataController {
    @AuraEnabled(Cacheable = true)
    public static List<Account> getAccounts(          String searchTerm                ){
      if(searchTerm==''){
      return [SELECT Id, Name, AccountNumber, Type, BillingAddress, OwnerId FROM Account ];
    }
    else{
      string searchKey = '%'+searchTerm+'%';
      return [SELECT Id, Name, AccountNumber, Type, BillingAddress, OwnerId FROM Account WHERE Name LIKE:searchKey ];
    }
}}