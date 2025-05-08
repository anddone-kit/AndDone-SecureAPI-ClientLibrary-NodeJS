# SecureApi.SecureOrumApi

All URIs are relative to *https://api.uat.anddone.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**secureBankaccountsDetailsPost**](SecureOrumApi.md#secureBankaccountsDetailsPost) | **POST** /secure/bankaccounts/details | This API will request for verified bank account.
[**secureBankaccountsVerifyPost**](SecureOrumApi.md#secureBankaccountsVerifyPost) | **POST** /secure/bankaccounts/verify | This API will request for account verification.



## secureBankaccountsDetailsPost

> [VerifyBankAccountResponse] secureBankaccountsDetailsPost(xApiKey, xAppKey, xVersion, origin, opts)

This API will request for verified bank account.

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

let apiInstance = new SecureApi.SecureOrumApi();
let xApiKey = "xApiKey_example"; // String | an authorization header
let xAppKey = "xAppKey_example"; // String | an authorization header
let xVersion = 3.4; // Number | x-version
let origin = "origin_example"; // String | origin
let opts = {
  'id': "id_example", // String | The Bank Account Entity Id
  'type': "type_example", // String | Set Type
  'verificationEntityRequest': new SecureApi.VerificationEntityRequest() // VerificationEntityRequest | Verification Entity
};
apiInstance.secureBankaccountsDetailsPost(xApiKey, xAppKey, xVersion, origin, opts, (error, data, response) => {
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
 **id** | **String**| The Bank Account Entity Id | [optional] 
 **type** | **String**| Set Type | [optional] 
 **verificationEntityRequest** | [**VerificationEntityRequest**](VerificationEntityRequest.md)| Verification Entity | [optional] 

### Return type

[**[VerifyBankAccountResponse]**](VerifyBankAccountResponse.md)

### Authorization

[x-api-key](../README.md#x-api-key), [x-app-key](../README.md#x-app-key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## secureBankaccountsVerifyPost

> [VerifyBankAccountResponse] secureBankaccountsVerifyPost(xApiKey, xAppKey, xVersion, origin, opts)

This API will request for account verification.

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

let apiInstance = new SecureApi.SecureOrumApi();
let xApiKey = "xApiKey_example"; // String | an authorization header
let xAppKey = "xAppKey_example"; // String | an authorization header
let xVersion = 3.4; // Number | x-version
let origin = "origin_example"; // String | origin
let opts = {
  'verifyBankAccountRequest': new SecureApi.VerifyBankAccountRequest() // VerifyBankAccountRequest | Bank Accout detals
};
apiInstance.secureBankaccountsVerifyPost(xApiKey, xAppKey, xVersion, origin, opts, (error, data, response) => {
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
 **verifyBankAccountRequest** | [**VerifyBankAccountRequest**](VerifyBankAccountRequest.md)| Bank Accout detals | [optional] 

### Return type

[**[VerifyBankAccountResponse]**](VerifyBankAccountResponse.md)

### Authorization

[x-api-key](../README.md#x-api-key), [x-app-key](../README.md#x-app-key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

