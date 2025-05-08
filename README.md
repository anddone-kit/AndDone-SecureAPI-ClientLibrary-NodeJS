# AndDone Client Library - Node.js

This client library integrates with AndDone's secure APIs.

Please see our developer documentation & API Explorer, linked below, for detailed instructions on how to integrate this into your systems.

**Secure API Node.js Client**

This Node.js SDK is an auto-generated client for the AndDone Secure API, built using the [OpenAPI Generator](https://openapi-generator.tech).

* **API version**: 2.3
* **Package version**: 2.3
* **Generator version**: 7.9.0
* **Build package**: `org.openapitools.codegen.languages.JavascriptClientCodegen`
* **Developer Documentation**: [DevDocs](https://docs.anddone.com/)
* **API Explorer**: [AndDone API Explorer](https://docs.anddone.com/explorer/)

---

## Table of Contents

* [Requirements](#requirements)
* [Installation](#installation)
* [Configuration](#configuration)
* [Quickstart](#quickstart)
* [API Endpoints](#api-endpoints)
* [Models](#models)
* [Authorization](#authorization)
* [Support & Versioning](#support--versioning)

---

## Requirements

* **Node.js v18+**
* Access to **AndDone Merchant Portal** for API keys.

---

## Installation

Install via **npm**:

```bash
npm install secure_api --save
```

Or, for local development:

```bash
npm install
npm run build
```

If you want to link this library locally:

```bash
npm link
# in your consuming project
npm link secure_api
```

---

## Configuration

1. **Retrieve Developer Credentials:**

   1. Log in to AndDone Merchant Portal:

      * **UAT**: [https://portal.uat.anddone.com](https://portal.uat.anddone.com)
      * **Production**: [https://portal.anddone.com](https://portal.anddone.com)
   2. Go to **Developer → API Keys** in the left menu.
   3. Copy:

      * `xApiKey` (API Key)
      * `xAppKey` (App Key)

2. **Determine Your Origin:**
   The `origin` is your public IP address.
   Find it by searching **"what's my IP"** in Google or visiting [https://www.whatsmyip.org](https://www.whatsmyip.org).

   * Contact AndDone support to ensure your origin IP is registered.
   * Email: [support@anddone.com](mailto:support@anddone.com)

3. **Optional: Create a Configuration File:**
   Rename `config.example.json` to `config.json` and fill it with your values:

   ```json
   {
     "xApiKey": "YOUR_API_KEY",
     "xAppKey": "YOUR_APP_KEY",
     "xVersion": "2.3",
     "origin": "YOUR_IP_ADDRESS"
   }
   ```

---

## Quickstart

Here’s a minimal working example to call the **Secure Create Payment Intent API**:

```javascript
import expect from 'expect.js';
import SecureEmbeddedPremiumFinanceApi from '../src/api/SecureEmbeddedPremiumFinanceApi.js';
const fs = require('fs');

fs.readFile('./config.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading JSON file:', err);
        return;
    }

    try {
        const jsonData = JSON.parse(data);
    } catch (parseError) {
        console.error('Error parsing JSON:', parseError);
    }
});

var xApiKey = jsonData.xApiKey;
var xAppKey = jsonData.xAppKey;
var xVersion = jsonData.xVersion;
var origin = jsonData.origin;

let postBody = {
  "category": "FIRE",
  "newPolicyNumber": "1256",
  "premium": 9000,
  "quoteKey": 22857791
};

let api_instance = new SecureEmbeddedPremiumFinanceApi();

api_instance.secureEpfMerchantsQuotesPolicyPut(xApiKey, xAppKey, xVersion, origin, postBody, (result) => {console.log('API response:', result);});
```

---

## API Endpoints

All URIs are relative to:

* **UAT**: `https://api.uat.anddone.com`
* **Production**: `https://api.anddone.com`

<details>
  <summary>Click to view all endpoints</summary>

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*SecureApi.SecureEmbeddedPremiumFinanceApi* | [**secureEpfMerchantsQuotesPolicyPut**](docs/SecureEmbeddedPremiumFinanceApi.md#secureEpfMerchantsQuotesPolicyPut) | **PUT** /secure/epf/merchants/quotes/policy | This API is will update the policy number
*SecureApi.SecureEmbeddedPremiumFinanceApi* | [**secureEpfQuotesBookingPut**](docs/SecureEmbeddedPremiumFinanceApi.md#secureEpfQuotesBookingPut) | **PUT** /secure/epf/quotes/booking | This API will update PFA to book a quote.
*SecureApi.SecureEmbeddedPremiumFinanceApi* | [**secureEpfQuotesCaptureesignPut**](docs/SecureEmbeddedPremiumFinanceApi.md#secureEpfQuotesCaptureesignPut) | **PUT** /secure/epf/quotes/captureesign | This API will eSign the pfa with insured name.
*SecureApi.SecureEmbeddedPremiumFinanceApi* | [**secureEpfQuotesGeneratePost**](docs/SecureEmbeddedPremiumFinanceApi.md#secureEpfQuotesGeneratePost) | **POST** /secure/epf/quotes/generate | This API is used to Generate Quotes
*SecureApi.SecureEmbeddedPremiumFinanceApi* | [**secureEpfQuotesIntentPost**](docs/SecureEmbeddedPremiumFinanceApi.md#secureEpfQuotesIntentPost) | **POST** /secure/epf/quotes/intent | This API will return quotes created againsts a payment intent.
*SecureApi.SecureEmbeddedPremiumFinanceApi* | [**secureEpfQuotesPost**](docs/SecureEmbeddedPremiumFinanceApi.md#secureEpfQuotesPost) | **POST** /secure/epf/quotes | This API will return quote by QuoteKey.
*SecureApi.SecureEmbeddedPremiumFinanceApi* | [**secureEpfRetrievepfaPost**](docs/SecureEmbeddedPremiumFinanceApi.md#secureEpfRetrievepfaPost) | **POST** /secure/epf/retrievepfa | This API will return PFA for given quoteKey.
*SecureApi.SecureEmbeddedPremiumFinanceEndorsementsApi* | [**secureEpfEndorsementsPost**](docs/SecureEmbeddedPremiumFinanceEndorsementsApi.md#secureEpfEndorsementsPost) | **POST** /secure/epf/endorsements | This API will do a check of eligibility of account
*SecureApi.SecureEmbeddedPremiumFinanceEndorsementsApi* | [**secureEpfQuoteEndorsementBookingPut**](docs/SecureEmbeddedPremiumFinanceEndorsementsApi.md#secureEpfQuoteEndorsementBookingPut) | **PUT** /secure/epf/quote/endorsement/booking | This API will update PFA to book a endorsement quote.
*SecureApi.SecureEmbeddedPremiumFinanceEndorsementsApi* | [**secureEpfQuoteEndorsementPost**](docs/SecureEmbeddedPremiumFinanceEndorsementsApi.md#secureEpfQuoteEndorsementPost) | **POST** /secure/epf/quote/endorsement | This API will do return a quote for an existing policy or new policy for an existing account
*SecureApi.SecureOrumApi* | [**secureBankaccountsDetailsPost**](docs/SecureOrumApi.md#secureBankaccountsDetailsPost) | **POST** /secure/bankaccounts/details | This API will request for verified bank account.
*SecureApi.SecureOrumApi* | [**secureBankaccountsVerifyPost**](docs/SecureOrumApi.md#secureBankaccountsVerifyPost) | **POST** /secure/bankaccounts/verify | This API will request for account verification.
*SecureApi.SecureOutboundPaymentsApi* | [**vendorapiSecureOutboundPaymentsTimelinesPost**](docs/SecureOutboundPaymentsApi.md#vendorapiSecureOutboundPaymentsTimelinesPost) | **POST** /vendorapi/secure/outboundPayments/timelines | This API gets outbound payment timelines
*SecureApi.SecureOutboundPaymentsApi* | [**vendorapiSecureOutboundpaymentsCancelPost**](docs/SecureOutboundPaymentsApi.md#vendorapiSecureOutboundpaymentsCancelPost) | **POST** /vendorapi/secure/outboundpayments/cancel | This API cancel outbound payment request
*SecureApi.SecureOutboundPaymentsApi* | [**vendorapiSecureOutboundpaymentsDetailPost**](docs/SecureOutboundPaymentsApi.md#vendorapiSecureOutboundpaymentsDetailPost) | **POST** /vendorapi/secure/outboundpayments/detail | This API fetch outbound payment by paymentId
*SecureApi.SecureOutboundPaymentsApi* | [**vendorapiSecureOutboundpaymentsPost**](docs/SecureOutboundPaymentsApi.md#vendorapiSecureOutboundpaymentsPost) | **POST** /vendorapi/secure/outboundpayments | This API creates outbound payment request
*SecureApi.SecureOutboundPaymentsApi* | [**vendorapiSecureOutboundpaymentsSearchPost**](docs/SecureOutboundPaymentsApi.md#vendorapiSecureOutboundpaymentsSearchPost) | **POST** /vendorapi/secure/outboundpayments/search | This API gets all outbound payment
*SecureApi.SecurePaymentBatchingApi* | [**secureBatchesDetailsPost**](docs/SecurePaymentBatchingApi.md#secureBatchesDetailsPost) | **POST** /secure/batches/details | This API is used for getting Secure Payment Batch Details
*SecureApi.SecurePaymentBatchingApi* | [**secureBatchesExecutePost**](docs/SecurePaymentBatchingApi.md#secureBatchesExecutePost) | **POST** /secure/batches/execute | This API execute on-demand batch transaction.
*SecureApi.SecurePaymentBatchingApi* | [**secureBatchesPost**](docs/SecurePaymentBatchingApi.md#secureBatchesPost) | **POST** /secure/batches | This API is used for getting Secure Payment Batches
*SecureApi.SecurePaymentBatchingApi* | [**secureBatchesTimelinesPost**](docs/SecurePaymentBatchingApi.md#secureBatchesTimelinesPost) | **POST** /secure/batches/timelines | This API will returns batch timeline.
*SecureApi.SecurePaymentBatchingApi* | [**secureBatchesTransactionsCancelPost**](docs/SecurePaymentBatchingApi.md#secureBatchesTransactionsCancelPost) | **POST** /secure/batches/transactions/cancel | This API cancels transactions from an active batch.
*SecureApi.SecurePaymentIntentApi* | [**securePaymentintentsExpirationsPost**](docs/SecurePaymentIntentApi.md#securePaymentintentsExpirationsPost) | **POST** /secure/paymentintents/expirations | This API expires the payment Intent or link.
*SecureApi.SecurePaymentIntentApi* | [**securePaymentintentsPost**](docs/SecurePaymentIntentApi.md#securePaymentintentsPost) | **POST** /secure/paymentintents | This API is use to create Secure payment Intent.
*SecureApi.SecurePaymentLinksApi* | [**securePaymentlinksDetailsPost**](docs/SecurePaymentLinksApi.md#securePaymentlinksDetailsPost) | **POST** /secure/paymentlinks/details | This API is used for getting Payment Links by PaymentLink ID
*SecureApi.SecurePaymentLinksApi* | [**securePaymentlinksExpirationsPost**](docs/SecurePaymentLinksApi.md#securePaymentlinksExpirationsPost) | **POST** /secure/paymentlinks/expirations | This API is used for to set expired payment link
*SecureApi.SecurePaymentLinksApi* | [**securePaymentlinksIdPut**](docs/SecurePaymentLinksApi.md#securePaymentlinksIdPut) | **PUT** /secure/paymentlinks/{id} | This API is used to update Payment Links
*SecureApi.SecurePaymentLinksApi* | [**securePaymentlinksPost**](docs/SecurePaymentLinksApi.md#securePaymentlinksPost) | **POST** /secure/paymentlinks | This API is used to create Payment Links
*SecureApi.SecurePaymentsApi* | [**securePaymentsExportPost**](docs/SecurePaymentsApi.md#securePaymentsExportPost) | **POST** /secure/payments/export | This API gets Secure payment by search criteria for the merchant.
*SecureApi.SecurePaymentsApi* | [**securePaymentsPost**](docs/SecurePaymentsApi.md#securePaymentsPost) | **POST** /secure/payments | This API posts new Secure payment request for the merchant.
*SecureApi.SecurePaymentsApi* | [**securePaymentsSearchPost**](docs/SecurePaymentsApi.md#securePaymentsSearchPost) | **POST** /secure/payments/search | This API gets Secure payment by search criteria for the merchant.
*SecureApi.SecurePaymentsApi* | [**securePaymentsdetailsPost**](docs/SecurePaymentsApi.md#securePaymentsdetailsPost) | **POST** /secure/paymentsdetails | This API is used for getting details of Payments
*SecureApi.SecurePremiumFinanceLiteApi* | [**secureEpfliteQuotesGeneratePost**](docs/SecurePremiumFinanceLiteApi.md#secureEpfliteQuotesGeneratePost) | **POST** /secure/epflite/quotes/generate | This API is used to generate the quote from the provider.
*SecureApi.SecurePremiumFinanceLiteApi* | [**secureEpfliteQuotesLinkPost**](docs/SecurePremiumFinanceLiteApi.md#secureEpfliteQuotesLinkPost) | **POST** /secure/epflite/quotes/link | This API will return quotes created againsts a payment link.
*SecureApi.SecurePremiumFinanceLiteApi* | [**secureEpfliteQuotesPaymentlinksPost**](docs/SecurePremiumFinanceLiteApi.md#secureEpfliteQuotesPaymentlinksPost) | **POST** /secure/epflite/quotes/paymentlinks | This API is used to create Payment Links
*SecureApi.SecureRefundsApi* | [**secureRefundsEligibilityPost**](docs/SecureRefundsApi.md#secureRefundsEligibilityPost) | **POST** /secure/refunds/eligibility | This API return refund eligibility of a transaction.
*SecureApi.SecureRefundsApi* | [**secureRefundsPost**](docs/SecureRefundsApi.md#secureRefundsPost) | **POST** /secure/refunds | This API will refund a transaction which has been settled by the processor.
*SecureApi.SecureReportsApi* | [**secureReportsDownloadsPost**](docs/SecureReportsApi.md#secureReportsDownloadsPost) | **POST** /secure/reports/downloads | This API will add system report.
*SecureApi.SecureTokenLinksApi* | [**secureTokenlinksDetailsPost**](docs/SecureTokenLinksApi.md#secureTokenlinksDetailsPost) | **POST** /secure/tokenlinks/details | This API is used for getting Token Links by TokenLink ID
*SecureApi.SecureTokenLinksApi* | [**secureTokenlinksExpirationsPost**](docs/SecureTokenLinksApi.md#secureTokenlinksExpirationsPost) | **POST** /secure/tokenlinks/expirations | This API expires the token link.
*SecureApi.SecureTokenLinksApi* | [**secureTokenlinksListPost**](docs/SecureTokenLinksApi.md#secureTokenlinksListPost) | **POST** /secure/tokenlinks/list | This API is used for getting all Token Links for Merchant
*SecureApi.SecureTokenLinksApi* | [**secureTokenlinksPost**](docs/SecureTokenLinksApi.md#secureTokenlinksPost) | **POST** /secure/tokenlinks | This API is use to create Secure Token Links
*SecureApi.SecureTokenLinksApi* | [**secureTokenlinksPut**](docs/SecureTokenLinksApi.md#secureTokenlinksPut) | **PUT** /secure/tokenlinks | This API will update the expireIn and paymentType of Token Link.
*SecureApi.SecureTokenManagementApi* | [**secureTokensActivationsDelete**](docs/SecureTokenManagementApi.md#secureTokensActivationsDelete) | **DELETE** /secure/tokens/activations | This API is used for deactivating merchant token securely
*SecureApi.SecureTokenManagementApi* | [**secureTokensDetailsPost**](docs/SecureTokenManagementApi.md#secureTokensDetailsPost) | **POST** /secure/tokens/details | This API is used for getting details of Merchant Token by Token link.
*SecureApi.SecureVendorManagementApi* | [**vendorapiSecureMerchantsVendorsDeletePost**](docs/SecureVendorManagementApi.md#vendorapiSecureMerchantsVendorsDeletePost) | **POST** /vendorapi/secure/merchants/vendors/delete | This API deletes vendor into system
*SecureApi.SecureVendorManagementApi* | [**vendorapiSecureMerchantsVendorsDetailsPost**](docs/SecureVendorManagementApi.md#vendorapiSecureMerchantsVendorsDetailsPost) | **POST** /vendorapi/secure/merchants/vendors/details | This API gets details of particular vendor
*SecureApi.SecureVendorManagementApi* | [**vendorapiSecureMerchantsVendorsEditPost**](docs/SecureVendorManagementApi.md#vendorapiSecureMerchantsVendorsEditPost) | **POST** /vendorapi/secure/merchants/vendors/edit | This API Updates the existing vendor
*SecureApi.SecureVendorManagementApi* | [**vendorapiSecureMerchantsVendorsPost**](docs/SecureVendorManagementApi.md#vendorapiSecureMerchantsVendorsPost) | **POST** /vendorapi/secure/merchants/vendors | This API creates vendor into system
*SecureApi.SecureVendorManagementApi* | [**vendorapiSecureMerchantsVendorsSearchPost**](docs/SecureVendorManagementApi.md#vendorapiSecureMerchantsVendorsSearchPost) | **POST** /vendorapi/secure/merchants/vendors/search | This API returns list of all the Vendors of Merchant
*SecureApi.SecureVendorManagementApi* | [**vendorapiSecureMerchantsVendorsSuspendPost**](docs/SecureVendorManagementApi.md#vendorapiSecureMerchantsVendorsSuspendPost) | **POST** /vendorapi/secure/merchants/vendors/suspend | This API suspends vendor into system
*SecureApi.SecureVendorManagementApi* | [**vendorapiSecureMerchantsVendorsTimelinePost**](docs/SecureVendorManagementApi.md#vendorapiSecureMerchantsVendorsTimelinePost) | **POST** /vendorapi/secure/merchants/vendors/timeline | This API gets timeline of particular vendor
*SecureApi.SecureVendorManagementApi* | [**vendorapiSecureMerchantsVendorsUnsuspendPost**](docs/SecureVendorManagementApi.md#vendorapiSecureMerchantsVendorsUnsuspendPost) | **POST** /vendorapi/secure/merchants/vendors/unsuspend | This API unsuspends vendor into system
*SecureApi.SecureVoidsApi* | [**secureCancellationsPost**](docs/SecureVoidsApi.md#secureCancellationsPost) | **POST** /secure/cancellations | This API cancel a transaction.

</details>

---

## Models

<details>
  <summary>Click to view all models</summary>


 - [SecureApi.BankDetailDto](docs/BankDetailDto.md)
 - [SecureApi.CancelPaymentRequestDTO](docs/CancelPaymentRequestDTO.md)
 - [SecureApi.DataDto](docs/DataDto.md)
 - [SecureApi.GetQuoteKeyRequest](docs/GetQuoteKeyRequest.md)
 - [SecureApi.GetQuoteRequest](docs/GetQuoteRequest.md)
 - [SecureApi.HeadingDto](docs/HeadingDto.md)
 - [SecureApi.MerchantTransactionEntityResponse](docs/MerchantTransactionEntityResponse.md)
 - [SecureApi.MerchantTransactionEntityResponseDataInner](docs/MerchantTransactionEntityResponseDataInner.md)
 - [SecureApi.OutboundPaymentTimelineResponseDTOInner](docs/OutboundPaymentTimelineResponseDTOInner.md)
 - [SecureApi.PFCheckEndorsementsRequest](docs/PFCheckEndorsementsRequest.md)
 - [SecureApi.PFCheckEndorsementsResponse](docs/PFCheckEndorsementsResponse.md)
 - [SecureApi.PFCheckEndorsementsResponseItem](docs/PFCheckEndorsementsResponseItem.md)
 - [SecureApi.PFCheckEndorsementsResponseItemPoliciesInner](docs/PFCheckEndorsementsResponseItemPoliciesInner.md)
 - [SecureApi.PFEndorsementRequest](docs/PFEndorsementRequest.md)
 - [SecureApi.PFEndorsementRequestQuote](docs/PFEndorsementRequestQuote.md)
 - [SecureApi.PFEndorsementRequestQuoteAgent](docs/PFEndorsementRequestQuoteAgent.md)
 - [SecureApi.PFEndorsementRequestQuoteAgentAddress](docs/PFEndorsementRequestQuoteAgentAddress.md)
 - [SecureApi.PFEndorsementRequestQuoteCommunication](docs/PFEndorsementRequestQuoteCommunication.md)
 - [SecureApi.PFEndorsementRequestQuoteDetails](docs/PFEndorsementRequestQuoteDetails.md)
 - [SecureApi.PFEndorsementRequestQuoteDetailsRecurringACH](docs/PFEndorsementRequestQuoteDetailsRecurringACH.md)
 - [SecureApi.PFEndorsementRequestQuoteInsured](docs/PFEndorsementRequestQuoteInsured.md)
 - [SecureApi.PFEndorsementRequestQuoteInsuredAddress](docs/PFEndorsementRequestQuoteInsuredAddress.md)
 - [SecureApi.PFEndorsementRequestQuotePoliciesInner](docs/PFEndorsementRequestQuotePoliciesInner.md)
 - [SecureApi.PFEndorsementRequestQuotePoliciesInnerCompany](docs/PFEndorsementRequestQuotePoliciesInnerCompany.md)
 - [SecureApi.PFEndorsementRequestQuotePoliciesInnerGa](docs/PFEndorsementRequestQuotePoliciesInnerGa.md)
 - [SecureApi.PFEndorsementRequestQuotePoliciesInnerPolicyFeeInner](docs/PFEndorsementRequestQuotePoliciesInnerPolicyFeeInner.md)
 - [SecureApi.PFEndorsementRequestQuotePoliciesInnerTotalPayFundingInner](docs/PFEndorsementRequestQuotePoliciesInnerTotalPayFundingInner.md)
 - [SecureApi.PFEndorsementResponse](docs/PFEndorsementResponse.md)
 - [SecureApi.PFEndorsementResponseItem](docs/PFEndorsementResponseItem.md)
 - [SecureApi.PFEndorsementResponseItemPaymentIntent](docs/PFEndorsementResponseItemPaymentIntent.md)
 - [SecureApi.PFEndorsementResponseItemPaymentIntentIntent](docs/PFEndorsementResponseItemPaymentIntentIntent.md)
 - [SecureApi.PFEndorsementResponseItemQuote](docs/PFEndorsementResponseItemQuote.md)
 - [SecureApi.PFEndorsementResponseItemQuoteESignResult](docs/PFEndorsementResponseItemQuoteESignResult.md)
 - [SecureApi.PFGenerateQuoteResponse](docs/PFGenerateQuoteResponse.md)
 - [SecureApi.PFGenerateQuoteResponseItem](docs/PFGenerateQuoteResponseItem.md)
 - [SecureApi.PFGenerateQuoteResponseItemESignResult](docs/PFGenerateQuoteResponseItemESignResult.md)
 - [SecureApi.PFLiteGenerateQuoteResponse](docs/PFLiteGenerateQuoteResponse.md)
 - [SecureApi.PFLiteGenerateQuoteResponseItem](docs/PFLiteGenerateQuoteResponseItem.md)
 - [SecureApi.PFLiteGenerateQuoteResponseItemESignResult](docs/PFLiteGenerateQuoteResponseItemESignResult.md)
 - [SecureApi.PFLiteGetQuoteRequest](docs/PFLiteGetQuoteRequest.md)
 - [SecureApi.PFLitePaymentLinkRequest](docs/PFLitePaymentLinkRequest.md)
 - [SecureApi.PFLitePaymentLinkRequestCallbackParameters](docs/PFLitePaymentLinkRequestCallbackParameters.md)
 - [SecureApi.PFLitePaymentLinkRequestCustomersInner](docs/PFLitePaymentLinkRequestCustomersInner.md)
 - [SecureApi.PFLitePaymentLinkRequestCustomersInnerAddress](docs/PFLitePaymentLinkRequestCustomersInnerAddress.md)
 - [SecureApi.PFLitePaymentLinkRequestReferenceDataListInner](docs/PFLitePaymentLinkRequestReferenceDataListInner.md)
 - [SecureApi.PFLitePaymentLinkRequestSettings](docs/PFLitePaymentLinkRequestSettings.md)
 - [SecureApi.PFLiteQuoteByPaymentLinkResponse](docs/PFLiteQuoteByPaymentLinkResponse.md)
 - [SecureApi.PFLiteQuoteByPaymentLinkResponsePoliciesInner](docs/PFLiteQuoteByPaymentLinkResponsePoliciesInner.md)
 - [SecureApi.PFLiteQuoteByPaymentLinkResponsePoliciesInnerCarrier](docs/PFLiteQuoteByPaymentLinkResponsePoliciesInnerCarrier.md)
 - [SecureApi.PFLiteSecureQuoteRequest](docs/PFLiteSecureQuoteRequest.md)
 - [SecureApi.PFLiteSecureQuoteRequestInsured](docs/PFLiteSecureQuoteRequestInsured.md)
 - [SecureApi.PFLiteSecureQuoteRequestInsuredAddress](docs/PFLiteSecureQuoteRequestInsuredAddress.md)
 - [SecureApi.PFLiteSecureQuoteRequestMerchant](docs/PFLiteSecureQuoteRequestMerchant.md)
 - [SecureApi.PFLiteSecureQuoteRequestPoliciesInner](docs/PFLiteSecureQuoteRequestPoliciesInner.md)
 - [SecureApi.PFLiteSecureQuoteRequestPoliciesInnerCarrier](docs/PFLiteSecureQuoteRequestPoliciesInnerCarrier.md)
 - [SecureApi.PFLiteSecureQuoteRequestProgram](docs/PFLiteSecureQuoteRequestProgram.md)
 - [SecureApi.PFPolicyUpdateRequestDTO](docs/PFPolicyUpdateRequestDTO.md)
 - [SecureApi.PFPolicyUpdateResponse](docs/PFPolicyUpdateResponse.md)
 - [SecureApi.PFQuoteBookingRequest](docs/PFQuoteBookingRequest.md)
 - [SecureApi.PFQuoteEsignRequest](docs/PFQuoteEsignRequest.md)
 - [SecureApi.PFRetrievePFARequest](docs/PFRetrievePFARequest.md)
 - [SecureApi.PFRetrievePFARequestDTO](docs/PFRetrievePFARequestDTO.md)
 - [SecureApi.PFUpdatePFARequestDTO](docs/PFUpdatePFARequestDTO.md)
 - [SecureApi.PFUpdatePFAResponse](docs/PFUpdatePFAResponse.md)
 - [SecureApi.PagePaymentListResponseDTO](docs/PagePaymentListResponseDTO.md)
 - [SecureApi.PagePaymentListResponseDTODataInner](docs/PagePaymentListResponseDTODataInner.md)
 - [SecureApi.PageVendorResponseDTO](docs/PageVendorResponseDTO.md)
 - [SecureApi.PageVendorResponseDTODataInner](docs/PageVendorResponseDTODataInner.md)
 - [SecureApi.PaymentBatchCancellationRequest](docs/PaymentBatchCancellationRequest.md)
 - [SecureApi.PaymentBatchDetailsResponse](docs/PaymentBatchDetailsResponse.md)
 - [SecureApi.PaymentBatchDetailsResponseTransactionDetailsInner](docs/PaymentBatchDetailsResponseTransactionDetailsInner.md)
 - [SecureApi.PaymentBatchEventLogResponse](docs/PaymentBatchEventLogResponse.md)
 - [SecureApi.PaymentBatchResponse](docs/PaymentBatchResponse.md)
 - [SecureApi.PaymentBatchResponseDataInner](docs/PaymentBatchResponseDataInner.md)
 - [SecureApi.PaymentDetailResponseDTO](docs/PaymentDetailResponseDTO.md)
 - [SecureApi.PaymentIntentExpiresResponse](docs/PaymentIntentExpiresResponse.md)
 - [SecureApi.PaymentIntentRequest](docs/PaymentIntentRequest.md)
 - [SecureApi.PaymentIntentRequestCustomersInner](docs/PaymentIntentRequestCustomersInner.md)
 - [SecureApi.PaymentIntentRequestIntent](docs/PaymentIntentRequestIntent.md)
 - [SecureApi.PaymentIntentRequestPfr](docs/PaymentIntentRequestPfr.md)
 - [SecureApi.PaymentIntentRequestReferenceDataListInner](docs/PaymentIntentRequestReferenceDataListInner.md)
 - [SecureApi.PaymentIntentRequestSplitsInner](docs/PaymentIntentRequestSplitsInner.md)
 - [SecureApi.PaymentIntentResponse](docs/PaymentIntentResponse.md)
 - [SecureApi.PaymentIntentResponseCustomersInner](docs/PaymentIntentResponseCustomersInner.md)
 - [SecureApi.PaymentLinkExpiresResponse](docs/PaymentLinkExpiresResponse.md)
 - [SecureApi.PaymentLinkRequest](docs/PaymentLinkRequest.md)
 - [SecureApi.PaymentLinkRequestSettings](docs/PaymentLinkRequestSettings.md)
 - [SecureApi.PaymentLinkRequestSettingsIntent](docs/PaymentLinkRequestSettingsIntent.md)
 - [SecureApi.PaymentLinkResponse](docs/PaymentLinkResponse.md)
 - [SecureApi.PaymentLinkResponseCallbackParameters](docs/PaymentLinkResponseCallbackParameters.md)
 - [SecureApi.PaymentLinkResponseCustomersInner](docs/PaymentLinkResponseCustomersInner.md)
 - [SecureApi.PaymentLinkResponseCustomersInnerAccountsInner](docs/PaymentLinkResponseCustomersInnerAccountsInner.md)
 - [SecureApi.PaymentLinkResponseDisplaySettings](docs/PaymentLinkResponseDisplaySettings.md)
 - [SecureApi.PaymentLinkResponseDisplaySettingsIntent](docs/PaymentLinkResponseDisplaySettingsIntent.md)
 - [SecureApi.PaymentLinkResponseLineItemsInner](docs/PaymentLinkResponseLineItemsInner.md)
 - [SecureApi.PaymentLinkResponsePaymentsInner](docs/PaymentLinkResponsePaymentsInner.md)
 - [SecureApi.PaymentLinkResponseReferenceDataListInner](docs/PaymentLinkResponseReferenceDataListInner.md)
 - [SecureApi.PaymentListResponseDTO](docs/PaymentListResponseDTO.md)
 - [SecureApi.PaymentRequest](docs/PaymentRequest.md)
 - [SecureApi.PaymentRequestDetailDTO](docs/PaymentRequestDetailDTO.md)
 - [SecureApi.PaymentRequestDto](docs/PaymentRequestDto.md)
 - [SecureApi.PaymentRequestDtoData](docs/PaymentRequestDtoData.md)
 - [SecureApi.PaymentRequestDtoDataRemittanceData](docs/PaymentRequestDtoDataRemittanceData.md)
 - [SecureApi.PaymentRequestTenderInfo](docs/PaymentRequestTenderInfo.md)
 - [SecureApi.PaymentResponseDto](docs/PaymentResponseDto.md)
 - [SecureApi.PaymentTimeLineRequestDto](docs/PaymentTimeLineRequestDto.md)
 - [SecureApi.QuoteRequest](docs/QuoteRequest.md)
 - [SecureApi.QuoteRequestAgent](docs/QuoteRequestAgent.md)
 - [SecureApi.QuoteRequestAgentAddress](docs/QuoteRequestAgentAddress.md)
 - [SecureApi.QuoteRequestDetails](docs/QuoteRequestDetails.md)
 - [SecureApi.QuoteRequestInsured](docs/QuoteRequestInsured.md)
 - [SecureApi.QuoteRequestInsuredAddress](docs/QuoteRequestInsuredAddress.md)
 - [SecureApi.QuoteRequestPoliciesInner](docs/QuoteRequestPoliciesInner.md)
 - [SecureApi.QuoteRequestPoliciesInnerCompany](docs/QuoteRequestPoliciesInnerCompany.md)
 - [SecureApi.QuoteRequestPoliciesInnerGa](docs/QuoteRequestPoliciesInnerGa.md)
 - [SecureApi.QuoteRequestPoliciesInnerGaAddress](docs/QuoteRequestPoliciesInnerGaAddress.md)
 - [SecureApi.QuoteResponse](docs/QuoteResponse.md)
 - [SecureApi.RefundEligibility](docs/RefundEligibility.md)
 - [SecureApi.RemittanceDataDto](docs/RemittanceDataDto.md)
 - [SecureApi.ReportDownloadRequest](docs/ReportDownloadRequest.md)
 - [SecureApi.RowDto](docs/RowDto.md)
 - [SecureApi.SecureBatchExecuteRequest](docs/SecureBatchExecuteRequest.md)
 - [SecureApi.SecureCancelledTransactionResponse](docs/SecureCancelledTransactionResponse.md)
 - [SecureApi.SecureMerchantTokenShortResponse](docs/SecureMerchantTokenShortResponse.md)
 - [SecureApi.SecurePaymentBatchDetailsRequest](docs/SecurePaymentBatchDetailsRequest.md)
 - [SecureApi.SecurePaymentDetailsRequest](docs/SecurePaymentDetailsRequest.md)
 - [SecureApi.SecurePaymentLinkRequest](docs/SecurePaymentLinkRequest.md)
 - [SecureApi.SecureTokenLinkByIdResponse](docs/SecureTokenLinkByIdResponse.md)
 - [SecureApi.SecureTokenLinkByIdResponseAccountToken](docs/SecureTokenLinkByIdResponseAccountToken.md)
 - [SecureApi.SecureTokenLinkByIdResponseTimeLineInner](docs/SecureTokenLinkByIdResponseTimeLineInner.md)
 - [SecureApi.SecureTokenLinkExpiredResponse](docs/SecureTokenLinkExpiredResponse.md)
 - [SecureApi.SecureTokenLinkRequest](docs/SecureTokenLinkRequest.md)
 - [SecureApi.SecureTokenLinkResponse](docs/SecureTokenLinkResponse.md)
 - [SecureApi.SecureTokenLinkResponseCustomersInner](docs/SecureTokenLinkResponseCustomersInner.md)
 - [SecureApi.SecureTokenLinkResponseIntent](docs/SecureTokenLinkResponseIntent.md)
 - [SecureApi.SecureTokenLinkUpdateRequest](docs/SecureTokenLinkUpdateRequest.md)
 - [SecureApi.SecureTransactionCancelRequest](docs/SecureTransactionCancelRequest.md)
 - [SecureApi.SecureTransactionDetailDTO](docs/SecureTransactionDetailDTO.md)
 - [SecureApi.SecureTransactionDetailDTOTenderInfo](docs/SecureTransactionDetailDTOTenderInfo.md)
 - [SecureApi.SecureTransactionRefundRequest](docs/SecureTransactionRefundRequest.md)
 - [SecureApi.SecureUpdatePaymentLinkRequest](docs/SecureUpdatePaymentLinkRequest.md)
 - [SecureApi.SecureUpdatePaymentLinkRequestSettings](docs/SecureUpdatePaymentLinkRequestSettings.md)
 - [SecureApi.SecureUpdatePaymentLinkRequestSettingsIntent](docs/SecureUpdatePaymentLinkRequestSettingsIntent.md)
 - [SecureApi.SecureVendorRequestDTO](docs/SecureVendorRequestDTO.md)
 - [SecureApi.SecureVendorResponseDTO](docs/SecureVendorResponseDTO.md)
 - [SecureApi.SecureVendorResponseDTORemittanceAddress](docs/SecureVendorResponseDTORemittanceAddress.md)
 - [SecureApi.SecureVendorStatusRequestDTO](docs/SecureVendorStatusRequestDTO.md)
 - [SecureApi.SecureVendorTimelineRequestDTO](docs/SecureVendorTimelineRequestDTO.md)
 - [SecureApi.SecureVendorUpdateRequestDTO](docs/SecureVendorUpdateRequestDTO.md)
 - [SecureApi.SecureVendorUpdateRequestDTORemittanceAddress](docs/SecureVendorUpdateRequestDTORemittanceAddress.md)
 - [SecureApi.TokenLinkResponse](docs/TokenLinkResponse.md)
 - [SecureApi.TokenLinkResponseDataInner](docs/TokenLinkResponseDataInner.md)
 - [SecureApi.TokenLinkSecureRequest](docs/TokenLinkSecureRequest.md)
 - [SecureApi.TokenLinkSecureRequestCustomersInner](docs/TokenLinkSecureRequestCustomersInner.md)
 - [SecureApi.TokenLinkSecureRequestIntent](docs/TokenLinkSecureRequestIntent.md)
 - [SecureApi.TokenRequest](docs/TokenRequest.md)
 - [SecureApi.TransactionDetailResponse](docs/TransactionDetailResponse.md)
 - [SecureApi.TransactionDetailResponseSplitsInner](docs/TransactionDetailResponseSplitsInner.md)
 - [SecureApi.TransactionDetailResponseTenderInfo](docs/TransactionDetailResponseTenderInfo.md)
 - [SecureApi.TransactionPaymentResponse](docs/TransactionPaymentResponse.md)
 - [SecureApi.TransactionPaymentResponseAchTenderInfo](docs/TransactionPaymentResponseAchTenderInfo.md)
 - [SecureApi.TransactionPaymentResponseBillingContact](docs/TransactionPaymentResponseBillingContact.md)
 - [SecureApi.TransactionPaymentResponseBillingContactAddress](docs/TransactionPaymentResponseBillingContactAddress.md)
 - [SecureApi.TransactionPaymentResponseBillingContactName](docs/TransactionPaymentResponseBillingContactName.md)
 - [SecureApi.TransactionPaymentResponseCcTenderInfo](docs/TransactionPaymentResponseCcTenderInfo.md)
 - [SecureApi.TransactionPaymentResponseRefundTransactions](docs/TransactionPaymentResponseRefundTransactions.md)
 - [SecureApi.TransactionPaymentResponseRefundTransactionsDataInner](docs/TransactionPaymentResponseRefundTransactionsDataInner.md)
 - [SecureApi.TransactionPaymentResponseTransactionEntitySplitResponsesInner](docs/TransactionPaymentResponseTransactionEntitySplitResponsesInner.md)
 - [SecureApi.TransactionPaymentResponseTransactionResult](docs/TransactionPaymentResponseTransactionResult.md)
 - [SecureApi.TransactionRefundEligibilityRequest](docs/TransactionRefundEligibilityRequest.md)
 - [SecureApi.UpdateIntentRequest](docs/UpdateIntentRequest.md)
 - [SecureApi.VendorRequestDTO](docs/VendorRequestDTO.md)
 - [SecureApi.VendorRequestDTOPhysicalAddress](docs/VendorRequestDTOPhysicalAddress.md)
 - [SecureApi.VendorRequestDTORemittanceAddress](docs/VendorRequestDTORemittanceAddress.md)
 - [SecureApi.VendorResponseDTO](docs/VendorResponseDTO.md)
 - [SecureApi.VendorResponseDTORemittanceAddress](docs/VendorResponseDTORemittanceAddress.md)
 - [SecureApi.VendorResponseDTOTemplate](docs/VendorResponseDTOTemplate.md)
 - [SecureApi.VendorResponseDTOVerificationResultsInner](docs/VendorResponseDTOVerificationResultsInner.md)
 - [SecureApi.VendorTimelineResponseListInner](docs/VendorTimelineResponseListInner.md)
 - [SecureApi.VerificationEntityRequest](docs/VerificationEntityRequest.md)
 - [SecureApi.VerifyBankAccountRequest](docs/VerifyBankAccountRequest.md)
 - [SecureApi.VerifyBankAccountRequestBankAccountEntity](docs/VerifyBankAccountRequestBankAccountEntity.md)
 - [SecureApi.VerifyBankAccountResponse](docs/VerifyBankAccountResponse.md)
 - [SecureApi.VerifyBankAccountResponseHttpResponse](docs/VerifyBankAccountResponseHttpResponse.md)



</details>

---

## Authorization

Authentication is handled via API keys in HTTP headers:

| Key           | Location | Description             |
| ------------- | -------- | ----------------------- |
| **x-api-key** | Header   | Your API key            |
| **x-app-key** | Header   | Your App key            |
| **x-version** | Header   | API version (e.g., 2.3) |
| **origin**    | Header   | Your public IP address  |

---

## Support & Versioning

* **API Environments:** Use UAT for testing; switch to Production only after validation.
* **Issues:** Report bugs or request features via the [GitHub Issues](https://github.com/anddone-kit/AndDone-SecureAPI-ClientLibrary-NodeJS/issues) page.
