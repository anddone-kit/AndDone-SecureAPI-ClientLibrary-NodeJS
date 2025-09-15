# SecureApi.TransactionPaymentResponseAchTenderInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bankName** | **String** |  | [optional] 
**routingNumber** | **String** |  | [optional] 
**accountType** | **String** |  | [optional] 
**checkType** | **String** |  | [optional] 
**checkNumber** | **String** |  | [optional] 
**nameOnCheck** | **String** |  | [optional] 
**accountHolderName** | **String** |  | [optional] 
**accountCategory** | **String** |  | [optional] 
**captureAmount** | **Number** |  | [optional] 
**amount** | **Number** |  | [optional] 
**convenienceAmount** | **Number** |  | [optional] 
**binNumber** | **String** |  | [optional] 
**adjustmentPercentValue** | **Number** |  | [optional] 
**adjustmentFixedValue** | **Number** |  | [optional] 
**adjustmentAmount** | **Number** |  | [optional] 
**adjustmentDisplayName** | **String** |  | [optional] 
**adjustmentDescriptorMessage** | **String** |  | [optional] 
**paymentAdjustmentType** | **String** |  | [optional] 
**preAuthCode** | **String** |  | [optional] 
**maskAccount** | **String** |  | [optional] 
**accountToken** | **String** |  | [optional] 
**accountTokenMessage** | **String** |  | [optional] 
**createAccountToken** | **Boolean** |  | [optional] 
**commissionType** | [**TransactionPaymentResponseAchTenderInfoCommissionType**](TransactionPaymentResponseAchTenderInfoCommissionType.md) |  | [optional] 
**commissionValue** | **Number** |  | [optional] 
**commissionFixedValue** | **Number** |  | [optional] 



## Enum: AccountCategoryEnum


* `Personal` (value: `"Personal"`)

* `Business` (value: `"Business"`)





## Enum: PaymentAdjustmentTypeEnum


* `None` (value: `"None"`)

* `CashIncentive` (value: `"CashIncentive"`)

* `Surcharge` (value: `"Surcharge"`)

* `ConvenienceFee` (value: `"ConvenienceFee"`)

* `CashDiscount` (value: `"CashDiscount"`)




