# SecureApi.PaymentRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token** | **String** |  | [optional] 
**type** | **String** |  | 
**transactionCode** | **String** |  | 
**billingContact** | [**TransactionPaymentResponseBillingContact**](TransactionPaymentResponseBillingContact.md) |  | [optional] 
**phoneCountryCode** | **String** |  | [optional] 
**channelType** | **String** |  | 
**processMethod** | **String** |  | [optional] 
**tenderInfo** | [**PaymentRequestTenderInfo**](PaymentRequestTenderInfo.md) |  | 
**invoiceNo** | **String** |  | [optional] 
**referenceNo** | **String** |  | [optional] 
**paymentReference** | **String** |  | [optional] 
**remarks** | **String** |  | [optional] 
**saveCustomer** | **Boolean** |  | [optional] 
**captchaToken** | **String** |  | [optional] 
**actionName** | **String** |  | [optional] 
**additionalFields** | **{String: String}** |  | [optional] 
**issuer** | **String** |  | [optional] 
**splits** | [**[PaymentIntentRequestSplitsInner]**](PaymentIntentRequestSplitsInner.md) |  | [optional] 
**operationType** | **String** |  | [optional] 
**suppressTechnologyFee** | **Boolean** |  | [optional] 
**overrideTechnologyFee** | **Number** |  | [optional] 
**isPremiumFinancier** | **Boolean** |  | [optional] 
**pfr** | [**PaymentIntentRequestPfr**](PaymentIntentRequestPfr.md) |  | [optional] 



## Enum: TypeEnum


* `AnytimePayment` (value: `"AnytimePayment"`)

* `SubDomain` (value: `"SubDomain"`)

* `PaymentIntent` (value: `"PaymentIntent"`)

* `PaymentLink` (value: `"PaymentLink"`)

* `OpenPayment` (value: `"OpenPayment"`)

* `TokenLink` (value: `"TokenLink"`)





## Enum: ChannelTypeEnum


* `CreditCard` (value: `"CreditCard"`)

* `DebitCard` (value: `"DebitCard"`)

* `ACH` (value: `"ACH"`)





## Enum: ProcessMethodEnum


* `NotDefined` (value: `"NotDefined"`)

* `ACH` (value: `"ACH"`)

* `CardNotPresent` (value: `"CardNotPresent"`)





## Enum: OperationTypeEnum


* `Sale` (value: `"Sale"`)

* `VerifyOnly` (value: `"VerifyOnly"`)

* `ForceSale` (value: `"ForceSale"`)

* `Adjust` (value: `"Adjust"`)

* `Activate` (value: `"Activate"`)

* `Deactivate` (value: `"Deactivate"`)

* `Reload` (value: `"Reload"`)

* `Refund` (value: `"Refund"`)

* `Inquire` (value: `"Inquire"`)

* `ReverseAuth` (value: `"ReverseAuth"`)




