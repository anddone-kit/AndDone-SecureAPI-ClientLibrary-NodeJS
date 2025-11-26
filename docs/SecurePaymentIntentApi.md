# SecureApi.SecurePaymentIntentApi

All URIs are relative to *https://api.uat.anddone.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**securePaymentintentsExpirationsPost**](SecurePaymentIntentApi.md#securePaymentintentsExpirationsPost) | **POST** /secure/paymentintents/expirations | This API expires the payment Intent or link.
[**securePaymentintentsPost**](SecurePaymentIntentApi.md#securePaymentintentsPost) | **POST** /secure/paymentintents | This API is use to create Secure payment Intent.



## securePaymentintentsExpirationsPost

> PaymentIntentExpiresResponse securePaymentintentsExpirationsPost(xApiKey, xAppKey, xVersion, origin, id)

This API expires the payment Intent or link.

### Example

```javascript
import SecureApi from 'secure_api';

let apiInstance = new SecureApi.SecurePaymentIntentApi();
let xApiKey = "xApiKey_example"; // String | an authorization header
let xAppKey = "xAppKey_example"; // String | an authorization header
let xVersion = 3.4; // Number | x-version
let origin = "origin_example"; // String | origin
let id = "id_example"; // String | Payment Intent Id
apiInstance.securePaymentintentsExpirationsPost(xApiKey, xAppKey, xVersion, origin, id, (error, data, response) => {
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
 **id** | **String**| Payment Intent Id | 

### Return type

[**PaymentIntentExpiresResponse**](PaymentIntentExpiresResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## securePaymentintentsPost

> PaymentIntentResponse securePaymentintentsPost(xApiKey, xAppKey, xVersion, origin, opts)

This API is use to create Secure payment Intent.

### Example

```javascript
import SecureApi from 'secure_api';

let apiInstance = new SecureApi.SecurePaymentIntentApi();
let xApiKey = "xApiKey_example"; // String | an authorization header
let xAppKey = "xAppKey_example"; // String | an authorization header
let xVersion = 3.4; // Number | x-version
let origin = "origin_example"; // String | origin
let opts = {
  'paymentIntentRequest': new SecureApi.PaymentIntentRequest() // PaymentIntentRequest | Payment Intent Request
};
apiInstance.securePaymentintentsPost(xApiKey, xAppKey, xVersion, origin, opts, (error, data, response) => {
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
 **paymentIntentRequest** | [**PaymentIntentRequest**](PaymentIntentRequest.md)| Payment Intent Request | [optional] 

### Return type

[**PaymentIntentResponse**](PaymentIntentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

