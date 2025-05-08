# SecureApi.VerifyBankAccountResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**verificationEntityId** | **String** |  | [optional] 
**verifyingEntity** | **String** |  | [optional] 
**verificationStatus** | **String** |  | [optional] 
**statusReason** | **String** |  | [optional] 
**estimatedVerificationDate** | **String** |  | [optional] 
**eventId** | **String** |  | [optional] 
**eventType** | **String** |  | [optional] 
**bankAccountEntityId** | **Number** |  | [optional] 
**bankAccountEntityType** | **String** |  | [optional] 
**createdOn** | **String** |  | [optional] 
**createdBy** | **String** |  | [optional] 
**modifiedOn** | **String** |  | [optional] 
**modifiedBy** | **String** |  | [optional] 
**httpResponse** | [**VerifyBankAccountResponseHttpResponse**](VerifyBankAccountResponseHttpResponse.md) |  | [optional] 



## Enum: VerifyingEntityEnum


* `Other` (value: `"Other"`)

* `Orum` (value: `"Orum"`)





## Enum: VerificationStatusEnum


* `Pending` (value: `"Pending"`)

* `Valid` (value: `"Valid"`)

* `Closed` (value: `"Closed"`)

* `Invalid` (value: `"Invalid"`)

* `Failed` (value: `"Failed"`)





## Enum: BankAccountEntityTypeEnum


* `None` (value: `"None"`)

* `Vendor` (value: `"Vendor"`)

* `Merchant` (value: `"Merchant"`)




