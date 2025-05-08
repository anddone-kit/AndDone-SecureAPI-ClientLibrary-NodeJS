# SecureApi.SecureTokenLinkUpdateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tokenLinkId** | **String** |  | 
**expireIn** | **Number** |  | 
**responseType** | **String** |  | [optional] 
**expireInUnit** | **String** |  | 
**intent** | [**PaymentIntentRequestIntent**](PaymentIntentRequestIntent.md) |  | 
**callBackParameters** | [**PaymentLinkResponseCallbackParameters**](PaymentLinkResponseCallbackParameters.md) |  | [optional] 



## Enum: ResponseTypeEnum


* `OnScreen` (value: `"OnScreen"`)

* `CallBack` (value: `"CallBack"`)





## Enum: ExpireInUnitEnum


* `Seconds` (value: `"Seconds"`)

* `Minutes` (value: `"Minutes"`)

* `Hours` (value: `"Hours"`)

* `Days` (value: `"Days"`)

* `Weeks` (value: `"Weeks"`)

* `NA` (value: `"NA"`)




