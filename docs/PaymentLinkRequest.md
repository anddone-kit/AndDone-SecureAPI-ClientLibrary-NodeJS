# SecureApi.PaymentLinkRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchantId** | **String** |  | 
**title** | **String** |  | 
**amount** | **Number** |  | 
**paymentDescription** | **String** |  | [optional] 
**customers** | [**[PaymentLinkResponseCustomersInner]**](PaymentLinkResponseCustomersInner.md) |  | [optional] 
**invoiceNumber** | **String** |  | [optional] 
**expireBy** | **Number** |  | [optional] 
**expireIn** | **Number** |  | 
**expireInUnit** | **String** |  | 
**expireOn** | **String** |  | [optional] 
**lineItems** | [**[PaymentLinkResponseLineItemsInner]**](PaymentLinkResponseLineItemsInner.md) |  | [optional] 
**shortDescription** | **String** |  | [optional] 
**responseType** | **String** |  | [optional] 
**callbackParameters** | [**PaymentLinkResponseCallbackParameters**](PaymentLinkResponseCallbackParameters.md) |  | [optional] 
**settings** | [**PaymentLinkRequestSettings**](PaymentLinkRequestSettings.md) |  | 
**paymentLinkType** | **String** |  | [optional] 
**saveForFuture** | **Boolean** |  | [optional] 
**splits** | [**[PaymentIntentRequestSplitsInner]**](PaymentIntentRequestSplitsInner.md) |  | [optional] 
**quoteKey** | **String** |  | [optional] 
**accountNumber** | **String** |  | [optional] 
**referenceType** | **String** |  | [optional] 
**referenceNumber** | **String** |  | [optional] 
**referenceKey** | **String** |  | [optional] 
**referenceDataList** | [**[PaymentLinkResponseReferenceDataListInner]**](PaymentLinkResponseReferenceDataListInner.md) |  | 
**enablePremiumFinance** | **Boolean** |  | [optional] 
**suppressTechnologyFee** | **Boolean** |  | [optional] 
**overrideTechnologyFee** | **Number** |  | [optional] 
**platformSettlementStatus** | **String** |  | [optional] 
**isPayInFull** | **Boolean** |  | [optional] 
**isPremiumFinancier** | **Boolean** |  | [optional] 
**pfr** | [**PaymentIntentRequestPfr**](PaymentIntentRequestPfr.md) |  | [optional] 
**pfType** | **String** |  | [optional] 



## Enum: ExpireInUnitEnum


* `Seconds` (value: `"Seconds"`)

* `Minutes` (value: `"Minutes"`)

* `Hours` (value: `"Hours"`)

* `Days` (value: `"Days"`)

* `Weeks` (value: `"Weeks"`)





## Enum: ResponseTypeEnum


* `OnScreen` (value: `"OnScreen"`)

* `CallBack` (value: `"CallBack"`)





## Enum: PaymentLinkTypeEnum


* `NA` (value: `"NA"`)

* `PaymentLink` (value: `"PaymentLink"`)

* `PaymentIntent` (value: `"PaymentIntent"`)

* `TokenLink` (value: `"TokenLink"`)

* `Invoice` (value: `"Invoice"`)





## Enum: ReferenceTypeEnum


* `None` (value: `"None"`)

* `QuoteNumber` (value: `"QuoteNumber"`)

* `AccountNumber` (value: `"AccountNumber"`)

* `PolicyNumber` (value: `"PolicyNumber"`)

* `InvoiceNumber` (value: `"InvoiceNumber"`)

* `OtherNumber` (value: `"OtherNumber"`)





## Enum: PlatformSettlementStatusEnum


* `NotDefined` (value: `"NotDefined"`)

* `Pending` (value: `"Pending"`)

* `Settled` (value: `"Settled"`)





## Enum: PfTypeEnum


* `PF` (value: `"PF"`)

* `PFLite` (value: `"PFLite"`)




