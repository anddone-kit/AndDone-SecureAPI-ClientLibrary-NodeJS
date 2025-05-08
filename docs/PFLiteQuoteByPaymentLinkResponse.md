# SecureApi.PFLiteQuoteByPaymentLinkResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier of the quote | [optional] 
**quoteKey** | **String** | Key for the quote | [optional] 
**pfType** | **String** | Type of premium finance | [optional] 
**isEndorsement** | **Boolean** | Indicates if it is an endorsement | [optional] 
**merchantId** | **String** | Identifier of the merchant | [optional] 
**programId** | **Number** | Identifier of the program | [optional] 
**paymentLinkId** | **String** | Identifier of the payment link | [optional] 
**accountNumber** | **String** | Account number | [optional] 
**quoteStatus** | **String** | The status of the quote. | [optional] 
**policies** | [**[PFLiteQuoteByPaymentLinkResponsePoliciesInner]**](PFLiteQuoteByPaymentLinkResponsePoliciesInner.md) | List of policies associated with the quote | [optional] 
**isActive** | **Boolean** | Indicates if the quote is active | [optional] [default to true]
**premium** | **Number** | Premium amount | [optional] 
**additionalFees** | **Number** | Additional fees | [optional] 
**downAmount** | **Number** | Down payment amount | [optional] 
**tax** | **Number** |  | [optional] 
**brokerFee** | **Number** |  | [optional] 
**amountFinanced** | **Number** | Amount financed | [optional] 
**financeCharge** | **Number** | Finance charge | [optional] 
**totalPayments** | **Number** | Total payments | [optional] 
**paymentAmount** | **Number** | Payment amount | [optional] 
**docStamp** | **Number** | Document stamp | [optional] 
**firstDueDate** | **String** | First due date | [optional] 
**apr** | **Number** | Annual percentage rate | [optional] 
**installments** | **Number** | Number of installments | [optional] 
**batchId** | **String** | Batch identifier | [optional] 
**paymentsRetained** | **Number** | Number of payments retained | [optional] 
**paymentRetainedAmount** | **Number** | Amount retained from payments | [optional] 
**retailAgentRegisterLoginURL** | **String** | URL for retail agent registration/login | [optional] 
**insuredName** | **String** | Name of the insured | [optional] 
**isEsignPFA** | **Boolean** | Indicates if e-signature for PFA is required | [optional] 
**nextPaymentDueDate** | **String** | Next payment due date | [optional] 
**lastPaymentDate** | **String** | Last payment date | [optional] 
**isDownPaymentRequired** | **Boolean** | Indicates if down payment is required | [optional] 
**isEsignRequired** | **Boolean** | Indicates if e-signature is required | [optional] 
**isDeleted** | **Boolean** | Indicates if the quote is deleted | [optional] 
**createdOn** | **String** | Creation date and time | [optional] 
**createdBy** | **String** | Creator of the quote | [optional] 
**modifiedOn** | **String** | Modification date and time | [optional] 
**modifiedBy** | **String** | Modifier of the quote | [optional] 
**unSignPFA** | **String** | Un-signed PFA document | [optional] 
**signPFA** | **String** | Signed PFA document | [optional] 



## Enum: QuoteStatusEnum


* `None` (value: `"None"`)

* `Created` (value: `"Created"`)

* `ESigned` (value: `"ESigned"`)

* `SentForBooking` (value: `"SentForBooking"`)

* `Booked` (value: `"Booked"`)

* `AccountCreated` (value: `"AccountCreated"`)

* `Expired` (value: `"Expired"`)

* `EndorsementCreated` (value: `"EndorsementCreated"`)

* `EndorsementESigned` (value: `"EndorsementESigned"`)

* `EndorsementCompleted` (value: `"EndorsementCompleted"`)

* `Drafted` (value: `"Drafted"`)

* `PaidInFull` (value: `"PaidInFull"`)




