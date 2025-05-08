# SecureApi.SecurePaymentBatchingApi

All URIs are relative to *https://api.uat.anddone.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**secureBatchesDetailsPost**](SecurePaymentBatchingApi.md#secureBatchesDetailsPost) | **POST** /secure/batches/details | This API is used for getting Secure Payment Batch Details
[**secureBatchesExecutePost**](SecurePaymentBatchingApi.md#secureBatchesExecutePost) | **POST** /secure/batches/execute | This API execute on-demand batch transaction.
[**secureBatchesPost**](SecurePaymentBatchingApi.md#secureBatchesPost) | **POST** /secure/batches | This API is used for getting Secure Payment Batches
[**secureBatchesTimelinesPost**](SecurePaymentBatchingApi.md#secureBatchesTimelinesPost) | **POST** /secure/batches/timelines | This API will returns batch timeline.
[**secureBatchesTransactionsCancelPost**](SecurePaymentBatchingApi.md#secureBatchesTransactionsCancelPost) | **POST** /secure/batches/transactions/cancel | This API cancels transactions from an active batch.



## secureBatchesDetailsPost

> [PaymentBatchDetailsResponse] secureBatchesDetailsPost(xApiKey, xAppKey, xVersion, origin, securePaymentBatchDetailsRequest)

This API is used for getting Secure Payment Batch Details

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

let apiInstance = new SecureApi.SecurePaymentBatchingApi();
let xApiKey = "xApiKey_example"; // String | an authorization header
let xAppKey = "xAppKey_example"; // String | an authorization header
let xVersion = 3.4; // Number | x-version
let origin = "origin_example"; // String | origin
let securePaymentBatchDetailsRequest = new SecureApi.SecurePaymentBatchDetailsRequest(); // SecurePaymentBatchDetailsRequest | Secure Payment Batch Details Request
apiInstance.secureBatchesDetailsPost(xApiKey, xAppKey, xVersion, origin, securePaymentBatchDetailsRequest, (error, data, response) => {
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
 **securePaymentBatchDetailsRequest** | [**SecurePaymentBatchDetailsRequest**](SecurePaymentBatchDetailsRequest.md)| Secure Payment Batch Details Request | 

### Return type

[**[PaymentBatchDetailsResponse]**](PaymentBatchDetailsResponse.md)

### Authorization

[x-api-key](../README.md#x-api-key), [x-app-key](../README.md#x-app-key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## secureBatchesExecutePost

> secureBatchesExecutePost(xApiKey, xAppKey, xVersion, origin, secureBatchExecuteRequest)

This API execute on-demand batch transaction.

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

let apiInstance = new SecureApi.SecurePaymentBatchingApi();
let xApiKey = "xApiKey_example"; // String | an authorization header
let xAppKey = "xAppKey_example"; // String | an authorization header
let xVersion = 3.4; // Number | x-version
let origin = "origin_example"; // String | origin
let secureBatchExecuteRequest = new SecureApi.SecureBatchExecuteRequest(); // SecureBatchExecuteRequest | Payment Batch Execution Request
apiInstance.secureBatchesExecutePost(xApiKey, xAppKey, xVersion, origin, secureBatchExecuteRequest, (error, data, response) => {
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
 **secureBatchExecuteRequest** | [**SecureBatchExecuteRequest**](SecureBatchExecuteRequest.md)| Payment Batch Execution Request | 

### Return type

null (empty response body)

### Authorization

[x-api-key](../README.md#x-api-key), [x-app-key](../README.md#x-app-key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## secureBatchesPost

> PaymentBatchResponse secureBatchesPost(xApiKey, xAppKey, xVersion, origin, opts)

This API is used for getting Secure Payment Batches

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

let apiInstance = new SecureApi.SecurePaymentBatchingApi();
let xApiKey = "xApiKey_example"; // String | an authorization header
let xAppKey = "xAppKey_example"; // String | an authorization header
let xVersion = 3.4; // Number | x-version
let origin = "origin_example"; // String | origin
let opts = {
  'startRow': 3.4, // Number | Set StartRow
  'pageSize': 3.4, // Number | Set PageSize
  'sortField': "sortField_example", // String | Set SortField
  'asc': true // Boolean | Set Asc
};
apiInstance.secureBatchesPost(xApiKey, xAppKey, xVersion, origin, opts, (error, data, response) => {
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
 **startRow** | **Number**| Set StartRow | [optional] 
 **pageSize** | **Number**| Set PageSize | [optional] 
 **sortField** | **String**| Set SortField | [optional] 
 **asc** | **Boolean**| Set Asc | [optional] 

### Return type

[**PaymentBatchResponse**](PaymentBatchResponse.md)

### Authorization

[x-api-key](../README.md#x-api-key), [x-app-key](../README.md#x-app-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## secureBatchesTimelinesPost

> [PaymentBatchEventLogResponse] secureBatchesTimelinesPost(xApiKey, xAppKey, xVersion, origin, securePaymentBatchDetailsRequest)

This API will returns batch timeline.

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

let apiInstance = new SecureApi.SecurePaymentBatchingApi();
let xApiKey = "xApiKey_example"; // String | an authorization header
let xAppKey = "xAppKey_example"; // String | an authorization header
let xVersion = 3.4; // Number | x-version
let origin = "origin_example"; // String | origin
let securePaymentBatchDetailsRequest = new SecureApi.SecurePaymentBatchDetailsRequest(); // SecurePaymentBatchDetailsRequest | Payment Batch Timeline Request
apiInstance.secureBatchesTimelinesPost(xApiKey, xAppKey, xVersion, origin, securePaymentBatchDetailsRequest, (error, data, response) => {
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
 **securePaymentBatchDetailsRequest** | [**SecurePaymentBatchDetailsRequest**](SecurePaymentBatchDetailsRequest.md)| Payment Batch Timeline Request | 

### Return type

[**[PaymentBatchEventLogResponse]**](PaymentBatchEventLogResponse.md)

### Authorization

[x-api-key](../README.md#x-api-key), [x-app-key](../README.md#x-app-key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## secureBatchesTransactionsCancelPost

> secureBatchesTransactionsCancelPost(xApiKey, xAppKey, xVersion, origin, paymentBatchCancellationRequest)

This API cancels transactions from an active batch.

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

let apiInstance = new SecureApi.SecurePaymentBatchingApi();
let xApiKey = "xApiKey_example"; // String | an authorization header
let xAppKey = "xAppKey_example"; // String | an authorization header
let xVersion = 3.4; // Number | x-version
let origin = "origin_example"; // String | origin
let paymentBatchCancellationRequest = new SecureApi.PaymentBatchCancellationRequest(); // PaymentBatchCancellationRequest | Payment Batch Cancellation Request
apiInstance.secureBatchesTransactionsCancelPost(xApiKey, xAppKey, xVersion, origin, paymentBatchCancellationRequest, (error, data, response) => {
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
 **paymentBatchCancellationRequest** | [**PaymentBatchCancellationRequest**](PaymentBatchCancellationRequest.md)| Payment Batch Cancellation Request | 

### Return type

null (empty response body)

### Authorization

[x-api-key](../README.md#x-api-key), [x-app-key](../README.md#x-app-key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

