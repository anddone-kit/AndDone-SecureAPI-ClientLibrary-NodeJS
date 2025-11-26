# SecureApi.SecureEmbeddedPremiumFinanceApi

All URIs are relative to *https://api.uat.anddone.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**secureEpfMerchantsQuotesPolicyPut**](SecureEmbeddedPremiumFinanceApi.md#secureEpfMerchantsQuotesPolicyPut) | **PUT** /secure/epf/merchants/quotes/policy | This API is will update the policy number
[**secureEpfQuotesBookingPut**](SecureEmbeddedPremiumFinanceApi.md#secureEpfQuotesBookingPut) | **PUT** /secure/epf/quotes/booking | This API will update PFA to book a quote.
[**secureEpfQuotesCaptureesignPut**](SecureEmbeddedPremiumFinanceApi.md#secureEpfQuotesCaptureesignPut) | **PUT** /secure/epf/quotes/captureesign | This API will eSign the pfa with insured name.
[**secureEpfQuotesGeneratePost**](SecureEmbeddedPremiumFinanceApi.md#secureEpfQuotesGeneratePost) | **POST** /secure/epf/quotes/generate | This API is used to Generate Quotes
[**secureEpfQuotesIntentPost**](SecureEmbeddedPremiumFinanceApi.md#secureEpfQuotesIntentPost) | **POST** /secure/epf/quotes/intent | This API will return quotes created againsts a payment intent.
[**secureEpfQuotesPost**](SecureEmbeddedPremiumFinanceApi.md#secureEpfQuotesPost) | **POST** /secure/epf/quotes | This API will return quote by QuoteKey.
[**secureEpfRetrievepfaPost**](SecureEmbeddedPremiumFinanceApi.md#secureEpfRetrievepfaPost) | **POST** /secure/epf/retrievepfa | This API will return PFA for given quoteKey.



## secureEpfMerchantsQuotesPolicyPut

> PFPolicyUpdateResponse secureEpfMerchantsQuotesPolicyPut(xApiKey, xAppKey, xVersion, origin, opts)

This API is will update the policy number

### Example

```javascript
import SecureApi from 'secure_api';

let apiInstance = new SecureApi.SecureEmbeddedPremiumFinanceApi();
let xApiKey = "xApiKey_example"; // String | an authorization header
let xAppKey = "xAppKey_example"; // String | an authorization header
let xVersion = 3.4; // Number | x-version
let origin = "origin_example"; // String | origin
let opts = {
  'pFPolicyUpdateRequestDTO': new SecureApi.PFPolicyUpdateRequestDTO() // PFPolicyUpdateRequestDTO | Signature Request details
};
apiInstance.secureEpfMerchantsQuotesPolicyPut(xApiKey, xAppKey, xVersion, origin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xApiKey** | **String**| an authorization header | 
 **xAppKey** | **String**| an authorization header | 
 **xVersion** | **Number**| x-version | 
 **origin** | **String**| origin | 
 **pFPolicyUpdateRequestDTO** | [**PFPolicyUpdateRequestDTO**](PFPolicyUpdateRequestDTO.md)| Signature Request details | [optional] 

### Return type

[**PFPolicyUpdateResponse**](PFPolicyUpdateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## secureEpfQuotesBookingPut

> PFUpdatePFAResponse secureEpfQuotesBookingPut(xApiKey, xAppKey, xVersion, origin, pFQuoteBookingRequest)

This API will update PFA to book a quote.

### Example

```javascript
import SecureApi from 'secure_api';

let apiInstance = new SecureApi.SecureEmbeddedPremiumFinanceApi();
let xApiKey = "xApiKey_example"; // String | an authorization header
let xAppKey = "xAppKey_example"; // String | an authorization header
let xVersion = 3.4; // Number | x-version
let origin = "origin_example"; // String | origin
let pFQuoteBookingRequest = new SecureApi.PFQuoteBookingRequest(); // PFQuoteBookingRequest | PFQuoteBooking Request details
apiInstance.secureEpfQuotesBookingPut(xApiKey, xAppKey, xVersion, origin, pFQuoteBookingRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xApiKey** | **String**| an authorization header | 
 **xAppKey** | **String**| an authorization header | 
 **xVersion** | **Number**| x-version | 
 **origin** | **String**| origin | 
 **pFQuoteBookingRequest** | [**PFQuoteBookingRequest**](PFQuoteBookingRequest.md)| PFQuoteBooking Request details | 

### Return type

[**PFUpdatePFAResponse**](PFUpdatePFAResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## secureEpfQuotesCaptureesignPut

> secureEpfQuotesCaptureesignPut(xApiKey, xAppKey, xVersion, origin, opts)

This API will eSign the pfa with insured name.

### Example

```javascript
import SecureApi from 'secure_api';

let apiInstance = new SecureApi.SecureEmbeddedPremiumFinanceApi();
let xApiKey = "xApiKey_example"; // String | an authorization header
let xAppKey = "xAppKey_example"; // String | an authorization header
let xVersion = 3.4; // Number | x-version
let origin = "origin_example"; // String | origin
let opts = {
  'pFQuoteEsignRequest': new SecureApi.PFQuoteEsignRequest() // PFQuoteEsignRequest | PFQuote Request
};
apiInstance.secureEpfQuotesCaptureesignPut(xApiKey, xAppKey, xVersion, origin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xApiKey** | **String**| an authorization header | 
 **xAppKey** | **String**| an authorization header | 
 **xVersion** | **Number**| x-version | 
 **origin** | **String**| origin | 
 **pFQuoteEsignRequest** | [**PFQuoteEsignRequest**](PFQuoteEsignRequest.md)| PFQuote Request | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## secureEpfQuotesGeneratePost

> [PFGenerateQuoteResponse] secureEpfQuotesGeneratePost(xApiKey, xAppKey, xVersion, origin, opts)

This API is used to Generate Quotes

### Example

```javascript
import SecureApi from 'secure_api';

let apiInstance = new SecureApi.SecureEmbeddedPremiumFinanceApi();
let xApiKey = "xApiKey_example"; // String | an authorization header
let xAppKey = "xAppKey_example"; // String | an authorization header
let xVersion = 3.4; // Number | x-version
let origin = "origin_example"; // String | origin
let opts = {
  'quoteRequest': new SecureApi.QuoteRequest() // QuoteRequest | Quote Request
};
apiInstance.secureEpfQuotesGeneratePost(xApiKey, xAppKey, xVersion, origin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xApiKey** | **String**| an authorization header | 
 **xAppKey** | **String**| an authorization header | 
 **xVersion** | **Number**| x-version | 
 **origin** | **String**| origin | 
 **quoteRequest** | [**QuoteRequest**](QuoteRequest.md)| Quote Request | [optional] 

### Return type

[**[PFGenerateQuoteResponse]**](PFGenerateQuoteResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## secureEpfQuotesIntentPost

> [QuoteResponse] secureEpfQuotesIntentPost(xApiKey, xAppKey, xVersion, origin, opts)

This API will return quotes created againsts a payment intent.

### Example

```javascript
import SecureApi from 'secure_api';

let apiInstance = new SecureApi.SecureEmbeddedPremiumFinanceApi();
let xApiKey = "xApiKey_example"; // String | an authorization header
let xAppKey = "xAppKey_example"; // String | an authorization header
let xVersion = 3.4; // Number | x-version
let origin = "origin_example"; // String | origin
let opts = {
  'getQuoteRequest': new SecureApi.GetQuoteRequest() // GetQuoteRequest | Signature Request details
};
apiInstance.secureEpfQuotesIntentPost(xApiKey, xAppKey, xVersion, origin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xApiKey** | **String**| an authorization header | 
 **xAppKey** | **String**| an authorization header | 
 **xVersion** | **Number**| x-version | 
 **origin** | **String**| origin | 
 **getQuoteRequest** | [**GetQuoteRequest**](GetQuoteRequest.md)| Signature Request details | [optional] 

### Return type

[**[QuoteResponse]**](QuoteResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## secureEpfQuotesPost

> QuoteResponse secureEpfQuotesPost(xApiKey, xAppKey, xVersion, origin, opts)

This API will return quote by QuoteKey.

### Example

```javascript
import SecureApi from 'secure_api';

let apiInstance = new SecureApi.SecureEmbeddedPremiumFinanceApi();
let xApiKey = "xApiKey_example"; // String | an authorization header
let xAppKey = "xAppKey_example"; // String | an authorization header
let xVersion = 3.4; // Number | x-version
let origin = "origin_example"; // String | origin
let opts = {
  'getQuoteKeyRequest': new SecureApi.GetQuoteKeyRequest() // GetQuoteKeyRequest | Signature Request details
};
apiInstance.secureEpfQuotesPost(xApiKey, xAppKey, xVersion, origin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xApiKey** | **String**| an authorization header | 
 **xAppKey** | **String**| an authorization header | 
 **xVersion** | **Number**| x-version | 
 **origin** | **String**| origin | 
 **getQuoteKeyRequest** | [**GetQuoteKeyRequest**](GetQuoteKeyRequest.md)| Signature Request details | [optional] 

### Return type

[**QuoteResponse**](QuoteResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## secureEpfRetrievepfaPost

> String secureEpfRetrievepfaPost(xApiKey, xAppKey, xVersion, origin, opts)

This API will return PFA for given quoteKey.

### Example

```javascript
import SecureApi from 'secure_api';

let apiInstance = new SecureApi.SecureEmbeddedPremiumFinanceApi();
let xApiKey = "xApiKey_example"; // String | an authorization header
let xAppKey = "xAppKey_example"; // String | an authorization header
let xVersion = 3.4; // Number | x-version
let origin = "origin_example"; // String | origin
let opts = {
  'pFRetrievePFARequestDTO': new SecureApi.PFRetrievePFARequestDTO() // PFRetrievePFARequestDTO | PFRetrieve PFA Request
};
apiInstance.secureEpfRetrievepfaPost(xApiKey, xAppKey, xVersion, origin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xApiKey** | **String**| an authorization header | 
 **xAppKey** | **String**| an authorization header | 
 **xVersion** | **Number**| x-version | 
 **origin** | **String**| origin | 
 **pFRetrievePFARequestDTO** | [**PFRetrievePFARequestDTO**](PFRetrievePFARequestDTO.md)| PFRetrieve PFA Request | [optional] 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

