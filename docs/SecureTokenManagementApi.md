# SecureApi.SecureTokenManagementApi

All URIs are relative to *https://api.uat.anddone.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**secureTokensActivationsDelete**](SecureTokenManagementApi.md#secureTokensActivationsDelete) | **DELETE** /secure/tokens/activations | This API is used for deactivating merchant token securely
[**secureTokensDetailsPost**](SecureTokenManagementApi.md#secureTokensDetailsPost) | **POST** /secure/tokens/details | This API is used for getting details of Merchant Token by Token link.



## secureTokensActivationsDelete

> secureTokensActivationsDelete(xApiKey, xAppKey, xVersion, origin, tokenRequest)

This API is used for deactivating merchant token securely

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

let apiInstance = new SecureApi.SecureTokenManagementApi();
let xApiKey = "xApiKey_example"; // String | an authorization header
let xAppKey = "xAppKey_example"; // String | an authorization header
let xVersion = 3.4; // Number | x-version
let origin = "origin_example"; // String | origin
let tokenRequest = new SecureApi.TokenRequest(); // TokenRequest | secure merchant token request
apiInstance.secureTokensActivationsDelete(xApiKey, xAppKey, xVersion, origin, tokenRequest, (error, data, response) => {
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
 **tokenRequest** | [**TokenRequest**](TokenRequest.md)| secure merchant token request | 

### Return type

null (empty response body)

### Authorization

[x-api-key](../README.md#x-api-key), [x-app-key](../README.md#x-app-key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## secureTokensDetailsPost

> SecureMerchantTokenShortResponse secureTokensDetailsPost(xApiKey, xAppKey, xVersion, origin, secureTokenLinkRequest)

This API is used for getting details of Merchant Token by Token link.

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

let apiInstance = new SecureApi.SecureTokenManagementApi();
let xApiKey = "xApiKey_example"; // String | an authorization header
let xAppKey = "xAppKey_example"; // String | an authorization header
let xVersion = 3.4; // Number | x-version
let origin = "origin_example"; // String | origin
let secureTokenLinkRequest = new SecureApi.SecureTokenLinkRequest(); // SecureTokenLinkRequest | Secure Token Link Id Request
apiInstance.secureTokensDetailsPost(xApiKey, xAppKey, xVersion, origin, secureTokenLinkRequest, (error, data, response) => {
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
 **secureTokenLinkRequest** | [**SecureTokenLinkRequest**](SecureTokenLinkRequest.md)| Secure Token Link Id Request | 

### Return type

[**SecureMerchantTokenShortResponse**](SecureMerchantTokenShortResponse.md)

### Authorization

[x-api-key](../README.md#x-api-key), [x-app-key](../README.md#x-app-key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

