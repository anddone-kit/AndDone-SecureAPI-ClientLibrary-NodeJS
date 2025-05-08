# SecureApi.TransactionDetailResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transactionId** | **String** |  | [optional] 
**batchId** | **String** |  | [optional] 
**transactionCode** | **String** |  | [optional] 
**transactionOrigin** | **String** |  | [optional] 
**refundOrigin** | **Number** |  | [optional] 
**billingContact** | [**TransactionPaymentResponseBillingContact**](TransactionPaymentResponseBillingContact.md) |  | [optional] 
**referenceTransactionId** | **String** |  | [optional] 
**transactionDate** | **String** |  | [optional] 
**merchantId** | **String** |  | [optional] 
**ipAddress** | **String** |  | [optional] 
**operationType** | **String** |  | [optional] 
**channelType** | **String** |  | [optional] 
**processMethod** | **String** |  | [optional] 
**paymentType** | **String** |  | [optional] 
**paymentCategory** | **String** |  | [optional] 
**processorName** | **String** |  | [optional] 
**tenderInfo** | [**TransactionDetailResponseTenderInfo**](TransactionDetailResponseTenderInfo.md) |  | [optional] 
**referenceCustomerId** | **String** |  | [optional] 
**invoiceNo** | **String** |  | [optional] 
**referenceNo** | **String** |  | [optional] 
**remarks** | **String** |  | [optional] 
**terminalId** | **String** |  | [optional] 
**transactionStatus** | **String** |  | [optional] 
**previousTransactionStatus** | **String** |  | [optional] 
**transactionResult** | [**TransactionPaymentResponseTransactionResult**](TransactionPaymentResponseTransactionResult.md) |  | [optional] 
**invoiceId** | **String** |  | [optional] 
**tokenLinkId** | **String** |  | [optional] 
**paymentLinkId** | **String** |  | [optional] 
**additionalFields** | **String** |  | [optional] 
**settlementDate** | **String** |  | [optional] 
**issuer** | **String** |  | [optional] 
**merchantName** | **String** |  | [optional] 
**merchantDBAName** | **String** |  | [optional] 
**splits** | [**[TransactionDetailResponseSplitsInner]**](TransactionDetailResponseSplitsInner.md) |  | [optional] 
**paymentDescription** | **String** |  | [optional] 
**refundTransactions** | [**TransactionPaymentResponseRefundTransactions**](TransactionPaymentResponseRefundTransactions.md) |  | [optional] 
**totalRefundAmount** | **Number** |  | [optional] 
**remainingAmount** | **Number** |  | [optional] 
**chargebackReason** | **String** |  | [optional] 
**chargebackReasonCode** | **String** |  | [optional] 
**chargebackDateTime** | **String** |  | [optional] 
**subTotalAmount** | **Number** |  | [optional] 
**companyName** | **String** |  | [optional] 
**apiVersion** | **String** |  | [optional] 
**chargeBackAmount** | **Number** |  | [optional] 
**suppressTechnologyFee** | **Boolean** |  | [optional] 
**isPremiumFinancier** | **Boolean** |  | [optional] 
**pfr** | [**PaymentIntentRequestPfr**](PaymentIntentRequestPfr.md) |  | [optional] 



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





## Enum: PaymentTypeEnum


* `None` (value: `"None"`)

* `AnytimePayment` (value: `"AnytimePayment"`)

* `SubDomain` (value: `"SubDomain"`)

* `PaymentIntent` (value: `"PaymentIntent"`)

* `PaymentLink` (value: `"PaymentLink"`)

* `OpenPayment` (value: `"OpenPayment"`)

* `TokenLink` (value: `"TokenLink"`)





## Enum: PaymentCategoryEnum


* `None` (value: `"None"`)

* `MerchantPayment` (value: `"MerchantPayment"`)

* `MPIPD` (value: `"MPIPD"`)

* `MPIPI` (value: `"MPIPI"`)

* `PFD` (value: `"PFD"`)

* `PFI` (value: `"PFI"`)





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




