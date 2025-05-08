# SecureApi.SecureTransactionRefundRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invoiceNumber** | **String** |  | [optional] 
**pONumber** | **String** |  | [optional] 
**refundAmount** | **Number** |  | 
**transactionId** | **String** |  | 
**remarks** | **String** |  | [optional] 
**refundReason** | **String** |  | 
**refundDetail** | **String** |  | 
**refundType** | **String** |  | 
**splits** | [**[PaymentIntentRequestSplitsInner]**](PaymentIntentRequestSplitsInner.md) |  | [optional] 



## Enum: RefundTypeEnum


* `NA` (value: `"NA"`)

* `Total` (value: `"Total"`)

* `Subtotal` (value: `"Subtotal"`)

* `Remaining` (value: `"Remaining"`)

* `Partial` (value: `"Partial"`)




