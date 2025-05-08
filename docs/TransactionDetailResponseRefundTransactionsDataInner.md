# SecureApi.TransactionDetailResponseRefundTransactionsDataInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transactionId** | **String** |  | [optional] 
**maskedMerchantId** | **String** |  | [optional] 
**ipAddress** | **String** |  | [optional] 
**transactionDate** | **String** |  | [optional] 
**operationType** | **String** |  | [optional] 
**channelType** | **String** |  | [optional] 
**processMethod** | **String** |  | [optional] 
**isDebit** | **Boolean** |  | [optional] 
**referenceTransactionId** | **String** |  | [optional] 
**referenceCustomerId** | **Number** |  | [optional] 
**maskedReferenceCustomerId** | **String** |  | [optional] 
**customerAccountId** | **Number** |  | [optional] 
**maskedCustomerAccountId** | **String** |  | [optional] 
**recurringId** | **Number** |  | [optional] 
**maskedRecurringId** | **String** |  | [optional] 
**batchId** | **Number** |  | [optional] 
**transactionStatus** | **String** |  | [optional] 
**settlementDate** | **String** |  | [optional] 
**authCode** | **String** |  | [optional] 
**cardNumber** | **String** |  | [optional] 
**accountNumber** | **String** |  | [optional] 
**binNumber** | **String** |  | [optional] 
**chequeNumber** | **String** |  | [optional] 
**routingNumber** | **String** |  | [optional] 
**nameOnCheckOrCard** | **String** |  | [optional] 
**accountHolderName** | **String** |  | [optional] 
**accountCategory** | **String** |  | [optional] 
**trainingMode** | **Boolean** |  | [optional] 
**amount** | **Number** |  | [optional] 
**tipAmount** | **Number** |  | [optional] 
**convenienceAmount** | **Number** |  | [optional] 
**captureAmount** | **Number** |  | [optional] 
**taxPercent** | **Number** |  | [optional] 
**taxAmount** | **Number** |  | [optional] 
**cardType** | **String** |  | [optional] 
**createdOn** | **String** |  | [optional] 
**createdBy** | **String** |  | [optional] 
**modifiedOn** | **String** |  | [optional] 
**modifiedBy** | **String** |  | [optional] 
**customerName** | **String** |  | [optional] 
**partnerId** | **Number** |  | [optional] 
**maskedPartnerId** | **String** |  | [optional] 
**partnerName** | **String** |  | [optional] 
**orderId** | **Number** |  | [optional] 
**maskedOrderId** | **String** |  | [optional] 
**invoiceId** | **Number** |  | [optional] 
**maskedInvoiceId** | **String** |  | [optional] 
**paymentLinkId** | **Number** |  | [optional] 
**maskedPaymentLinkId** | **String** |  | [optional] 
**referenceNo** | **String** |  | [optional] 
**processorName** | **String** |  | [optional] 
**processorDisplayName** | **String** |  | [optional] 
**processorCode** | **String** |  | [optional] 
**verification2Code** | **String** |  | [optional] 
**transactionOrigin** | **String** |  | [optional] 
**previousTransactionStatus** | **String** |  | [optional] 
**traceNumber** | **String** |  | [optional] 
**merchantReference** | **String** |  | [optional] 
**additionaFields** | **String** |  | [optional] 
**adjustmentValue** | **Number** |  | [optional] 
**adjustmentFixedValue** | **Number** |  | [optional] 
**adjustmentAmount** | **Number** |  | [optional] 
**adjustmentDisplayName** | **String** |  | [optional] 
**adjustmentDescriptorMessage** | **String** |  | [optional] 
**paymentAdjustmentType** | **String** |  | [optional] 
**commissionType** | **String** |  | [optional] 
**commissionValue** | **Number** |  | [optional] 
**commissionFixedValue** | **Number** |  | [optional] 
**accountToken** | **String** |  | [optional] 
**paymentType** | **String** |  | [optional] 
**paymentCategory** | **String** |  | [optional] 
**refundReason** | **String** |  | [optional] 
**refundDetail** | **String** |  | [optional] 
**refundType** | **String** |  | [optional] 



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





## Enum: AccountCategoryEnum


* `Unknown` (value: `"Unknown"`)

* `Personal` (value: `"Personal"`)

* `Business` (value: `"Business"`)





## Enum: TransactionOriginEnum


* `Terminal` (value: `"Terminal"`)

* `VirtualTerminal` (value: `"VirtualTerminal"`)

* `WebForm` (value: `"WebForm"`)

* `API` (value: `"API"`)

* `Schedule` (value: `"Schedule"`)

* `Batch` (value: `"Batch"`)

* `PaymentIntent` (value: `"PaymentIntent"`)





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





## Enum: PaymentAdjustmentTypeEnum


* `None` (value: `"None"`)

* `CashIncentive` (value: `"CashIncentive"`)

* `Surcharge` (value: `"Surcharge"`)

* `ConvenienceFee` (value: `"ConvenienceFee"`)

* `CashDiscount` (value: `"CashDiscount"`)





## Enum: CommissionTypeEnum


* `Fixed` (value: `"Fixed"`)

* `Percentage` (value: `"Percentage"`)





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





## Enum: RefundTypeEnum


* `Partial` (value: `"Partial"`)

* `Full` (value: `"Full"`)




