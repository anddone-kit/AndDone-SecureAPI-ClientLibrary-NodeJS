# SecureApi.SecureVoidsApi

All URIs are relative to *https://api.uat.anddone.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**secureCancellationsPost**](SecureVoidsApi.md#secureCancellationsPost) | **POST** /secure/cancellations | This API cancel a transaction.



## secureCancellationsPost

> SecureCancelledTransactionResponse secureCancellationsPost(xApiKey, xAppKey, xVersion, origin, secureTransactionCancelRequest)

This API cancel a transaction.

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

let apiInstance = new SecureApi.SecureVoidsApi();
let xApiKey = "xApiKey_example"; // String | an authorization header
let xAppKey = "xAppKey_example"; // String | an authorization header
let xVersion = 3.4; // Number | x-version
let origin = "origin_example"; // String | origin
let secureTransactionCancelRequest = new SecureApi.SecureTransactionCancelRequest(); // SecureTransactionCancelRequest | Cancel Detail
apiInstance.secureCancellationsPost(xApiKey, xAppKey, xVersion, origin, secureTransactionCancelRequest, (error, data, response) => {
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
 **secureTransactionCancelRequest** | [**SecureTransactionCancelRequest**](SecureTransactionCancelRequest.md)| Cancel Detail | 

### Return type

[**SecureCancelledTransactionResponse**](SecureCancelledTransactionResponse.md)

### Authorization

[x-api-key](../README.md#x-api-key), [x-app-key](../README.md#x-app-key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

