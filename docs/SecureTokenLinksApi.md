# SecureApi.SecureTokenLinksApi

All URIs are relative to *https://api.uat.anddone.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**secureTokenlinksDetailsPost**](SecureTokenLinksApi.md#secureTokenlinksDetailsPost) | **POST** /secure/tokenlinks/details | This API is used for getting Token Links by TokenLink ID
[**secureTokenlinksExpirationsPost**](SecureTokenLinksApi.md#secureTokenlinksExpirationsPost) | **POST** /secure/tokenlinks/expirations | This API expires the token link.
[**secureTokenlinksListPost**](SecureTokenLinksApi.md#secureTokenlinksListPost) | **POST** /secure/tokenlinks/list | This API is used for getting all Token Links for Merchant
[**secureTokenlinksPost**](SecureTokenLinksApi.md#secureTokenlinksPost) | **POST** /secure/tokenlinks | This API is use to create Secure Token Links
[**secureTokenlinksPut**](SecureTokenLinksApi.md#secureTokenlinksPut) | **PUT** /secure/tokenlinks | This API will update the expireIn and paymentType of Token Link.



## secureTokenlinksDetailsPost

> SecureTokenLinkByIdResponse secureTokenlinksDetailsPost(xApiKey, xAppKey, xVersion, origin, secureTokenLinkRequest)

This API is used for getting Token Links by TokenLink ID

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

let apiInstance = new SecureApi.SecureTokenLinksApi();
let xApiKey = "xApiKey_example"; // String | an authorization header
let xAppKey = "xAppKey_example"; // String | an authorization header
let xVersion = 3.4; // Number | x-version
let origin = "origin_example"; // String | origin
let secureTokenLinkRequest = new SecureApi.SecureTokenLinkRequest(); // SecureTokenLinkRequest | Secure Token Link Id Request
apiInstance.secureTokenlinksDetailsPost(xApiKey, xAppKey, xVersion, origin, secureTokenLinkRequest, (error, data, response) => {
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

[**SecureTokenLinkByIdResponse**](SecureTokenLinkByIdResponse.md)

### Authorization

[x-api-key](../README.md#x-api-key), [x-app-key](../README.md#x-app-key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## secureTokenlinksExpirationsPost

> SecureTokenLinkExpiredResponse secureTokenlinksExpirationsPost(xApiKey, xAppKey, xVersion, origin, secureTokenLinkRequest)

This API expires the token link.

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

let apiInstance = new SecureApi.SecureTokenLinksApi();
let xApiKey = "xApiKey_example"; // String | an authorization header
let xAppKey = "xAppKey_example"; // String | an authorization header
let xVersion = 3.4; // Number | x-version
let origin = "origin_example"; // String | origin
let secureTokenLinkRequest = new SecureApi.SecureTokenLinkRequest(); // SecureTokenLinkRequest | Secure Token Link Id Request
apiInstance.secureTokenlinksExpirationsPost(xApiKey, xAppKey, xVersion, origin, secureTokenLinkRequest, (error, data, response) => {
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

[**SecureTokenLinkExpiredResponse**](SecureTokenLinkExpiredResponse.md)

### Authorization

[x-api-key](../README.md#x-api-key), [x-app-key](../README.md#x-app-key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## secureTokenlinksListPost

> TokenLinkResponse secureTokenlinksListPost(xApiKey, xAppKey, xVersion, origin, opts)

This API is used for getting all Token Links for Merchant

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

let apiInstance = new SecureApi.SecureTokenLinksApi();
let xApiKey = "xApiKey_example"; // String | an authorization header
let xAppKey = "xAppKey_example"; // String | an authorization header
let xVersion = 3.4; // Number | x-version
let origin = "origin_example"; // String | origin
let opts = {
  'email': "email_example", // String | email
  'status': "status_example", // String | status
  'phone': "phone_example", // String | phone
  'statuses': "statuses_example", // String | statuses
  'title': "title_example", // String | title
  'paymentDescription': "paymentDescription_example", // String | paymentDescription
  'invoiceNumber': "invoiceNumber_example", // String | invoiceNumber
  'expiryDate': "expiryDate_example", // String | expiryDate
  'fromExpiryDate': "fromExpiryDate_example", // String | fromExpiryDate
  'freeTextSearch': "freeTextSearch_example", // String | freeTextSearch
  'tokenLinkId': "tokenLinkId_example", // String | tokenLinkId
  'toExpiryDate': "toExpiryDate_example", // String | toExpiryDate
  'fromDate': "fromDate_example", // String | fromDate
  'toDate': "toDate_example", // String | toDate
  'startRow': 3.4, // Number | Set StartRow
  'pageSize': 3.4, // Number | Set PageSize
  'sortField': "sortField_example", // String | Set SortField
  'asc': true // Boolean | Set Asc
};
apiInstance.secureTokenlinksListPost(xApiKey, xAppKey, xVersion, origin, opts, (error, data, response) => {
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
 **email** | **String**| email | [optional] 
 **status** | **String**| status | [optional] 
 **phone** | **String**| phone | [optional] 
 **statuses** | **String**| statuses | [optional] 
 **title** | **String**| title | [optional] 
 **paymentDescription** | **String**| paymentDescription | [optional] 
 **invoiceNumber** | **String**| invoiceNumber | [optional] 
 **expiryDate** | **String**| expiryDate | [optional] 
 **fromExpiryDate** | **String**| fromExpiryDate | [optional] 
 **freeTextSearch** | **String**| freeTextSearch | [optional] 
 **tokenLinkId** | **String**| tokenLinkId | [optional] 
 **toExpiryDate** | **String**| toExpiryDate | [optional] 
 **fromDate** | **String**| fromDate | [optional] 
 **toDate** | **String**| toDate | [optional] 
 **startRow** | **Number**| Set StartRow | [optional] 
 **pageSize** | **Number**| Set PageSize | [optional] 
 **sortField** | **String**| Set SortField | [optional] 
 **asc** | **Boolean**| Set Asc | [optional] 

### Return type

[**TokenLinkResponse**](TokenLinkResponse.md)

### Authorization

[x-api-key](../README.md#x-api-key), [x-app-key](../README.md#x-app-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## secureTokenlinksPost

> SecureTokenLinkResponse secureTokenlinksPost(xApiKey, xAppKey, xVersion, origin, tokenLinkSecureRequest)

This API is use to create Secure Token Links

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

let apiInstance = new SecureApi.SecureTokenLinksApi();
let xApiKey = "xApiKey_example"; // String | an authorization header
let xAppKey = "xAppKey_example"; // String | an authorization header
let xVersion = 3.4; // Number | x-version
let origin = "origin_example"; // String | origin
let tokenLinkSecureRequest = new SecureApi.TokenLinkSecureRequest(); // TokenLinkSecureRequest | Secure Token Link Request
apiInstance.secureTokenlinksPost(xApiKey, xAppKey, xVersion, origin, tokenLinkSecureRequest, (error, data, response) => {
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
 **tokenLinkSecureRequest** | [**TokenLinkSecureRequest**](TokenLinkSecureRequest.md)| Secure Token Link Request | 

### Return type

[**SecureTokenLinkResponse**](SecureTokenLinkResponse.md)

### Authorization

[x-api-key](../README.md#x-api-key), [x-app-key](../README.md#x-app-key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## secureTokenlinksPut

> secureTokenlinksPut(xApiKey, xAppKey, xVersion, origin, secureTokenLinkUpdateRequest)

This API will update the expireIn and paymentType of Token Link.

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

let apiInstance = new SecureApi.SecureTokenLinksApi();
let xApiKey = "xApiKey_example"; // String | an authorization header
let xAppKey = "xAppKey_example"; // String | an authorization header
let xVersion = 3.4; // Number | x-version
let origin = "origin_example"; // String | origin
let secureTokenLinkUpdateRequest = new SecureApi.SecureTokenLinkUpdateRequest(); // SecureTokenLinkUpdateRequest | Secure Token Link Update Request
apiInstance.secureTokenlinksPut(xApiKey, xAppKey, xVersion, origin, secureTokenLinkUpdateRequest, (error, data, response) => {
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
 **secureTokenLinkUpdateRequest** | [**SecureTokenLinkUpdateRequest**](SecureTokenLinkUpdateRequest.md)| Secure Token Link Update Request | 

### Return type

null (empty response body)

### Authorization

[x-api-key](../README.md#x-api-key), [x-app-key](../README.md#x-app-key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

