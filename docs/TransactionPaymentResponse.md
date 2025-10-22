# SecureApi.TransactionPaymentResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transactionId** | **String** |  | [optional] 
**transactionCode** | **String** |  | [optional] 
**billingContact** | [**TransactionPaymentResponseBillingContact**](TransactionPaymentResponseBillingContact.md) |  | [optional] 
**transactionDate** | **String** |  | [optional] 
**merchantId** | **String** |  | [optional] 
**ipAddress** | **String** |  | [optional] 
**channelType** | **String** |  | [optional] 
**processMethod** | **String** |  | [optional] 
**processorName** | **String** |  | [optional] 
**transactionOrigin** | **String** |  | [optional] 
**refundOrigin** | [**TransactionPaymentResponseRefundOrigin**](TransactionPaymentResponseRefundOrigin.md) |  | [optional] 
**achTenderInfo** | [**TransactionPaymentResponseAchTenderInfo**](TransactionPaymentResponseAchTenderInfo.md) |  | [optional] 
**ccTenderInfo** | [**TransactionPaymentResponseCcTenderInfo**](TransactionPaymentResponseCcTenderInfo.md) |  | [optional] 
**debitCardTenderInfo** | [**TransactionPaymentResponseCcTenderInfo**](TransactionPaymentResponseCcTenderInfo.md) |  | [optional] 
**referenceCustomerId** | **String** |  | [optional] 
**invoiceNo** | **String** |  | [optional] 
**referenceNo** | **String** |  | [optional] 
**remarks** | **String** |  | [optional] 
**terminalId** | **String** |  | [optional] 
**transactionStatus** | **String** |  | [optional] 
**transactionResult** | [**TransactionPaymentResponseTransactionResult**](TransactionPaymentResponseTransactionResult.md) |  | [optional] 
**invoiceId** | **String** |  | [optional] 
**paymentLinkId** | **String** |  | [optional] 
**additionalFields** | **String** |  | [optional] 
**settlementDate** | **String** |  | [optional] 
**issuer** | **String** |  | [optional] 
**paymentType** | **String** |  | [optional] 
**paymentCategory** | **String** |  | [optional] 
**transactionEntitySplitResponses** | [**[TransactionPaymentResponseTransactionEntitySplitResponsesInner]**](TransactionPaymentResponseTransactionEntitySplitResponsesInner.md) |  | [optional] 
**paymentDescription** | **String** |  | [optional] 
**refundTransactions** | [**TransactionPaymentResponseRefundTransactions**](TransactionPaymentResponseRefundTransactions.md) |  | [optional] 
**chargebackTargetAccount** | **String** |  | [optional] 
**userId** | **String** |  | [optional] 
**userName** | **String** |  | [optional] 
**chargeBackAmount** | **Number** |  | [optional] 
**suppressTechnologyFee** | **Boolean** |  | [optional] 



## Enum: ChannelTypeEnum


* `NotDefined` (value: `"NotDefined"`)

* `ACH` (value: `"ACH"`)

* `CreditCard` (value: `"CreditCard"`)

* `DebitCard` (value: `"DebitCard"`)





## Enum: ProcessMethodEnum


* `ACH` (value: `"ACH"`)

* `CardNotPresent` (value: `"CardNotPresent"`)





## Enum: TransactionOriginEnum


* `WebForm` (value: `"WebForm"`)

* `PaymentIntent` (value: `"PaymentIntent"`)





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

* `None` (value: `"None"`)

* `Unknown` (value: `"Unknown"`)





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




