# SecureApi.PFEndorsementRequestQuoteInsured

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agentCustomerNumber** | **String** | This denotes the Agent Customer Number. | [optional] 
**email** | **String** | This denotes the email. | [optional] 
**careOf** | **String** | This denotes the care of. | [optional] 
**uniqueID** | **String** | This denotes a unique identifier for the insured. | [optional] 
**mobilePhoneNumber** | **String** | This denotes the mobile phone number. | [optional] 
**isCancellationWarningEnabled** | **Boolean** | Indicates if cancellation warnings are enabled. | [optional] 
**faxNumber** | **String** | This denotes the fax number. | [optional] 
**emailAddress** | **String** | This denotes an alternate email address. | [optional] 
**pfType** | **String** | This denotes the PFType (enum or string depending on your definition). | [optional] 
**address** | [**PFEndorsementRequestQuoteInsuredAddress**](PFEndorsementRequestQuoteInsuredAddress.md) |  | [optional] 
**hasDataChangeAgentCustomerNumber** | **Boolean** |  | [optional] 
**hasDataChangeName** | **Boolean** |  | [optional] 
**hasDataChangeAddress1** | **Boolean** |  | [optional] 
**hasDataChangeAddress2** | **Boolean** |  | [optional] 
**hasDataChangeCity** | **Boolean** |  | [optional] 
**hasDataChangeState** | **Boolean** |  | [optional] 
**hasDataChangeZip** | **Boolean** |  | [optional] 
**hasDataChangePhone** | **Boolean** |  | [optional] 
**hasDataChangeEmail** | **Boolean** |  | [optional] 
**hasDataChangeCareOf** | **Boolean** |  | [optional] 
**hasDataChangeInsured** | **Boolean** |  | [optional] 



## Enum: PfTypeEnum


* `None` (value: `"None"`)

* `EPF` (value: `"EPF"`)

* `PFLite` (value: `"PFLite"`)




