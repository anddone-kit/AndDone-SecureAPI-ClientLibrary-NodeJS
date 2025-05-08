# SecureApi.VendorRequestDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vendorName** | **String** |  | 
**vendorAliasName** | **String** |  | [optional] 
**vendorDbName** | **String** | Database name of the vendor | 
**legalEntityType** | **String** |  | 
**paymentMethodType** | **String** |  | 
**notificationType** | **String** |  | 
**vendorNotes** | **String** |  | [optional] 
**phoneNumber** | **String** |  | 
**isMobileNumber** | **Boolean** |  | [optional] 
**useSameAsPhysicalAddress** | **Boolean** |  | [optional] 
**email** | **String** |  | 
**url** | **String** |  | [optional] 
**remittanceAddress** | [**VendorRequestDTORemittanceAddress**](VendorRequestDTORemittanceAddress.md) |  | [optional] 
**physicalAddress** | [**VendorRequestDTOPhysicalAddress**](VendorRequestDTOPhysicalAddress.md) |  | 



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




