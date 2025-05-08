# SecureApi.SecureMerchantTokenShortResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**tokenLinkId** | **String** |  | [optional] 
**merchantId** | **String** |  | [optional] 
**selfToken** | **String** |  | [optional] 
**tokenProvider** | **String** |  | [optional] 
**accountHolderName** | **String** |  | [optional] 
**cardNumber** | **String** |  | [optional] 
**cardExpiry** | **String** |  | [optional] 
**routingNumber** | **String** |  | [optional] 
**maskedAccountNumber** | **String** |  | [optional] 
**processMethod** | **String** |  | [optional] 
**channelType** | **String** |  | [optional] 
**address** | [**TransactionPaymentResponseBillingContactAddress**](TransactionPaymentResponseBillingContactAddress.md) |  | [optional] 



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




