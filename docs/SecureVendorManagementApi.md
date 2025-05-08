# SecureApi.SecureVendorManagementApi

All URIs are relative to *https://api.uat.anddone.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**vendorapiSecureMerchantsVendorsDeletePost**](SecureVendorManagementApi.md#vendorapiSecureMerchantsVendorsDeletePost) | **POST** /vendorapi/secure/merchants/vendors/delete | This API deletes vendor into system
[**vendorapiSecureMerchantsVendorsDetailsPost**](SecureVendorManagementApi.md#vendorapiSecureMerchantsVendorsDetailsPost) | **POST** /vendorapi/secure/merchants/vendors/details | This API gets details of particular vendor
[**vendorapiSecureMerchantsVendorsEditPost**](SecureVendorManagementApi.md#vendorapiSecureMerchantsVendorsEditPost) | **POST** /vendorapi/secure/merchants/vendors/edit | This API Updates the existing vendor
[**vendorapiSecureMerchantsVendorsPost**](SecureVendorManagementApi.md#vendorapiSecureMerchantsVendorsPost) | **POST** /vendorapi/secure/merchants/vendors | This API creates vendor into system
[**vendorapiSecureMerchantsVendorsSearchPost**](SecureVendorManagementApi.md#vendorapiSecureMerchantsVendorsSearchPost) | **POST** /vendorapi/secure/merchants/vendors/search | This API returns list of all the Vendors of Merchant
[**vendorapiSecureMerchantsVendorsSuspendPost**](SecureVendorManagementApi.md#vendorapiSecureMerchantsVendorsSuspendPost) | **POST** /vendorapi/secure/merchants/vendors/suspend | This API suspends vendor into system
[**vendorapiSecureMerchantsVendorsTimelinePost**](SecureVendorManagementApi.md#vendorapiSecureMerchantsVendorsTimelinePost) | **POST** /vendorapi/secure/merchants/vendors/timeline | This API gets timeline of particular vendor
[**vendorapiSecureMerchantsVendorsUnsuspendPost**](SecureVendorManagementApi.md#vendorapiSecureMerchantsVendorsUnsuspendPost) | **POST** /vendorapi/secure/merchants/vendors/unsuspend | This API unsuspends vendor into system



## vendorapiSecureMerchantsVendorsDeletePost

> vendorapiSecureMerchantsVendorsDeletePost(xApiKey, xAppKey, xVersion, origin, secureVendorStatusRequestDTO)

This API deletes vendor into system

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

let apiInstance = new SecureApi.SecureVendorManagementApi();
let xApiKey = "xApiKey_example"; // String | an authorization header
let xAppKey = "xAppKey_example"; // String | an authorization header
let xVersion = 3.4; // Number | x-version
let origin = "origin_example"; // String | origin
let secureVendorStatusRequestDTO = new SecureApi.SecureVendorStatusRequestDTO(); // SecureVendorStatusRequestDTO | SecureVendorStatusRequestDTO
apiInstance.vendorapiSecureMerchantsVendorsDeletePost(xApiKey, xAppKey, xVersion, origin, secureVendorStatusRequestDTO, (error, data, response) => {
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
 **secureVendorStatusRequestDTO** | [**SecureVendorStatusRequestDTO**](SecureVendorStatusRequestDTO.md)| SecureVendorStatusRequestDTO | 

### Return type

null (empty response body)

### Authorization

[x-api-key](../README.md#x-api-key), [x-app-key](../README.md#x-app-key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## vendorapiSecureMerchantsVendorsDetailsPost

> VendorResponseDTO vendorapiSecureMerchantsVendorsDetailsPost(xApiKey, xAppKey, xVersion, origin, secureVendorRequestDTO)

This API gets details of particular vendor

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

let apiInstance = new SecureApi.SecureVendorManagementApi();
let xApiKey = "xApiKey_example"; // String | an authorization header
let xAppKey = "xAppKey_example"; // String | an authorization header
let xVersion = 3.4; // Number | x-version
let origin = "origin_example"; // String | origin
let secureVendorRequestDTO = new SecureApi.SecureVendorRequestDTO(); // SecureVendorRequestDTO | SecureVendorRequestDTO
apiInstance.vendorapiSecureMerchantsVendorsDetailsPost(xApiKey, xAppKey, xVersion, origin, secureVendorRequestDTO, (error, data, response) => {
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
 **secureVendorRequestDTO** | [**SecureVendorRequestDTO**](SecureVendorRequestDTO.md)| SecureVendorRequestDTO | 

### Return type

[**VendorResponseDTO**](VendorResponseDTO.md)

### Authorization

[x-api-key](../README.md#x-api-key), [x-app-key](../README.md#x-app-key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## vendorapiSecureMerchantsVendorsEditPost

> SecureVendorResponseDTO vendorapiSecureMerchantsVendorsEditPost(xApiKey, xAppKey, xVersion, origin, secureVendorUpdateRequestDTO)

This API Updates the existing vendor

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

let apiInstance = new SecureApi.SecureVendorManagementApi();
let xApiKey = "xApiKey_example"; // String | an authorization header
let xAppKey = "xAppKey_example"; // String | an authorization header
let xVersion = 3.4; // Number | x-version
let origin = "origin_example"; // String | origin
let secureVendorUpdateRequestDTO = new SecureApi.SecureVendorUpdateRequestDTO(); // SecureVendorUpdateRequestDTO | SecureVendorUpdateRequestDTO
apiInstance.vendorapiSecureMerchantsVendorsEditPost(xApiKey, xAppKey, xVersion, origin, secureVendorUpdateRequestDTO, (error, data, response) => {
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
 **secureVendorUpdateRequestDTO** | [**SecureVendorUpdateRequestDTO**](SecureVendorUpdateRequestDTO.md)| SecureVendorUpdateRequestDTO | 

### Return type

[**SecureVendorResponseDTO**](SecureVendorResponseDTO.md)

### Authorization

[x-api-key](../README.md#x-api-key), [x-app-key](../README.md#x-app-key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## vendorapiSecureMerchantsVendorsPost

> SecureVendorResponseDTO vendorapiSecureMerchantsVendorsPost(xApiKey, xAppKey, xVersion, origin, vendorRequestDTO)

This API creates vendor into system

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

let apiInstance = new SecureApi.SecureVendorManagementApi();
let xApiKey = "xApiKey_example"; // String | an authorization header
let xAppKey = "xAppKey_example"; // String | an authorization header
let xVersion = 3.4; // Number | x-version
let origin = "origin_example"; // String | origin
let vendorRequestDTO = new SecureApi.VendorRequestDTO(); // VendorRequestDTO | VendorRequestDTO
apiInstance.vendorapiSecureMerchantsVendorsPost(xApiKey, xAppKey, xVersion, origin, vendorRequestDTO, (error, data, response) => {
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
 **vendorRequestDTO** | [**VendorRequestDTO**](VendorRequestDTO.md)| VendorRequestDTO | 

### Return type

[**SecureVendorResponseDTO**](SecureVendorResponseDTO.md)

### Authorization

[x-api-key](../README.md#x-api-key), [x-app-key](../README.md#x-app-key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## vendorapiSecureMerchantsVendorsSearchPost

> PageVendorResponseDTO vendorapiSecureMerchantsVendorsSearchPost(xApiKey, xAppKey, xVersion, origin, opts)

This API returns list of all the Vendors of Merchant

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

let apiInstance = new SecureApi.SecureVendorManagementApi();
let xApiKey = "xApiKey_example"; // String | an authorization header
let xAppKey = "xAppKey_example"; // String | an authorization header
let xVersion = 3.4; // Number | x-version
let origin = "origin_example"; // String | origin
let opts = {
  'paymentMethodType': "paymentMethodType_example", // String | Set paymentMethodType
  'attention': "attention_example", // String | Set attention
  'vendorId': "vendorId_example", // String | Set vendorId
  'vendorName': "vendorName_example", // String | Set vendorName
  'vendorStatus': "vendorStatus_example", // String | Set vendorStatus
  'createdBy': "createdBy_example", // String | Set createdBy
  'startDate': "startDate_example", // String | set start Date
  'endDate': "endDate_example", // String | set end Date
  'pageSize': 3.4, // Number | Set PageSize
  'searchText': "searchText_example", // String | search Text
  'sortField': "sortField_example", // String | Set SortField
  'startRow': "startRow_example", // String | Set StartRow
  'asc': true // Boolean | Set Asc
};
apiInstance.vendorapiSecureMerchantsVendorsSearchPost(xApiKey, xAppKey, xVersion, origin, opts, (error, data, response) => {
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
 **paymentMethodType** | **String**| Set paymentMethodType | [optional] 
 **attention** | **String**| Set attention | [optional] 
 **vendorId** | **String**| Set vendorId | [optional] 
 **vendorName** | **String**| Set vendorName | [optional] 
 **vendorStatus** | **String**| Set vendorStatus | [optional] 
 **createdBy** | **String**| Set createdBy | [optional] 
 **startDate** | **String**| set start Date | [optional] 
 **endDate** | **String**| set end Date | [optional] 
 **pageSize** | **Number**| Set PageSize | [optional] 
 **searchText** | **String**| search Text | [optional] 
 **sortField** | **String**| Set SortField | [optional] 
 **startRow** | **String**| Set StartRow | [optional] 
 **asc** | **Boolean**| Set Asc | [optional] 

### Return type

[**PageVendorResponseDTO**](PageVendorResponseDTO.md)

### Authorization

[x-api-key](../README.md#x-api-key), [x-app-key](../README.md#x-app-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## vendorapiSecureMerchantsVendorsSuspendPost

> vendorapiSecureMerchantsVendorsSuspendPost(xApiKey, xAppKey, xVersion, origin, secureVendorStatusRequestDTO)

This API suspends vendor into system

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

let apiInstance = new SecureApi.SecureVendorManagementApi();
let xApiKey = "xApiKey_example"; // String | an authorization header
let xAppKey = "xAppKey_example"; // String | an authorization header
let xVersion = 3.4; // Number | x-version
let origin = "origin_example"; // String | origin
let secureVendorStatusRequestDTO = new SecureApi.SecureVendorStatusRequestDTO(); // SecureVendorStatusRequestDTO | SecureVendorStatusRequestDTO
apiInstance.vendorapiSecureMerchantsVendorsSuspendPost(xApiKey, xAppKey, xVersion, origin, secureVendorStatusRequestDTO, (error, data, response) => {
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
 **secureVendorStatusRequestDTO** | [**SecureVendorStatusRequestDTO**](SecureVendorStatusRequestDTO.md)| SecureVendorStatusRequestDTO | 

### Return type

null (empty response body)

### Authorization

[x-api-key](../README.md#x-api-key), [x-app-key](../README.md#x-app-key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## vendorapiSecureMerchantsVendorsTimelinePost

> [VendorTimelineResponseListInner] vendorapiSecureMerchantsVendorsTimelinePost(xApiKey, xAppKey, xVersion, origin, secureVendorTimelineRequestDTO)

This API gets timeline of particular vendor

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

let apiInstance = new SecureApi.SecureVendorManagementApi();
let xApiKey = "xApiKey_example"; // String | an authorization header
let xAppKey = "xAppKey_example"; // String | an authorization header
let xVersion = 3.4; // Number | x-version
let origin = "origin_example"; // String | origin
let secureVendorTimelineRequestDTO = new SecureApi.SecureVendorTimelineRequestDTO(); // SecureVendorTimelineRequestDTO | SecureVendorTimelineRequestDTO
apiInstance.vendorapiSecureMerchantsVendorsTimelinePost(xApiKey, xAppKey, xVersion, origin, secureVendorTimelineRequestDTO, (error, data, response) => {
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
 **secureVendorTimelineRequestDTO** | [**SecureVendorTimelineRequestDTO**](SecureVendorTimelineRequestDTO.md)| SecureVendorTimelineRequestDTO | 

### Return type

[**[VendorTimelineResponseListInner]**](VendorTimelineResponseListInner.md)

### Authorization

[x-api-key](../README.md#x-api-key), [x-app-key](../README.md#x-app-key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## vendorapiSecureMerchantsVendorsUnsuspendPost

> vendorapiSecureMerchantsVendorsUnsuspendPost(xApiKey, xAppKey, xVersion, origin, secureVendorStatusRequestDTO)

This API unsuspends vendor into system

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

let apiInstance = new SecureApi.SecureVendorManagementApi();
let xApiKey = "xApiKey_example"; // String | an authorization header
let xAppKey = "xAppKey_example"; // String | an authorization header
let xVersion = 3.4; // Number | x-version
let origin = "origin_example"; // String | origin
let secureVendorStatusRequestDTO = new SecureApi.SecureVendorStatusRequestDTO(); // SecureVendorStatusRequestDTO | SecureVendorStatusRequestDTO
apiInstance.vendorapiSecureMerchantsVendorsUnsuspendPost(xApiKey, xAppKey, xVersion, origin, secureVendorStatusRequestDTO, (error, data, response) => {
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
 **secureVendorStatusRequestDTO** | [**SecureVendorStatusRequestDTO**](SecureVendorStatusRequestDTO.md)| SecureVendorStatusRequestDTO | 

### Return type

null (empty response body)

### Authorization

[x-api-key](../README.md#x-api-key), [x-app-key](../README.md#x-app-key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

