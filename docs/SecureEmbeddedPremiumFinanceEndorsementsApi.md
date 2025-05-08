# SecureApi.SecureEmbeddedPremiumFinanceEndorsementsApi

All URIs are relative to *https://api.uat.anddone.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**secureEpfEndorsementsPost**](SecureEmbeddedPremiumFinanceEndorsementsApi.md#secureEpfEndorsementsPost) | **POST** /secure/epf/endorsements | This API will do a check of eligibility of account
[**secureEpfQuoteEndorsementBookingPut**](SecureEmbeddedPremiumFinanceEndorsementsApi.md#secureEpfQuoteEndorsementBookingPut) | **PUT** /secure/epf/quote/endorsement/booking | This API will update PFA to book a endorsement quote.
[**secureEpfQuoteEndorsementPost**](SecureEmbeddedPremiumFinanceEndorsementsApi.md#secureEpfQuoteEndorsementPost) | **POST** /secure/epf/quote/endorsement | This API will do return a quote for an existing policy or new policy for an existing account



## secureEpfEndorsementsPost

> PFCheckEndorsementsResponse secureEpfEndorsementsPost(xApiKey, xAppKey, xVersion, origin, pFCheckEndorsementsRequest)

This API will do a check of eligibility of account

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

let apiInstance = new SecureApi.SecureEmbeddedPremiumFinanceEndorsementsApi();
let xApiKey = "xApiKey_example"; // String | an authorization header
let xAppKey = "xAppKey_example"; // String | an authorization header
let xVersion = 3.4; // Number | x-version
let origin = "origin_example"; // String | origin
let pFCheckEndorsementsRequest = new SecureApi.PFCheckEndorsementsRequest(); // PFCheckEndorsementsRequest | PF Check Endorsement Request details
apiInstance.secureEpfEndorsementsPost(xApiKey, xAppKey, xVersion, origin, pFCheckEndorsementsRequest, (error, data, response) => {
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
 **pFCheckEndorsementsRequest** | [**PFCheckEndorsementsRequest**](PFCheckEndorsementsRequest.md)| PF Check Endorsement Request details | 

### Return type

[**PFCheckEndorsementsResponse**](PFCheckEndorsementsResponse.md)

### Authorization

[x-api-key](../README.md#x-api-key), [x-app-key](../README.md#x-app-key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## secureEpfQuoteEndorsementBookingPut

> PFUpdatePFAResponse secureEpfQuoteEndorsementBookingPut(xApiKey, xAppKey, xVersion, origin, pFQuoteBookingRequest)

This API will update PFA to book a endorsement quote.

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

let apiInstance = new SecureApi.SecureEmbeddedPremiumFinanceEndorsementsApi();
let xApiKey = "xApiKey_example"; // String | an authorization header
let xAppKey = "xAppKey_example"; // String | an authorization header
let xVersion = 3.4; // Number | x-version
let origin = "origin_example"; // String | origin
let pFQuoteBookingRequest = new SecureApi.PFQuoteBookingRequest(); // PFQuoteBookingRequest | PFQuoteBooking Request details
apiInstance.secureEpfQuoteEndorsementBookingPut(xApiKey, xAppKey, xVersion, origin, pFQuoteBookingRequest, (error, data, response) => {
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

[x-api-key](../README.md#x-api-key), [x-app-key](../README.md#x-app-key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## secureEpfQuoteEndorsementPost

> PFEndorsementResponse secureEpfQuoteEndorsementPost(xApiKey, xAppKey, xVersion, origin, pFEndorsementRequest)

This API will do return a quote for an existing policy or new policy for an existing account

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

let apiInstance = new SecureApi.SecureEmbeddedPremiumFinanceEndorsementsApi();
let xApiKey = "xApiKey_example"; // String | an authorization header
let xAppKey = "xAppKey_example"; // String | an authorization header
let xVersion = 3.4; // Number | x-version
let origin = "origin_example"; // String | origin
let pFEndorsementRequest = new SecureApi.PFEndorsementRequest(); // PFEndorsementRequest | PF Endorsement Request details
apiInstance.secureEpfQuoteEndorsementPost(xApiKey, xAppKey, xVersion, origin, pFEndorsementRequest, (error, data, response) => {
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
 **pFEndorsementRequest** | [**PFEndorsementRequest**](PFEndorsementRequest.md)| PF Endorsement Request details | 

### Return type

[**PFEndorsementResponse**](PFEndorsementResponse.md)

### Authorization

[x-api-key](../README.md#x-api-key), [x-app-key](../README.md#x-app-key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

