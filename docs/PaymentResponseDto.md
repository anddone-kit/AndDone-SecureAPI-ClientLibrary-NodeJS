# SecureApi.PaymentResponseDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**paymentId** | **String** |  | [optional] 
**merchantId** | **String** |  | [optional] 
**vendorId** | **String** |  | [optional] 
**paymentStatus** | **String** |  | [optional] 
**paymentMethodStatus** | **String** |  | [optional] 
**paymentMethod** | **String** |  | [optional] 
**amount** | **Number** |  | [optional] 
**data** | [**DataDto**](DataDto.md) |  | [optional] 
**bankAccountDetails** | **String** | JSON-encoded string containing bank account details | [optional] 
**vendorAddress** | **String** | JSON-encoded string containing vendor address | [optional] 



## Enum: PaymentStatusEnum


* `NA` (value: `"NA"`)

* `Created` (value: `"Created"`)

* `InProcess` (value: `"InProcess"`)

* `Success` (value: `"Success"`)

* `Cancelled` (value: `"Cancelled"`)

* `Failed` (value: `"Failed"`)

* `CancelRequested` (value: `"CancelRequested"`)





## Enum: PaymentMethodStatusEnum


* `NA` (value: `"NA"`)

* `Accepted` (value: `"Accepted"`)

* `PrintQueued` (value: `"PrintQueued"`)

* `Printed` (value: `"Printed"`)

* `Mailed` (value: `"Mailed"`)

* `Delivered` (value: `"Delivered"`)

* `Pdf` (value: `"Pdf"`)

* `Cancelled` (value: `"Cancelled"`)

* `Warning` (value: `"Warning"`)

* `Failed` (value: `"Failed"`)

* `Returned` (value: `"Returned"`)

* `Transit` (value: `"Transit"`)





## Enum: PaymentMethodEnum


* `Check` (value: `"Check"`)




