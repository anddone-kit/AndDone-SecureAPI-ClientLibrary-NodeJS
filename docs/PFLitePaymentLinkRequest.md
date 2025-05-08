# SecureApi.PFLitePaymentLinkRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quoteKey** | **String** |  | 
**isPayInFull** | **Boolean** |  | [optional] 
**title** | **String** |  | 
**paymentDescription** | **String** |  | 
**expireIn** | **String** |  | 
**expireInUnit** | **String** |  | 
**referenceDataList** | [**[PFLitePaymentLinkRequestReferenceDataListInner]**](PFLitePaymentLinkRequestReferenceDataListInner.md) |  | 
**callbackParameters** | [**PFLitePaymentLinkRequestCallbackParameters**](PFLitePaymentLinkRequestCallbackParameters.md) |  | [optional] 
**customers** | [**[PFLitePaymentLinkRequestCustomersInner]**](PFLitePaymentLinkRequestCustomersInner.md) |  | [optional] 
**settings** | [**PFLitePaymentLinkRequestSettings**](PFLitePaymentLinkRequestSettings.md) |  | 



## Enum: ExpireInUnitEnum


* `NA` (value: `"NA"`)

* `Seconds` (value: `"Seconds"`)

* `Minutes` (value: `"Minutes"`)

* `Hours` (value: `"Hours"`)

* `Days` (value: `"Days"`)

* `Weeks` (value: `"Weeks"`)




