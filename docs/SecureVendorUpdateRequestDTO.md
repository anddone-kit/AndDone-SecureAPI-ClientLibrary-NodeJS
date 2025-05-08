# SecureApi.SecureVendorUpdateRequestDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vendorId** | **String** |  | 
**vendorName** | **String** |  | [optional] 
**vendorAliasName** | **String** |  | [optional] 
**vendorDbName** | **String** | Database name of the vendor | [optional] 
**legalEntityType** | **String** |  | [optional] 
**paymentMethodType** | **String** |  | [optional] 
**notificationType** | **String** |  | [optional] 
**vendorNotes** | **String** |  | [optional] 
**phoneNumber** | **String** |  | [optional] 
**isMobileNumber** | **Boolean** |  | [optional] 
**useSameAsPhysicalAddress** | **Boolean** |  | [optional] 
**email** | **String** |  | [optional] 
**url** | **String** |  | [optional] 
**remittanceAddress** | [**SecureVendorUpdateRequestDTORemittanceAddress**](SecureVendorUpdateRequestDTORemittanceAddress.md) |  | [optional] 
**physicalAddress** | [**SecureVendorUpdateRequestDTORemittanceAddress**](SecureVendorUpdateRequestDTORemittanceAddress.md) |  | [optional] 



## Enum: LegalEntityTypeEnum


* `NA` (value: `"NA"`)

* `Corporation` (value: `"Corporation"`)

* `LimitedLiabilityCompany` (value: `"LimitedLiabilityCompany"`)

* `LimitedLiabilityPartnership` (value: `"LimitedLiabilityPartnership"`)

* `LimitedPartnership` (value: `"LimitedPartnership"`)

* `Partnership` (value: `"Partnership"`)

* `Individual` (value: `"Individual"`)





## Enum: PaymentMethodTypeEnum


* `Check` (value: `"Check"`)





## Enum: NotificationTypeEnum


* `NA` (value: `"NA"`)

* `Email` (value: `"Email"`)




