# SecureApi.PaymentLinkResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**merchantId** | **String** |  | [optional] 
**title** | **String** |  | [optional] 
**paymentLink** | **String** |  | [optional] 
**shortLink** | **String** |  | [optional] 
**amount** | **Number** |  | [optional] 
**paymentDescription** | **String** |  | [optional] 
**expireIn** | **Number** |  | [optional] 
**expireInUnit** | **String** |  | [optional] 
**expireOn** | **String** |  | [optional] 
**payments** | [**[PaymentLinkResponsePaymentsInner]**](PaymentLinkResponsePaymentsInner.md) |  | [optional] 
**noOfPaymentMade** | **Number** |  | [optional] 
**totalPaidAmount** | **Number** |  | [optional] 
**linkStatus** | **String** |  | [optional] 
**invoiceNumber** | **String** |  | [optional] 
**createdOn** | **String** |  | [optional] 
**createdBy** | **String** |  | [optional] 
**modifiedOn** | **String** |  | [optional] 
**modifiedBy** | **String** |  | [optional] 
**shortDescription** | **String** |  | [optional] 
**responseType** | **String** |  | [optional] 
**callbackParameters** | [**PaymentLinkResponseCallbackParameters**](PaymentLinkResponseCallbackParameters.md) |  | [optional] 
**customers** | [**[PaymentLinkResponseCustomersInner]**](PaymentLinkResponseCustomersInner.md) |  | [optional] 
**lineItems** | [**[PaymentLinkResponseLineItemsInner]**](PaymentLinkResponseLineItemsInner.md) |  | [optional] 
**displaySettings** | [**PaymentLinkResponseDisplaySettings**](PaymentLinkResponseDisplaySettings.md) |  | [optional] 
**splits** | [**[PaymentIntentRequestSplitsInner]**](PaymentIntentRequestSplitsInner.md) |  | [optional] 
**saveForFuture** | **Boolean** |  | [optional] 
**quoteKey** | **String** |  | [optional] 
**accountNumber** | **String** |  | [optional] 
**referenceType** | **String** |  | [optional] 
**referenceNumber** | **String** |  | [optional] 
**referenceKey** | **String** |  | [optional] 
**referenceDataList** | [**[PaymentLinkResponseReferenceDataListInner]**](PaymentLinkResponseReferenceDataListInner.md) |  | [optional] 
**enablePremiumFinance** | **Boolean** |  | [optional] 
**isPremiumFinancier** | **Boolean** |  | [optional] 
**pfr** | [**PaymentIntentRequestPfr**](PaymentIntentRequestPfr.md) |  | [optional] 
**paymentLinkType** | **String** |  | [optional] 
**suppressTechnologyFee** | **Boolean** |  | [optional] 
**overrideTechnologyFee** | **Number** |  | [optional] 
**isPFLite** | **Boolean** |  | [optional] 
**isPayInFull** | **Boolean** |  | [optional] 



## Enum: ExpireInUnitEnum


* `Seconds` (value: `"Seconds"`)

* `Minutes` (value: `"Minutes"`)

* `Hours` (value: `"Hours"`)

* `Days` (value: `"Days"`)

* `Weeks` (value: `"Weeks"`)





## Enum: LinkStatusEnum


* `Created` (value: `"Created"`)

* `Enabled` (value: `"Enabled"`)

* `Disabled` (value: `"Disabled"`)

* `Expired` (value: `"Expired"`)

* `Paid` (value: `"Paid"`)

* `PaymentInitiated` (value: `"PaymentInitiated"`)

* `None` (value: `"None"`)





## Enum: ResponseTypeEnum


* `OnScreen` (value: `"OnScreen"`)

* `CallBack` (value: `"CallBack"`)





## Enum: ReferenceTypeEnum


* `None` (value: `"None"`)

* `QuoteId` (value: `"QuoteId"`)

* `AccountNumber` (value: `"AccountNumber"`)

* `PolicyNumber` (value: `"PolicyNumber"`)

* `InvoiceNumber` (value: `"InvoiceNumber"`)

* `Other` (value: `"Other"`)





## Enum: PaymentLinkTypeEnum


* `NA` (value: `"NA"`)

* `PaymentLink` (value: `"PaymentLink"`)

* `PaymentIntent` (value: `"PaymentIntent"`)

* `TokenLink` (value: `"TokenLink"`)

* `Invoice` (value: `"Invoice"`)




