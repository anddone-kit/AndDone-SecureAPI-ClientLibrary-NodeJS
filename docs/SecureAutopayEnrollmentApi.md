# SecureApi.SecureAutopayEnrollmentApi

All URIs are relative to *https://api.uat.anddone.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**secureAutopayenrollmentPost**](SecureAutopayEnrollmentApi.md#secureAutopayenrollmentPost) | **POST** /secure/autopayenrollment | This API is used for Autopay Enrollment.



## secureAutopayenrollmentPost

> AutoPayEnrollmentResponse secureAutopayenrollmentPost(xApiKey, xAppKey, xVersion, origin, autoPayEnrollmentRequest)

This API is used for Autopay Enrollment.

### Example

```javascript
import SecureApi from 'secure_api';

let apiInstance = new SecureApi.SecureAutopayEnrollmentApi();
let xApiKey = "xApiKey_example"; // String | an authorization header
let xAppKey = "xAppKey_example"; // String | an authorization header
let xVersion = 3.4; // Number | x-version
let origin = "origin_example"; // String | origin
let autoPayEnrollmentRequest = new SecureApi.AutoPayEnrollmentRequest(); // AutoPayEnrollmentRequest | Autopay Enrollment Detail
apiInstance.secureAutopayenrollmentPost(xApiKey, xAppKey, xVersion, origin, autoPayEnrollmentRequest, (error, data, response) => {
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
 **autoPayEnrollmentRequest** | [**AutoPayEnrollmentRequest**](AutoPayEnrollmentRequest.md)| Autopay Enrollment Detail | 

### Return type

[**AutoPayEnrollmentResponse**](AutoPayEnrollmentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

