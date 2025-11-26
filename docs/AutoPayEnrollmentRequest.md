# SecureApi.AutoPayEnrollmentRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchantId** | **String** |  | [optional] 
**quoteKey** | **String** |  | 
**paymentIntentId** | **String** |  | 
**emailAddress** | **String** |  | 
**processMethod** | **String** |  | 
**creditCardToken** | **String** |  | [optional] 
**channelType** | **String** |  | [optional] 
**cardholderName** | **String** |  | [optional] 
**adyenPSP** | **String** |  | [optional] 
**accountOwnerName** | **String** |  | [optional] 
**bankRoutingNumber** | **String** |  | [optional] 
**bankAccountNumber** | **String** |  | [optional] 
**accountType** | **String** |  | [optional] 



## Enum: ProcessMethodEnum


* `NotDefined` (value: `"NotDefined"`)

* `ACH` (value: `"ACH"`)

* `CardNotPresent` (value: `"CardNotPresent"`)





## Enum: ChannelTypeEnum


* `NotDefined` (value: `"NotDefined"`)

* `ACH` (value: `"ACH"`)

* `CreditCard` (value: `"CreditCard"`)

* `DebitCard` (value: `"DebitCard"`)

* `RTP` (value: `"RTP"`)





## Enum: AccountTypeEnum


* `checking` (value: `"checking"`)

* `savings` (value: `"savings"`)




