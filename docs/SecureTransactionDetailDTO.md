# SecureApi.SecureTransactionDetailDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transactionId** | **String** |  | [optional] 
**traceNumber** | **String** |  | [optional] 
**transactionCode** | **String** |  | [optional] 
**transactionOrigin** | **String** |  | [optional] 
**refundOrigin** | **Number** |  | [optional] 
**billingContact** | [**TransactionPaymentResponseBillingContact**](TransactionPaymentResponseBillingContact.md) |  | [optional] 
**shippingContact** | [**TransactionPaymentResponseBillingContact**](TransactionPaymentResponseBillingContact.md) |  | [optional] 
**referenceTransactionId** | **String** |  | [optional] 
**transactionDate** | **String** |  | [optional] 
**merchantId** | **String** |  | [optional] 
**ipAddress** | **String** |  | [optional] 
**operationType** | **String** |  | [optional] 
**channelType** | **String** |  | [optional] 
**processMethod** | **String** |  | [optional] 
**processorName** | **String** |  | [optional] 
**isDebit** | **Boolean** |  | [optional] 
**tenderInfo** | [**SecureTransactionDetailDTOTenderInfo**](SecureTransactionDetailDTOTenderInfo.md) |  | [optional] 
**referenceCustomerId** | **String** |  | [optional] 
**invoiceNo** | **String** |  | [optional] 
**referenceNo** | **String** |  | [optional] 
**remarks** | **String** |  | [optional] 
**recurringType** | **String** |  | [optional] 
**recurringId** | **String** |  | [optional] 
**installmentNumber** | **Number** |  | [optional] 
**installmentCount** | **Number** |  | [optional] 
**allowDuplicates** | **Boolean** |  | [optional] 
**verificationEnabled** | **Boolean** |  | [optional] 
**sentSuccessNotification** | **Boolean** |  | [optional] 
**sentFailedNotification** | **Boolean** |  | [optional] 
**trainingMode** | **Boolean** |  | [optional] 
**terminalId** | **String** |  | [optional] 
**isOffline** | **Boolean** |  | [optional] 
**transactionStatus** | **String** |  | [optional] 
**previousTransactionStatus** | **String** |  | [optional] 
**transactionResult** | [**TransactionPaymentResponseTransactionResult**](TransactionPaymentResponseTransactionResult.md) |  | [optional] 
**level** | **Number** |  | [optional] 
**partnerId** | **String** |  | [optional] 
**orderId** | **String** |  | [optional] 
**invoiceId** | **String** |  | [optional] 
**paymentLinkId** | **String** |  | [optional] 
**additionalFields** | **String** |  | [optional] 
**settlementDate** | **String** |  | [optional] 
**issuer** | **String** |  | [optional] 
**paymentReference** | **String** |  | [optional] 
**refundReference** | **String** |  | [optional] 



## Enum: TransactionOriginEnum


* `Terminal` (value: `"Terminal"`)

* `VirtualTerminal` (value: `"VirtualTerminal"`)

* `WebForm` (value: `"WebForm"`)

* `API` (value: `"API"`)

* `Schedule` (value: `"Schedule"`)

* `Batch` (value: `"Batch"`)

* `PaymentIntent` (value: `"PaymentIntent"`)





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





## Enum: ChannelTypeEnum


* `NotDefined` (value: `"NotDefined"`)

* `ACH` (value: `"ACH"`)

* `CreditCard` (value: `"CreditCard"`)

* `DebitCard` (value: `"DebitCard"`)





## Enum: ProcessMethodEnum


* `NotDefined` (value: `"NotDefined"`)

* `ACH` (value: `"ACH"`)

* `CardNotPresent` (value: `"CardNotPresent"`)





## Enum: RecurringTypeEnum


* `Installment` (value: `"Installment"`)

* `Billing` (value: `"Billing"`)

* `Custom` (value: `"Custom"`)





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





## Enum: PreviousTransactionStatusEnum


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




