# SecureApi.SecurePaymentsApi

All URIs are relative to *https://api.uat.anddone.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**securePaymentsExportPost**](SecurePaymentsApi.md#securePaymentsExportPost) | **POST** /secure/payments/export | This API gets Secure payment by search criteria for the merchant.
[**securePaymentsPost**](SecurePaymentsApi.md#securePaymentsPost) | **POST** /secure/payments | This API posts new Secure payment request for the merchant.
[**securePaymentsSearchPost**](SecurePaymentsApi.md#securePaymentsSearchPost) | **POST** /secure/payments/search | This API gets Secure payment by search criteria for the merchant.
[**securePaymentsdetailsPost**](SecurePaymentsApi.md#securePaymentsdetailsPost) | **POST** /secure/paymentsdetails | This API is used for getting details of Payments



## securePaymentsExportPost

> securePaymentsExportPost(xApiKey, xAppKey, xVersion, origin, opts)

This API gets Secure payment by search criteria for the merchant.

### Example

```javascript
import SecureApi from 'secure_api';

let apiInstance = new SecureApi.SecurePaymentsApi();
let xApiKey = "xApiKey_example"; // String | an authorization header
let xAppKey = "xAppKey_example"; // String | an authorization header
let xVersion = 3.4; // Number | x-version
let origin = "origin_example"; // String | origin
let opts = {
  'startDate': "startDate_example", // String | Start date for the transaction search
  'endDate': "endDate_example", // String | End date for the transaction search
  'transactionIds': "transactionIds_example", // String | Transaction identifier
  'referenceTransactionId': "referenceTransactionId_example", // String | Reference transaction identifier
  'transactionStatuses': "transactionStatuses_example", // String | Status of the transaction
  'customerIds': "customerIds_example", // String | Customer IDs associated with the transaction
  'transactionType': "transactionType_example", // String | Type of the transaction
  'authCode': "authCode_example", // String | Authorization code of the transaction
  'cardHolderName': "cardHolderName_example", // String | Name of the cardholder
  'shopperName': "shopperName_example", // String | ShopperName of the cardholder
  'amount': 3.4, // Number | Transaction amount
  'fromAmount': 3.4, // Number | Minimum transaction amount
  'toAmount': 3.4, // Number | Maximum transaction amount
  'channelTypes': "channelTypes_example", // String | Channel types used for the transaction
  'maskAccount': "maskAccount_example", // String | Masked account number
  'customerName': "customerName_example", // String | Name of the customer
  'recurringId': "recurringId_example", // String | Recurring payment ID
  'referenceNo': "referenceNo_example", // String | Reference number
  'exportToCsv': true, // Boolean | Export To Csv
  'exportToPDF': true, // Boolean | Export To PDF
  'transactionOrigins': "transactionOrigins_example", // String | Type of origin used in the transaction
  'transactionSourceType': "transactionSourceType_example", // String | Transaction source type of the transaction
  'sourceId': 56, // Number | Set SourceId
  'traceNumbers': "traceNumbers_example", // String | TraceNumbers associated with the transaction
  'binNumber': "binNumber_example", // String | BinNumber
  'processMethod': "processMethod_example", // String | Process Method used for the transaction
  'searchText': "searchText_example", // String | SearchText of the transaction
  'merchantReference': "merchantReference_example", // String | Merchant Reference of the transaction
  'additionalFields': "additionalFields_example", // String | Additional Fields
  'additionalFieldValue': "additionalFieldValue_example", // String | AdditionalFieldValue
  'paymentMethod': "paymentMethod_example", // String | Payment Method
  'accountAlias': "accountAlias_example", // String | Set AccountAlias
  'isPaid': true, // Boolean | Set IsPaid
  'paymentTypes': "paymentTypes_example", // String | Type of payment used in the transaction
  'merchantId': "merchantId_example", // String | Search with Merchant Id
  'paymentCategories': "paymentCategories_example", // String | Set PaymentCategories
  'suppressTechnologyFee': true, // Boolean | SuppressTechnologyFee
  'batchId': "batchId_example", // String | BatchId
  'sortField': "sortField_example", // String | SortField
  'startRow': 56, // Number | Set StartRow
  'pageSize': 56, // Number | Set PageSize
  'asc': true // Boolean | Set Asc
};
apiInstance.securePaymentsExportPost(xApiKey, xAppKey, xVersion, origin, opts, (error, data, response) => {
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
 **startDate** | **String**| Start date for the transaction search | [optional] 
 **endDate** | **String**| End date for the transaction search | [optional] 
 **transactionIds** | **String**| Transaction identifier | [optional] 
 **referenceTransactionId** | **String**| Reference transaction identifier | [optional] 
 **transactionStatuses** | **String**| Status of the transaction | [optional] 
 **customerIds** | **String**| Customer IDs associated with the transaction | [optional] 
 **transactionType** | **String**| Type of the transaction | [optional] 
 **authCode** | **String**| Authorization code of the transaction | [optional] 
 **cardHolderName** | **String**| Name of the cardholder | [optional] 
 **shopperName** | **String**| ShopperName of the cardholder | [optional] 
 **amount** | **Number**| Transaction amount | [optional] 
 **fromAmount** | **Number**| Minimum transaction amount | [optional] 
 **toAmount** | **Number**| Maximum transaction amount | [optional] 
 **channelTypes** | **String**| Channel types used for the transaction | [optional] 
 **maskAccount** | **String**| Masked account number | [optional] 
 **customerName** | **String**| Name of the customer | [optional] 
 **recurringId** | **String**| Recurring payment ID | [optional] 
 **referenceNo** | **String**| Reference number | [optional] 
 **exportToCsv** | **Boolean**| Export To Csv | [optional] 
 **exportToPDF** | **Boolean**| Export To PDF | [optional] 
 **transactionOrigins** | **String**| Type of origin used in the transaction | [optional] 
 **transactionSourceType** | **String**| Transaction source type of the transaction | [optional] 
 **sourceId** | **Number**| Set SourceId | [optional] 
 **traceNumbers** | **String**| TraceNumbers associated with the transaction | [optional] 
 **binNumber** | **String**| BinNumber | [optional] 
 **processMethod** | **String**| Process Method used for the transaction | [optional] 
 **searchText** | **String**| SearchText of the transaction | [optional] 
 **merchantReference** | **String**| Merchant Reference of the transaction | [optional] 
 **additionalFields** | **String**| Additional Fields | [optional] 
 **additionalFieldValue** | **String**| AdditionalFieldValue | [optional] 
 **paymentMethod** | **String**| Payment Method | [optional] 
 **accountAlias** | **String**| Set AccountAlias | [optional] 
 **isPaid** | **Boolean**| Set IsPaid | [optional] 
 **paymentTypes** | **String**| Type of payment used in the transaction | [optional] 
 **merchantId** | **String**| Search with Merchant Id | [optional] 
 **paymentCategories** | **String**| Set PaymentCategories | [optional] 
 **suppressTechnologyFee** | **Boolean**| SuppressTechnologyFee | [optional] 
 **batchId** | **String**| BatchId | [optional] 
 **sortField** | **String**| SortField | [optional] 
 **startRow** | **Number**| Set StartRow | [optional] 
 **pageSize** | **Number**| Set PageSize | [optional] 
 **asc** | **Boolean**| Set Asc | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/csv


## securePaymentsPost

> TransactionDetailResponse securePaymentsPost(xApiKey, xAppKey, xVersion, origin, paymentRequest)

This API posts new Secure payment request for the merchant.

### Example

```javascript
import SecureApi from 'secure_api';

let apiInstance = new SecureApi.SecurePaymentsApi();
let xApiKey = "xApiKey_example"; // String | an authorization header
let xAppKey = "xAppKey_example"; // String | an authorization header
let xVersion = 3.4; // Number | x-version
let origin = "origin_example"; // String | origin
let paymentRequest = new SecureApi.PaymentRequest(); // PaymentRequest | Payment Detail
apiInstance.securePaymentsPost(xApiKey, xAppKey, xVersion, origin, paymentRequest, (error, data, response) => {
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
 **paymentRequest** | [**PaymentRequest**](PaymentRequest.md)| Payment Detail | 

### Return type

[**TransactionDetailResponse**](TransactionDetailResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## securePaymentsSearchPost

> MerchantTransactionEntityResponse securePaymentsSearchPost(xApiKey, xAppKey, xVersion, origin, opts)

This API gets Secure payment by search criteria for the merchant.

### Example

```javascript
import SecureApi from 'secure_api';

let apiInstance = new SecureApi.SecurePaymentsApi();
let xApiKey = "xApiKey_example"; // String | an authorization header
let xAppKey = "xAppKey_example"; // String | an authorization header
let xVersion = 3.4; // Number | x-version
let origin = "origin_example"; // String | origin
let opts = {
  'startDate': "startDate_example", // String | Start date for the transaction search
  'endDate': "endDate_example", // String | End date for the transaction search
  'transactionIds': "transactionIds_example", // String | Transaction identifier
  'referenceTransactionId': "referenceTransactionId_example", // String | Reference transaction identifier
  'transactionStatuses': "transactionStatuses_example", // String | Status of the transaction
  'customerIds': "customerIds_example", // String | Customer IDs associated with the transaction
  'transactionType': "transactionType_example", // String | Type of the transaction
  'authCode': "authCode_example", // String | Authorization code of the transaction
  'cardHolderName': "cardHolderName_example", // String | Name of the cardholder
  'shopperName': "shopperName_example", // String | ShopperName of the cardholder
  'amount': 3.4, // Number | Transaction amount
  'fromAmount': 3.4, // Number | Minimum transaction amount
  'toAmount': 3.4, // Number | Maximum transaction amount
  'channelTypes': "channelTypes_example", // String | Channel types used for the transaction
  'maskAccount': "maskAccount_example", // String | Masked account number
  'customerName': "customerName_example", // String | Name of the customer
  'recurringId': "recurringId_example", // String | Recurring payment ID
  'referenceNo': "referenceNo_example", // String | Reference number
  'exportToCsv': true, // Boolean | Export To Csv
  'exportToPDF': true, // Boolean | Export To PDF
  'transactionOrigins': "transactionOrigins_example", // String | Type of origin used in the transaction
  'transactionSourceType': "transactionSourceType_example", // String | Transaction source type of the transaction
  'sourceId': 56, // Number | Set SourceId
  'traceNumbers': "traceNumbers_example", // String | TraceNumbers associated with the transaction
  'binNumber': "binNumber_example", // String | BinNumber
  'processMethod': "processMethod_example", // String | Process Method used for the transaction
  'searchText': "searchText_example", // String | SearchText of the transaction
  'merchantReference': "merchantReference_example", // String | Merchant Reference of the transaction
  'additionalFields': "additionalFields_example", // String | Additional Fields
  'additionalFieldValue': "additionalFieldValue_example", // String | AdditionalFieldValue
  'paymentMethod': "paymentMethod_example", // String | Payment Method
  'accountAlias': "accountAlias_example", // String | Set AccountAlias
  'isPaid': true, // Boolean | Set IsPaid
  'paymentTypes': "paymentTypes_example", // String | Type of payment used in the transaction
  'merchantId': "merchantId_example", // String | Search with Merchant Id
  'paymentCategories': "paymentCategories_example", // String | Set PaymentCategories
  'suppressTechnologyFee': true, // Boolean | SuppressTechnologyFee
  'batchId': "batchId_example", // String | BatchId
  'transactionsCount': true, // Boolean | Set whether to return only the transactions count
  'sortField': "sortField_example", // String | SortField
  'startRow': 56, // Number | Set StartRow
  'pageSize': 56, // Number | Set PageSize
  'asc': true // Boolean | Set Asc
};
apiInstance.securePaymentsSearchPost(xApiKey, xAppKey, xVersion, origin, opts, (error, data, response) => {
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
 **startDate** | **String**| Start date for the transaction search | [optional] 
 **endDate** | **String**| End date for the transaction search | [optional] 
 **transactionIds** | **String**| Transaction identifier | [optional] 
 **referenceTransactionId** | **String**| Reference transaction identifier | [optional] 
 **transactionStatuses** | **String**| Status of the transaction | [optional] 
 **customerIds** | **String**| Customer IDs associated with the transaction | [optional] 
 **transactionType** | **String**| Type of the transaction | [optional] 
 **authCode** | **String**| Authorization code of the transaction | [optional] 
 **cardHolderName** | **String**| Name of the cardholder | [optional] 
 **shopperName** | **String**| ShopperName of the cardholder | [optional] 
 **amount** | **Number**| Transaction amount | [optional] 
 **fromAmount** | **Number**| Minimum transaction amount | [optional] 
 **toAmount** | **Number**| Maximum transaction amount | [optional] 
 **channelTypes** | **String**| Channel types used for the transaction | [optional] 
 **maskAccount** | **String**| Masked account number | [optional] 
 **customerName** | **String**| Name of the customer | [optional] 
 **recurringId** | **String**| Recurring payment ID | [optional] 
 **referenceNo** | **String**| Reference number | [optional] 
 **exportToCsv** | **Boolean**| Export To Csv | [optional] 
 **exportToPDF** | **Boolean**| Export To PDF | [optional] 
 **transactionOrigins** | **String**| Type of origin used in the transaction | [optional] 
 **transactionSourceType** | **String**| Transaction source type of the transaction | [optional] 
 **sourceId** | **Number**| Set SourceId | [optional] 
 **traceNumbers** | **String**| TraceNumbers associated with the transaction | [optional] 
 **binNumber** | **String**| BinNumber | [optional] 
 **processMethod** | **String**| Process Method used for the transaction | [optional] 
 **searchText** | **String**| SearchText of the transaction | [optional] 
 **merchantReference** | **String**| Merchant Reference of the transaction | [optional] 
 **additionalFields** | **String**| Additional Fields | [optional] 
 **additionalFieldValue** | **String**| AdditionalFieldValue | [optional] 
 **paymentMethod** | **String**| Payment Method | [optional] 
 **accountAlias** | **String**| Set AccountAlias | [optional] 
 **isPaid** | **Boolean**| Set IsPaid | [optional] 
 **paymentTypes** | **String**| Type of payment used in the transaction | [optional] 
 **merchantId** | **String**| Search with Merchant Id | [optional] 
 **paymentCategories** | **String**| Set PaymentCategories | [optional] 
 **suppressTechnologyFee** | **Boolean**| SuppressTechnologyFee | [optional] 
 **batchId** | **String**| BatchId | [optional] 
 **transactionsCount** | **Boolean**| Set whether to return only the transactions count | [optional] 
 **sortField** | **String**| SortField | [optional] 
 **startRow** | **Number**| Set StartRow | [optional] 
 **pageSize** | **Number**| Set PageSize | [optional] 
 **asc** | **Boolean**| Set Asc | [optional] 

### Return type

[**MerchantTransactionEntityResponse**](MerchantTransactionEntityResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## securePaymentsdetailsPost

> TransactionPaymentResponse securePaymentsdetailsPost(xApiKey, xAppKey, xVersion, origin, securePaymentDetailsRequest)

This API is used for getting details of Payments

### Example

```javascript
import SecureApi from 'secure_api';

let apiInstance = new SecureApi.SecurePaymentsApi();
let xApiKey = "xApiKey_example"; // String | an authorization header
let xAppKey = "xAppKey_example"; // String | an authorization header
let xVersion = 3.4; // Number | x-version
let origin = "origin_example"; // String | origin
let securePaymentDetailsRequest = new SecureApi.SecurePaymentDetailsRequest(); // SecurePaymentDetailsRequest | Payment Details Request
apiInstance.securePaymentsdetailsPost(xApiKey, xAppKey, xVersion, origin, securePaymentDetailsRequest, (error, data, response) => {
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
 **securePaymentDetailsRequest** | [**SecurePaymentDetailsRequest**](SecurePaymentDetailsRequest.md)| Payment Details Request | 

### Return type

[**TransactionPaymentResponse**](TransactionPaymentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

