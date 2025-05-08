# SecureApi.SecureTokenLinkByIdResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tokenLinkId** | **String** |  | [optional] 
**title** | **String** |  | [optional] 
**tokenLink** | **String** |  | [optional] 
**expireOn** | **String** |  | [optional] 
**createdOn** | **String** |  | [optional] 
**modifiedOn** | **String** |  | [optional] 
**createdBy** | **String** |  | [optional] 
**modifiedBy** | **String** |  | [optional] 
**tokenLinkStatus** | **String** |  | [optional] 
**accountToken** | [**SecureTokenLinkByIdResponseAccountToken**](SecureTokenLinkByIdResponseAccountToken.md) |  | [optional] 
**intent** | [**PFEndorsementResponseItemPaymentIntentIntent**](PFEndorsementResponseItemPaymentIntentIntent.md) |  | [optional] 
**customers** | [**[SecureTokenLinkResponseCustomersInner]**](SecureTokenLinkResponseCustomersInner.md) |  | [optional] 
**timeLine** | [**[SecureTokenLinkByIdResponseTimeLineInner]**](SecureTokenLinkByIdResponseTimeLineInner.md) |  | [optional] 



## Enum: TokenLinkStatusEnum


* `NA` (value: `"NA"`)

* `Created` (value: `"Created"`)

* `Completed` (value: `"Completed"`)

* `Expired` (value: `"Expired"`)

* `Invalidated` (value: `"Invalidated"`)

* `Failed` (value: `"Failed"`)




