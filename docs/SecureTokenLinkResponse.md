# SecureApi.SecureTokenLinkResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchantId** | **String** |  | [optional] 
**tokenLinkId** | **String** |  | [optional] 
**title** | **String** |  | [optional] 
**url** | **String** |  | [optional] 
**expireOn** | **String** |  | [optional] 
**createdOn** | **String** |  | [optional] 
**modifiedOn** | **String** |  | [optional] 
**createdBy** | **String** |  | [optional] 
**modifiedBy** | **String** |  | [optional] 
**tokenLinkStatus** | **String** |  | [optional] 
**responseType** | **String** |  | [optional] 
**callBackParameters** | [**PaymentLinkResponseCallbackParameters**](PaymentLinkResponseCallbackParameters.md) |  | [optional] 
**intent** | [**SecureTokenLinkResponseIntent**](SecureTokenLinkResponseIntent.md) |  | [optional] 
**customers** | [**[SecureTokenLinkResponseCustomersInner]**](SecureTokenLinkResponseCustomersInner.md) |  | [optional] 



## Enum: TokenLinkStatusEnum


* `NA` (value: `"NA"`)

* `Created` (value: `"Created"`)

* `Completed` (value: `"Completed"`)

* `Expired` (value: `"Expired"`)

* `Invalidated` (value: `"Invalidated"`)

* `Failed` (value: `"Failed"`)





## Enum: ResponseTypeEnum


* `OnScreen` (value: `"OnScreen"`)

* `CallBack` (value: `"CallBack"`)




