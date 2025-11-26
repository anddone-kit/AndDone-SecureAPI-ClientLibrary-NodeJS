# SecureApi.QuoteResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The unique identifier for the quote. | [optional] 
**quoteKey** | **String** | The key associated with the quote. | [optional] 
**pFType** | **String** | The type of premium finance. | [optional] 
**isEndorsement** | **Boolean** | Indicates if the quote is an endorsement. | [optional] 
**merchantId** | **String** | The ID of the merchant. | [optional] 
**programId** | **Number** | The ID of the program. | [optional] 
**programName** | **String** | The name of the program. | [optional] 
**paymentIntentId** | **String** | The ID of the payment intent. | [optional] 
**accountNumber** | **String** | The account number. | [optional] 
**quoteStatus** | **String** | The status of the quote. | [optional] 
**isActive** | **Boolean** | Indicates if the quote is active. | [optional] [default to true]
**premium** | **Number** | The premium amount. | [optional] 
**tax** | **Number** |  | [optional] 
**additionalFees** | **Number** | Additional fees associated with the quote. | [optional] 
**brokerFee** | **Number** | broker fees associated with the quote. | [optional] 
**downAmount** | **Number** | The down payment amount. | [optional] 
**amountFinanced** | **Number** | The amount financed. | [optional] 
**financeCharge** | **Number** | The finance charge. | [optional] 
**totalPayments** | **Number** | The total payments. | [optional] 
**paymentAmount** | **Number** | The payment amount. | [optional] 
**totalAmount** | **Number** | Total amount. | [optional] 
**docStamp** | **Number** | The document stamp. | [optional] 
**firstDueDate** | **String** | The first due date. | [optional] 
**apr** | **Number** | The annual percentage rate (APR). | [optional] 
**installments** | **Number** | The number of installments. | [optional] 
**batchId** | **String** | The batch ID. | [optional] 
**autopayStatus** | **String** | The autopayStatus. | [optional] 
**paymentsRetained** | **Number** | The number of payments retained. | [optional] 
**paymentRetainedAmount** | **Number** | The amount retained from the payment. | [optional] 
**retailAgentRegisterLoginURL** | **String** | The URL for the retail agent register login. | [optional] 
**insuredName** | **String** | The name of the insured. | [optional] 
**isEsignPFA** | **Boolean** | Indicates if eSign is required for the PFA. | [optional] 
**nextPaymentDueDate** | **String** | The next payment due date. | [optional] 
**lastPaymentDate** | **String** | The last payment date. | [optional] 
**isDownPaymentRequired** | **Boolean** | Indicates if a down payment is required. | [optional] 
**isEsignRequired** | **Boolean** | Indicates if eSign is required. | [optional] 
**isDeleted** | **Boolean** | Indicates if the quote is deleted. | [optional] 
**offerAutoPay** | **Boolean** | The OfferAutoPay Status. | [optional] 
**createdOn** | **String** | The date when the quote was created. | [optional] 
**createdBy** | **String** | The user who created the quote. | [optional] 
**modifiedOn** | **String** | The date when the quote was last modified. | [optional] 
**modifiedBy** | **String** | The user who last modified the quote. | [optional] 
**unSignPFA** | **String** | The unsigned PFA document. | [optional] 
**signPFA** | **String** | The signed PFA document. | [optional] 



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




