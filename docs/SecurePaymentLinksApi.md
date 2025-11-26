# SecureApi.SecurePaymentLinksApi

All URIs are relative to *https://api.uat.anddone.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**securePaymentlinksDetailsPost**](SecurePaymentLinksApi.md#securePaymentlinksDetailsPost) | **POST** /secure/paymentlinks/details | This API is used for getting Payment Links by PaymentLink ID
[**securePaymentlinksExpirationsPost**](SecurePaymentLinksApi.md#securePaymentlinksExpirationsPost) | **POST** /secure/paymentlinks/expirations | This API is used for to set expired payment link
[**securePaymentlinksIdPut**](SecurePaymentLinksApi.md#securePaymentlinksIdPut) | **PUT** /secure/paymentlinks/{id} | This API is used to update Payment Links
[**securePaymentlinksPost**](SecurePaymentLinksApi.md#securePaymentlinksPost) | **POST** /secure/paymentlinks | This API is used to create Payment Links



## securePaymentlinksDetailsPost

> PaymentLinkResponse securePaymentlinksDetailsPost(xApiKey, xAppKey, xVersion, origin, securePaymentLinkRequest)

This API is used for getting Payment Links by PaymentLink ID

### Example

```javascript
import SecureApi from 'secure_api';

let apiInstance = new SecureApi.SecurePaymentLinksApi();
let xApiKey = "xApiKey_example"; // String | an authorization header
let xAppKey = "xAppKey_example"; // String | an authorization header
let xVersion = 3.4; // Number | x-version
let origin = "origin_example"; // String | origin
let securePaymentLinkRequest = new SecureApi.SecurePaymentLinkRequest(); // SecurePaymentLinkRequest | Secure Payment Link Request
apiInstance.securePaymentlinksDetailsPost(xApiKey, xAppKey, xVersion, origin, securePaymentLinkRequest, (error, data, response) => {
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
 **securePaymentLinkRequest** | [**SecurePaymentLinkRequest**](SecurePaymentLinkRequest.md)| Secure Payment Link Request | 

### Return type

[**PaymentLinkResponse**](PaymentLinkResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## securePaymentlinksExpirationsPost

> PaymentLinkExpiresResponse securePaymentlinksExpirationsPost(xApiKey, xAppKey, xVersion, origin, opts)

This API is used for to set expired payment link

### Example

```javascript
import SecureApi from 'secure_api';

let apiInstance = new SecureApi.SecurePaymentLinksApi();
let xApiKey = "xApiKey_example"; // String | an authorization header
let xAppKey = "xAppKey_example"; // String | an authorization header
let xVersion = 3.4; // Number | x-version
let origin = "origin_example"; // String | origin
let opts = {
  'securePaymentLinkRequest': new SecureApi.SecurePaymentLinkRequest() // SecurePaymentLinkRequest | Secure Payment Link Request
};
apiInstance.securePaymentlinksExpirationsPost(xApiKey, xAppKey, xVersion, origin, opts, (error, data, response) => {
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
 **securePaymentLinkRequest** | [**SecurePaymentLinkRequest**](SecurePaymentLinkRequest.md)| Secure Payment Link Request | [optional] 

### Return type

[**PaymentLinkExpiresResponse**](PaymentLinkExpiresResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## securePaymentlinksIdPut

> PaymentLinkResponse securePaymentlinksIdPut(xApiKey, xAppKey, xVersion, origin, id, secureUpdatePaymentLinkRequest)

This API is used to update Payment Links

### Example

```javascript
import SecureApi from 'secure_api';

let apiInstance = new SecureApi.SecurePaymentLinksApi();
let xApiKey = "xApiKey_example"; // String | an authorization header
let xAppKey = "xAppKey_example"; // String | an authorization header
let xVersion = 3.4; // Number | x-version
let origin = "origin_example"; // String | origin
let id = "id_example"; // String | PaymentLink identifier
let secureUpdatePaymentLinkRequest = new SecureApi.SecureUpdatePaymentLinkRequest(); // SecureUpdatePaymentLinkRequest | Payment Link Request
apiInstance.securePaymentlinksIdPut(xApiKey, xAppKey, xVersion, origin, id, secureUpdatePaymentLinkRequest, (error, data, response) => {
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
 **id** | **String**| PaymentLink identifier | 
 **secureUpdatePaymentLinkRequest** | [**SecureUpdatePaymentLinkRequest**](SecureUpdatePaymentLinkRequest.md)| Payment Link Request | 

### Return type

[**PaymentLinkResponse**](PaymentLinkResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## securePaymentlinksPost

> PaymentLinkResponse securePaymentlinksPost(xApiKey, xAppKey, xVersion, origin, paymentLinkRequest)

This API is used to create Payment Links

### Example

```javascript
import SecureApi from 'secure_api';

let apiInstance = new SecureApi.SecurePaymentLinksApi();
let xApiKey = "xApiKey_example"; // String | an authorization header
let xAppKey = "xAppKey_example"; // String | an authorization header
let xVersion = 3.4; // Number | x-version
let origin = "origin_example"; // String | origin
let paymentLinkRequest = new SecureApi.PaymentLinkRequest(); // PaymentLinkRequest | Payment Link Request
apiInstance.securePaymentlinksPost(xApiKey, xAppKey, xVersion, origin, paymentLinkRequest, (error, data, response) => {
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
 **paymentLinkRequest** | [**PaymentLinkRequest**](PaymentLinkRequest.md)| Payment Link Request | 

### Return type

[**PaymentLinkResponse**](PaymentLinkResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

