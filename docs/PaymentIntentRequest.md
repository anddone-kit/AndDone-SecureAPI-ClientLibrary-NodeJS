# SecureApi.PaymentIntentRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **String** |  | 
**amount** | **Number** |  | 
**invoiceNumber** | **String** |  | [optional] 
**expiresIn** | **String** |  | [optional] 
**shortDescription** | **String** |  | [optional] 
**paymentDescription** | **String** |  | [optional] 
**merchantToken** | **String** |  | [optional] 
**intent** | [**PaymentIntentRequestIntent**](PaymentIntentRequestIntent.md) |  | 
**saveForFuture** | **Boolean** |  | [optional] 
**enablePremiumFinance** | **Boolean** |  | [optional] 
**splits** | [**[PaymentIntentRequestSplitsInner]**](PaymentIntentRequestSplitsInner.md) |  | [optional] 
**quoteKey** | **String** |  | [optional] 
**accountNumber** | **String** |  | [optional] 
**suppressTechnologyFee** | **Boolean** |  | [optional] 
**overrideTechnologyFee** | **Number** |  | [optional] 
**isPremiumFinancier** | **Boolean** |  | [optional] 
**pfr** | [**PaymentIntentRequestPfr**](PaymentIntentRequestPfr.md) |  | [optional] 
**saveCustomer** | **Boolean** |  | [optional] 
**customers** | [**[PaymentIntentRequestCustomersInner]**](PaymentIntentRequestCustomersInner.md) |  | [optional] 
**additionalDetailsPreference** | **String** |  | 
**selectedCustomerFields** | **String** |  | [optional] 
**referenceType** | **String** |  | [optional] 
**referenceNumber** | **String** |  | [optional] 
**referenceKey** | **String** |  | [optional] 
**referenceDataList** | [**[PaymentIntentRequestReferenceDataListInner]**](PaymentIntentRequestReferenceDataListInner.md) |  | [optional] 
**displayMode** | **String** |  | [optional] 



## Enum: AdditionalDetailsPreferenceEnum


* `None` (value: `"None"`)

* `AskShopper` (value: `"AskShopper"`)

* `ManualEnter` (value: `"ManualEnter"`)

* `NoAdditionalDetails` (value: `"NoAdditionalDetails"`)

* `ManualEnterEditNotAllowed` (value: `"ManualEnterEditNotAllowed"`)





## Enum: ReferenceTypeEnum


* `None` (value: `"None"`)

* `QuoteId` (value: `"QuoteId"`)

* `AccountNumber` (value: `"AccountNumber"`)

* `PolicyNumber` (value: `"PolicyNumber"`)

* `InvoiceNumber` (value: `"InvoiceNumber"`)

* `Other` (value: `"Other"`)





## Enum: DisplayModeEnum


* `None` (value: `"None"`)

* `PremiumFinanceOnly` (value: `"PremiumFinanceOnly"`)

* `Both` (value: `"Both"`)




