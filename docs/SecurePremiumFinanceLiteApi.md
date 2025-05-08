# SecureApi.SecurePremiumFinanceLiteApi

All URIs are relative to *https://api.uat.anddone.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**secureEpfliteQuotesGeneratePost**](SecurePremiumFinanceLiteApi.md#secureEpfliteQuotesGeneratePost) | **POST** /secure/epflite/quotes/generate | This API is used to generate the quote from the provider.
[**secureEpfliteQuotesLinkPost**](SecurePremiumFinanceLiteApi.md#secureEpfliteQuotesLinkPost) | **POST** /secure/epflite/quotes/link | This API will return quotes created againsts a payment link.
[**secureEpfliteQuotesPaymentlinksPost**](SecurePremiumFinanceLiteApi.md#secureEpfliteQuotesPaymentlinksPost) | **POST** /secure/epflite/quotes/paymentlinks | This API is used to create Payment Links



## secureEpfliteQuotesGeneratePost

> PFLiteGenerateQuoteResponse secureEpfliteQuotesGeneratePost(xApiKey, xAppKey, xVersion, origin, opts)

This API is used to generate the quote from the provider.

### Example

```javascript
import SecureApi from 'secure_api';
let defaultClient = SecureApi.ApiClient.instance;
// Configure API key authorization: x-api-key
let x-api-key = defaultClient.authentications['x-api-key'];
x-api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//x-api-key.apiKeyPrefix = 'Token';
// Configure API key authorization: x-app-key
let x-app-key = defaultClient.authentications['x-app-key'];
x-app-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//x-app-key.apiKeyPrefix = 'Token';

let apiInstance = new SecureApi.SecurePremiumFinanceLiteApi();
let xApiKey = "xApiKey_example"; // String | an authorization header
let xAppKey = "xAppKey_example"; // String | an authorization header
let xVersion = 3.4; // Number | x-version
let origin = "origin_example"; // String | origin
let opts = {
  'pFLiteSecureQuoteRequest': new SecureApi.PFLiteSecureQuoteRequest() // PFLiteSecureQuoteRequest | PFLite Quote Secure Request details
};
apiInstance.secureEpfliteQuotesGeneratePost(xApiKey, xAppKey, xVersion, origin, opts, (error, data, response) => {
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
 **pFLiteSecureQuoteRequest** | [**PFLiteSecureQuoteRequest**](PFLiteSecureQuoteRequest.md)| PFLite Quote Secure Request details | [optional] 

### Return type

[**PFLiteGenerateQuoteResponse**](PFLiteGenerateQuoteResponse.md)

### Authorization

[x-api-key](../README.md#x-api-key), [x-app-key](../README.md#x-app-key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## secureEpfliteQuotesLinkPost

> [PFLiteQuoteByPaymentLinkResponse] secureEpfliteQuotesLinkPost(xApiKey, xAppKey, xVersion, origin, opts)

This API will return quotes created againsts a payment link.

### Example

```javascript
import SecureApi from 'secure_api';
let defaultClient = SecureApi.ApiClient.instance;
// Configure API key authorization: x-api-key
let x-api-key = defaultClient.authentications['x-api-key'];
x-api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//x-api-key.apiKeyPrefix = 'Token';
// Configure API key authorization: x-app-key
let x-app-key = defaultClient.authentications['x-app-key'];
x-app-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//x-app-key.apiKeyPrefix = 'Token';

let apiInstance = new SecureApi.SecurePremiumFinanceLiteApi();
let xApiKey = "xApiKey_example"; // String | an authorization header
let xAppKey = "xAppKey_example"; // String | an authorization header
let xVersion = 3.4; // Number | x-version
let origin = "origin_example"; // String | origin
let opts = {
  'pFLiteGetQuoteRequest': new SecureApi.PFLiteGetQuoteRequest() // PFLiteGetQuoteRequest | Signature Request details
};
apiInstance.secureEpfliteQuotesLinkPost(xApiKey, xAppKey, xVersion, origin, opts, (error, data, response) => {
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
 **pFLiteGetQuoteRequest** | [**PFLiteGetQuoteRequest**](PFLiteGetQuoteRequest.md)| Signature Request details | [optional] 

### Return type

[**[PFLiteQuoteByPaymentLinkResponse]**](PFLiteQuoteByPaymentLinkResponse.md)

### Authorization

[x-api-key](../README.md#x-api-key), [x-app-key](../README.md#x-app-key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## secureEpfliteQuotesPaymentlinksPost

> PaymentLinkResponse secureEpfliteQuotesPaymentlinksPost(xApiKey, xAppKey, xVersion, origin, pFLitePaymentLinkRequest)

This API is used to create Payment Links

### Example

```javascript
import SecureApi from 'secure_api';
let defaultClient = SecureApi.ApiClient.instance;
// Configure API key authorization: x-api-key
let x-api-key = defaultClient.authentications['x-api-key'];
x-api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//x-api-key.apiKeyPrefix = 'Token';
// Configure API key authorization: x-app-key
let x-app-key = defaultClient.authentications['x-app-key'];
x-app-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//x-app-key.apiKeyPrefix = 'Token';

let apiInstance = new SecureApi.SecurePremiumFinanceLiteApi();
let xApiKey = "xApiKey_example"; // String | an authorization header
let xAppKey = "xAppKey_example"; // String | an authorization header
let xVersion = 3.4; // Number | x-version
let origin = "origin_example"; // String | origin
let pFLitePaymentLinkRequest = new SecureApi.PFLitePaymentLinkRequest(); // PFLitePaymentLinkRequest | Payment Link Request
apiInstance.secureEpfliteQuotesPaymentlinksPost(xApiKey, xAppKey, xVersion, origin, pFLitePaymentLinkRequest, (error, data, response) => {
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
 **pFLitePaymentLinkRequest** | [**PFLitePaymentLinkRequest**](PFLitePaymentLinkRequest.md)| Payment Link Request | 

### Return type

[**PaymentLinkResponse**](PaymentLinkResponse.md)

### Authorization

[x-api-key](../README.md#x-api-key), [x-app-key](../README.md#x-app-key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

