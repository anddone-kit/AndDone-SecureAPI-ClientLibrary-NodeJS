# SecureApi.SecureRefundsApi

All URIs are relative to *https://api.uat.anddone.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**secureRefundsEligibilityPost**](SecureRefundsApi.md#secureRefundsEligibilityPost) | **POST** /secure/refunds/eligibility | This API return refund eligibility of a transaction.
[**secureRefundsPost**](SecureRefundsApi.md#secureRefundsPost) | **POST** /secure/refunds | This API will refund a transaction which has been settled by the processor.



## secureRefundsEligibilityPost

> RefundEligibility secureRefundsEligibilityPost(xApiKey, xAppKey, xVersion, origin, transactionRefundEligibilityRequest)

This API return refund eligibility of a transaction.

### Example

```javascript
import SecureApi from 'secure_api';

let apiInstance = new SecureApi.SecureRefundsApi();
let xApiKey = "xApiKey_example"; // String | an authorization header
let xAppKey = "xAppKey_example"; // String | an authorization header
let xVersion = 3.4; // Number | x-version
let origin = "origin_example"; // String | origin
let transactionRefundEligibilityRequest = new SecureApi.TransactionRefundEligibilityRequest(); // TransactionRefundEligibilityRequest | refund Detail
apiInstance.secureRefundsEligibilityPost(xApiKey, xAppKey, xVersion, origin, transactionRefundEligibilityRequest, (error, data, response) => {
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
 **transactionRefundEligibilityRequest** | [**TransactionRefundEligibilityRequest**](TransactionRefundEligibilityRequest.md)| refund Detail | 

### Return type

[**RefundEligibility**](RefundEligibility.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## secureRefundsPost

> SecureTransactionDetailDTO secureRefundsPost(xApiKey, xAppKey, xVersion, origin, secureTransactionRefundRequest)

This API will refund a transaction which has been settled by the processor.

### Example

```javascript
import SecureApi from 'secure_api';

let apiInstance = new SecureApi.SecureRefundsApi();
let xApiKey = "xApiKey_example"; // String | an authorization header
let xAppKey = "xAppKey_example"; // String | an authorization header
let xVersion = 3.4; // Number | x-version
let origin = "origin_example"; // String | origin
let secureTransactionRefundRequest = new SecureApi.SecureTransactionRefundRequest(); // SecureTransactionRefundRequest | Refund Detail
apiInstance.secureRefundsPost(xApiKey, xAppKey, xVersion, origin, secureTransactionRefundRequest, (error, data, response) => {
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
 **secureTransactionRefundRequest** | [**SecureTransactionRefundRequest**](SecureTransactionRefundRequest.md)| Refund Detail | 

### Return type

[**SecureTransactionDetailDTO**](SecureTransactionDetailDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

