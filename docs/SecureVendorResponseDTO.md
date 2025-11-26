# SecureApi.SecureVendorResponseDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**paymentBasedId** | **String** |  | [optional] 
**legalEntityType** | **String** |  | [optional] 
**merchantId** | **String** |  | [optional] 
**vendorName** | **String** |  | [optional] 
**vendorAliasName** | **String** |  | [optional] 
**vendorDbName** | **String** |  | [optional] 
**paymentMethodType** | **String** |  | [optional] 
**notificationType** | **String** |  | [optional] 
**vendorNotes** | **String** |  | [optional] 
**phoneNumber** | **String** |  | [optional] 
**isMobileNumber** | **Boolean** |  | [optional] 
**useSameAsPhysicalAddress** | **Boolean** |  | [optional] 
**email** | **String** |  | [optional] 
**url** | **String** |  | [optional] 
**remittanceAddress** | [**SecureVendorResponseDTORemittanceAddress**](SecureVendorResponseDTORemittanceAddress.md) |  | [optional] 
**physicalAddress** | [**SecureVendorResponseDTORemittanceAddress**](SecureVendorResponseDTORemittanceAddress.md) |  | [optional] 
**vendorStatus** | **String** |  | [optional] 
**createdBy** | **String** |  | [optional] 
**modifiedBy** | **String** |  | [optional] 
**createdOn** | **String** |  | [optional] 
**modifiedOn** | **String** |  | [optional] 



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





## Enum: VendorStatusEnum


* `NA` (value: `"NA"`)

* `Reviewing` (value: `"Reviewing"`)

* `Approved` (value: `"Approved"`)

* `Denied` (value: `"Denied"`)

* `Suspended` (value: `"Suspended"`)

* `Deleted` (value: `"Deleted"`)




