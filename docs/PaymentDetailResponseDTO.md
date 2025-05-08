# SecureApi.PaymentDetailResponseDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchantId** | **String** |  | [optional] 
**vendorId** | **String** |  | [optional] 
**vendorName** | **String** |  | [optional] 
**merchantDBAName** | **String** |  | [optional] 
**paymentId** | **String** |  | [optional] 
**checkNumber** | **Number** |  | [optional] 
**paymentMethod** | **String** |  | [optional] 
**amount** | **Number** |  | [optional] 
**bankName** | **String** |  | [optional] 
**bankAccountNumber** | **String** |  | [optional] 
**paymentStatus** | **String** |  | [optional] 
**paymentMethodStatus** | **String** |  | [optional] 
**remittanceData** | **String** |  | [optional] 



## Enum: PaymentMethodEnum


* `Check` (value: `"Check"`)





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




