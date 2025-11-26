# SecureApi.PaymentIntentResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paymentToken** | **String** |  | [optional] 
**amount** | **Number** |  | [optional] 
**title** | **String** |  | [optional] 
**shortDescription** | **String** |  | [optional] 
**paymentDescription** | **String** |  | [optional] 
**invoiceNumber** | **String** |  | [optional] 
**expiresOn** | **String** |  | [optional] 
**intent** | [**PaymentIntentResponseIntent**](PaymentIntentResponseIntent.md) |  | [optional] 
**saveForFuture** | **Boolean** |  | [optional] 
**enablePremiumFinance** | **Boolean** |  | [optional] 
**splits** | [**[PaymentIntentRequestSplitsInner]**](PaymentIntentRequestSplitsInner.md) |  | [optional] 
**quoteKey** | **String** |  | [optional] 
**accountNumber** | **String** |  | [optional] 
**suppressTechnologyFee** | **Boolean** |  | [optional] 
**overrideTechnologyFee** | **Number** |  | [optional] 
**isPremiumFinancier** | **Boolean** |  | [optional] 
**pfr** | [**PaymentIntentRequestPfr**](PaymentIntentRequestPfr.md) |  | [optional] 
**customers** | [**[PaymentIntentResponseCustomersInner]**](PaymentIntentResponseCustomersInner.md) |  | [optional] 
**additionalDetailsPreference** | **String** |  | [optional] 
**selectedCustomerFields** | **String** |  | [optional] 
**referenceDataList** | [**[PaymentIntentRequestReferenceDataListInner]**](PaymentIntentRequestReferenceDataListInner.md) |  | [optional] 
**displayMode** | **String** |  | [optional] 



## Enum: AdditionalDetailsPreferenceEnum


* `None` (value: `"None"`)

* `AskShopper` (value: `"AskShopper"`)

* `ManualEnter` (value: `"ManualEnter"`)

* `NoAdditionalDetails` (value: `"NoAdditionalDetails"`)

* `ManualEnterEditNotAllowed` (value: `"ManualEnterEditNotAllowed"`)





## Enum: DisplayModeEnum


* `None` (value: `"None"`)

* `PremiumFinanceOnly` (value: `"PremiumFinanceOnly"`)

* `Both` (value: `"Both"`)




