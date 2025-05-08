# SecureApi.SecureTokenLinkByIdResponseTimeLineInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**tokenLinkId** | **String** |  | [optional] 
**merchantId** | **String** |  | [optional] 
**paymentLinkType** | **String** |  | [optional] 
**linkStatus** | **String** |  | [optional] 
**tokenLinkStatus** | **String** |  | [optional] 
**eventDate** | **String** |  | [optional] 



## Enum: PaymentLinkTypeEnum


* `NA` (value: `"NA"`)

* `PaymentLink` (value: `"PaymentLink"`)

* `PaymentIntent` (value: `"PaymentIntent"`)

* `TokenLink` (value: `"TokenLink"`)

* `Invoice` (value: `"Invoice"`)





## Enum: LinkStatusEnum


* `Created` (value: `"Created"`)

* `Enabled` (value: `"Enabled"`)

* `Disabled` (value: `"Disabled"`)

* `Expired` (value: `"Expired"`)

* `Paid` (value: `"Paid"`)

* `PaymentInitiated` (value: `"PaymentInitiated"`)

* `None` (value: `"None"`)





## Enum: TokenLinkStatusEnum


* `NA` (value: `"NA"`)

* `Created` (value: `"Created"`)

* `Completed` (value: `"Completed"`)

* `Expired` (value: `"Expired"`)

* `Invalidated` (value: `"Invalidated"`)

* `Failed` (value: `"Failed"`)




