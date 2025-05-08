# SecureApi.SecureTransactionDetailDTOTenderInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bankName** | **String** |  | [optional] 
**routingNumber** | **String** |  | [optional] 
**accountType** | **String** |  | [optional] 
**checkType** | **String** |  | [optional] 
**checkNumber** | **String** |  | [optional] 
**accountCategory** | **String** |  | [optional] 
**accountHolderName** | **String** |  | [optional] 
**nameOnCheck** | **String** |  | [optional] 
**cardHolderName** | **String** |  | [optional] 
**cardType** | **String** |  | [optional] 
**maskCardNumber** | **String** |  | [optional] 
**binNumber** | **String** |  | [optional] 
**cardExpiry** | **String** |  | [optional] 
**cVData** | **String** |  | [optional] 
**cVDataStatus** | **String** |  | [optional] 
**isCheckCard** | **Boolean** |  | [optional] 
**captureAmount** | **Number** |  | [optional] 
**amount** | **Number** |  | [optional] 
**convenienceAmount** | **Number** |  | [optional] 
**adjustmentPercentValue** | **Number** |  | [optional] 
**adjustmentFixedValue** | **Number** |  | [optional] 
**adjustmentAmount** | **Number** |  | [optional] 
**adjustmentDisplayName** | **String** |  | [optional] 
**adjustmentDescriptorMessage** | **String** |  | [optional] 
**paymentAdjustmentType** | **String** |  | [optional] 
**preAuthCode** | **String** |  | [optional] 
**maskAccount** | **String** |  | [optional] 
**epb** | **String** |  | [optional] 
**ksn** | **String** |  | [optional] 
**cashBackAmount** | **Number** |  | [optional] 
**accountToken** | **String** |  | [optional] 
**accountTokenMessage** | **String** |  | [optional] 
**createAccountToken** | **Boolean** |  | [optional] 
**commissionType** | **String** |  | [optional] 
**commissionValue** | **Number** |  | [optional] 
**commissionFixedValue** | **Number** |  | [optional] 



## Enum: AccountCategoryEnum


* `Unknown` (value: `"Unknown"`)

* `Personal` (value: `"Personal"`)

* `Business` (value: `"Business"`)





## Enum: PaymentAdjustmentTypeEnum


* `None` (value: `"None"`)

* `CashIncentive` (value: `"CashIncentive"`)

* `Surcharge` (value: `"Surcharge"`)

* `ConvenienceFee` (value: `"ConvenienceFee"`)

* `CashDiscount` (value: `"CashDiscount"`)





## Enum: CommissionTypeEnum


* `Fixed` (value: `"Fixed"`)

* `Percentage` (value: `"Percentage"`)




