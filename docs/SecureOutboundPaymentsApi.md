# SecureApi.SecureOutboundPaymentsApi

All URIs are relative to *https://api.uat.anddone.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**vendorapiSecureOutboundPaymentsTimelinesPost**](SecureOutboundPaymentsApi.md#vendorapiSecureOutboundPaymentsTimelinesPost) | **POST** /vendorapi/secure/outboundPayments/timelines | This API gets outbound payment timelines
[**vendorapiSecureOutboundpaymentsCancelPost**](SecureOutboundPaymentsApi.md#vendorapiSecureOutboundpaymentsCancelPost) | **POST** /vendorapi/secure/outboundpayments/cancel | This API cancel outbound payment request
[**vendorapiSecureOutboundpaymentsDetailPost**](SecureOutboundPaymentsApi.md#vendorapiSecureOutboundpaymentsDetailPost) | **POST** /vendorapi/secure/outboundpayments/detail | This API fetch outbound payment by paymentId
[**vendorapiSecureOutboundpaymentsPost**](SecureOutboundPaymentsApi.md#vendorapiSecureOutboundpaymentsPost) | **POST** /vendorapi/secure/outboundpayments | This API creates outbound payment request
[**vendorapiSecureOutboundpaymentsSearchPost**](SecureOutboundPaymentsApi.md#vendorapiSecureOutboundpaymentsSearchPost) | **POST** /vendorapi/secure/outboundpayments/search | This API gets all outbound payment



## vendorapiSecureOutboundPaymentsTimelinesPost

> [OutboundPaymentTimelineResponseDTOInner] vendorapiSecureOutboundPaymentsTimelinesPost(xApiKey, xAppKey, xVersion, origin, paymentTimeLineRequestDto)

This API gets outbound payment timelines

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

let apiInstance = new SecureApi.SecureOutboundPaymentsApi();
let xApiKey = "xApiKey_example"; // String | an authorization header
let xAppKey = "xAppKey_example"; // String | an authorization header
let xVersion = 3.4; // Number | x-version
let origin = "origin_example"; // String | origin
let paymentTimeLineRequestDto = new SecureApi.PaymentTimeLineRequestDto(); // PaymentTimeLineRequestDto | PaymentTimeLineRequestDto
apiInstance.vendorapiSecureOutboundPaymentsTimelinesPost(xApiKey, xAppKey, xVersion, origin, paymentTimeLineRequestDto, (error, data, response) => {
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
 **paymentTimeLineRequestDto** | [**PaymentTimeLineRequestDto**](PaymentTimeLineRequestDto.md)| PaymentTimeLineRequestDto | 

### Return type

[**[OutboundPaymentTimelineResponseDTOInner]**](OutboundPaymentTimelineResponseDTOInner.md)

### Authorization

[x-api-key](../README.md#x-api-key), [x-app-key](../README.md#x-app-key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## vendorapiSecureOutboundpaymentsCancelPost

> vendorapiSecureOutboundpaymentsCancelPost(xApiKey, xAppKey, xVersion, origin, cancelPaymentRequestDTO)

This API cancel outbound payment request

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

let apiInstance = new SecureApi.SecureOutboundPaymentsApi();
let xApiKey = "xApiKey_example"; // String | an authorization header
let xAppKey = "xAppKey_example"; // String | an authorization header
let xVersion = 3.4; // Number | x-version
let origin = "origin_example"; // String | origin
let cancelPaymentRequestDTO = new SecureApi.CancelPaymentRequestDTO(); // CancelPaymentRequestDTO | CancelPaymentRequestDTO
apiInstance.vendorapiSecureOutboundpaymentsCancelPost(xApiKey, xAppKey, xVersion, origin, cancelPaymentRequestDTO, (error, data, response) => {
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
 **cancelPaymentRequestDTO** | [**CancelPaymentRequestDTO**](CancelPaymentRequestDTO.md)| CancelPaymentRequestDTO | 

### Return type

null (empty response body)

### Authorization

[x-api-key](../README.md#x-api-key), [x-app-key](../README.md#x-app-key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## vendorapiSecureOutboundpaymentsDetailPost

> PaymentDetailResponseDTO vendorapiSecureOutboundpaymentsDetailPost(xApiKey, xAppKey, xVersion, origin, paymentRequestDetailDTO)

This API fetch outbound payment by paymentId

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

let apiInstance = new SecureApi.SecureOutboundPaymentsApi();
let xApiKey = "xApiKey_example"; // String | an authorization header
let xAppKey = "xAppKey_example"; // String | an authorization header
let xVersion = 3.4; // Number | x-version
let origin = "origin_example"; // String | origin
let paymentRequestDetailDTO = new SecureApi.PaymentRequestDetailDTO(); // PaymentRequestDetailDTO | PaymentRequestDetailDTO
apiInstance.vendorapiSecureOutboundpaymentsDetailPost(xApiKey, xAppKey, xVersion, origin, paymentRequestDetailDTO, (error, data, response) => {
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
 **paymentRequestDetailDTO** | [**PaymentRequestDetailDTO**](PaymentRequestDetailDTO.md)| PaymentRequestDetailDTO | 

### Return type

[**PaymentDetailResponseDTO**](PaymentDetailResponseDTO.md)

### Authorization

[x-api-key](../README.md#x-api-key), [x-app-key](../README.md#x-app-key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## vendorapiSecureOutboundpaymentsPost

> PaymentResponseDto vendorapiSecureOutboundpaymentsPost(xApiKey, xAppKey, xVersion, origin, paymentRequestDto)

This API creates outbound payment request

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

let apiInstance = new SecureApi.SecureOutboundPaymentsApi();
let xApiKey = "xApiKey_example"; // String | an authorization header
let xAppKey = "xAppKey_example"; // String | an authorization header
let xVersion = 3.4; // Number | x-version
let origin = "origin_example"; // String | origin
let paymentRequestDto = new SecureApi.PaymentRequestDto(); // PaymentRequestDto | PaymentRequestDto
apiInstance.vendorapiSecureOutboundpaymentsPost(xApiKey, xAppKey, xVersion, origin, paymentRequestDto, (error, data, response) => {
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
 **paymentRequestDto** | [**PaymentRequestDto**](PaymentRequestDto.md)| PaymentRequestDto | 

### Return type

[**PaymentResponseDto**](PaymentResponseDto.md)

### Authorization

[x-api-key](../README.md#x-api-key), [x-app-key](../README.md#x-app-key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## vendorapiSecureOutboundpaymentsSearchPost

> PagePaymentListResponseDTO vendorapiSecureOutboundpaymentsSearchPost(xApiKey, xAppKey, xVersion, origin, opts)

This API gets all outbound payment

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

let apiInstance = new SecureApi.SecureOutboundPaymentsApi();
let xApiKey = "xApiKey_example"; // String | an authorization header
let xAppKey = "xAppKey_example"; // String | an authorization header
let xVersion = 3.4; // Number | x-version
let origin = "origin_example"; // String | origin
let opts = {
  'vendorId': "vendorId_example", // String | sets vendorId
  'paymentBasedId': "paymentBasedId_example", // String | sets paymentBasedId
  'paymentId': "paymentId_example", // String | sets paymentId
  'vendorName': "vendorName_example", // String | sets vendorName
  'paymentMethodType': "paymentMethodType_example", // String | sets paymentMethodType
  'paymentMethodStatus': "paymentMethodStatus_example", // String | sets paymentMethodStatus
  'amount': 3.4, // Number | sets amount
  'fromAmount': 3.4, // Number | sets fromAmount
  'toAmount': 3.4, // Number | sets toAmount
  'startDate': "startDate_example", // String | sets startDate
  'endDate': "endDate_example", // String | sets endDate
  'searchText': "searchText_example", // String | sets searchText
  'sortField': "sortField_example" // String | sets sortField
};
apiInstance.vendorapiSecureOutboundpaymentsSearchPost(xApiKey, xAppKey, xVersion, origin, opts, (error, data, response) => {
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
 **vendorId** | **String**| sets vendorId | [optional] 
 **paymentBasedId** | **String**| sets paymentBasedId | [optional] 
 **paymentId** | **String**| sets paymentId | [optional] 
 **vendorName** | **String**| sets vendorName | [optional] 
 **paymentMethodType** | **String**| sets paymentMethodType | [optional] 
 **paymentMethodStatus** | **String**| sets paymentMethodStatus | [optional] 
 **amount** | **Number**| sets amount | [optional] 
 **fromAmount** | **Number**| sets fromAmount | [optional] 
 **toAmount** | **Number**| sets toAmount | [optional] 
 **startDate** | **String**| sets startDate | [optional] 
 **endDate** | **String**| sets endDate | [optional] 
 **searchText** | **String**| sets searchText | [optional] 
 **sortField** | **String**| sets sortField | [optional] 

### Return type

[**PagePaymentListResponseDTO**](PagePaymentListResponseDTO.md)

### Authorization

[x-api-key](../README.md#x-api-key), [x-app-key](../README.md#x-app-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

