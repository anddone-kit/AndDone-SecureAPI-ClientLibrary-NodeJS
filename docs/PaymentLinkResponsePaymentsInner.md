# SecureApi.PaymentLinkResponsePaymentsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transactionId** | **String** |  | [optional] 
**transactionStatus** | **String** |  | [optional] 
**amount** | **Number** |  | [optional] 
**authCode** | **String** |  | [optional] 
**customerId** | **String** |  | [optional] 
**accountToken** | **String** |  | [optional] 
**channelType** | **String** |  | [optional] 
**maskedAccount** | **String** |  | [optional] 
**createdOn** | **String** |  | [optional] 



## Enum: TransactionStatusEnum


* `Created` (value: `"Created"`)

* `PendingForAuthorized` (value: `"PendingForAuthorized"`)

* `Authorized` (value: `"Authorized"`)

* `Posted` (value: `"Posted"`)

* `Captured` (value: `"Captured"`)

* `Failed` (value: `"Failed"`)

* `Returned` (value: `"Returned"`)

* `Chargeback` (value: `"Chargeback"`)

* `Cancelled` (value: `"Cancelled"`)

* `Refunded` (value: `"Refunded"`)

* `Approved` (value: `"Approved"`)

* `CancelAttempt` (value: `"CancelAttempt"`)

* `RefundAttempt` (value: `"RefundAttempt"`)

* `Hold` (value: `"Hold"`)

* `Denied` (value: `"Denied"`)

* `SettlementHold` (value: `"SettlementHold"`)

* `Success` (value: `"Success"`)

* `Retried` (value: `"Retried"`)

* `ReprocessAttempt` (value: `"ReprocessAttempt"`)

* `Reprocessed` (value: `"Reprocessed"`)

* `ChargebackReversed` (value: `"ChargebackReversed"`)

* `RefundedReversed` (value: `"RefundedReversed"`)

* `Paid` (value: `"Paid"`)

* `PaidChargeback` (value: `"PaidChargeback"`)

* `PaidChargebackReversed` (value: `"PaidChargebackReversed"`)

* `PaidRefunded` (value: `"PaidRefunded"`)

* `PaidRefundedReversed` (value: `"PaidRefundedReversed"`)

* `None` (value: `"None"`)

* `Unknown` (value: `"Unknown"`)





## Enum: ChannelTypeEnum


* `ACH` (value: `"ACH"`)

* `CreditCard` (value: `"CreditCard"`)

* `DebitCard` (value: `"DebitCard"`)

* `RTP` (value: `"RTP"`)




