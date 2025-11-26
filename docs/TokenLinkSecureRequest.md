# SecureApi.TokenLinkSecureRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchantId** | **String** |  | [optional] 
**title** | **String** |  | 
**expireIn** | **Number** |  | 
**expireInUnit** | **String** |  | 
**responseType** | **String** |  | [optional] 
**intent** | [**PaymentIntentRequestIntent**](PaymentIntentRequestIntent.md) |  | 
**callbackParameters** | [**PaymentLinkResponseCallbackParameters**](PaymentLinkResponseCallbackParameters.md) |  | [optional] 
**customers** | [**[TokenLinkSecureRequestCustomersInner]**](TokenLinkSecureRequestCustomersInner.md) |  | [optional] 



## Enum: ExpireInUnitEnum


* `Seconds` (value: `"Seconds"`)

* `Minutes` (value: `"Minutes"`)

* `Hours` (value: `"Hours"`)

* `Days` (value: `"Days"`)

* `Weeks` (value: `"Weeks"`)

* `NA` (value: `"NA"`)





## Enum: ResponseTypeEnum


* `OnScreen` (value: `"OnScreen"`)

* `CallBack` (value: `"CallBack"`)




