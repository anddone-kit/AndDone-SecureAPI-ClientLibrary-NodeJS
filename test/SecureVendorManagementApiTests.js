import SecureVendorManagementApi from '../src/api/SecureVendorManagementApi.js';
const fs = require('fs');

// define global variable for api calls
var api = new SecureVendorManagementApi()

// define global auth variables
fs.readFile('./config.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading JSON file:', err);
        return;
    }

    try {
        const jsonData = JSON.parse(data);
    } catch (parseError) {
        console.error('Error parsing JSON:', parseError);
    }
});

var xApiKey = jsonData.xApiKey;
var xAppKey = jsonData.xAppKey;
var xVersion = jsonData.xVersion;
var origin = jsonData.origin;

var optsCreate = {
  "vendorName": "Vendor Name",
  "vendorAliasName": "Alias",
  "vendorDbName": "DB Name",
  "legalEntityType": "Corporation",
  "paymentMethodType": "Check",
  "notificationType": "Email",
  "vendorNotes": "Some notes",
  "phoneNumber": "1234567890",
  "isMobileNumber": "true",
  "useSameAsPhysicalAddress": "true",
  "email": "vendor@example.com",
  "url": "https://vendor.com",
  "remittanceAddress": {
    "attention": "Attention",
    "addressLine1": "123 Main St",
    "addressLine2": "Apt 101",
    "city": "Pittsford",
    "state": "NJ",
    "country": "US",
    "postalCode": "12345",
    "addressSource": "Manual"
  },
  "physicalAddress": {
    "attention": "Attention 2",
    "addressLine1": "456 Main St",
    "addressLine2": "Apt 202",
    "city": "Pittsford",
    "state": "NJ",
    "country": "US",
    "postalCode": "54321",
    "addressSource": "Manual"
  }
};

var optsDetails = {
  "vendorId": "J8P6PBvm"
};

var optsEdit = {
  "vendorId": "J8P6PBvm",
  "paymentBasedId": "CPZdOm6xQ",
  "legalEntityType": "Corporation",
  "vendorName": "Vendor Name",
  "vendorAliasName": "Alias",
  "vendorDbName": "DB Name",
  "paymentMethodType": "Check",
  "notificationType": "Email",
  "vendorNotes": "Some notes",
  "phoneNumber": "1234567890",
  "isMobileNumber": "true",
  "useSameAsPhysicalAddress": "true",
  "email": "vendor@example.com",
  "url": "https://vendor.com",
  "remittanceAddress": {
    "attention": "Attention",
    "addressLine1": "123 Main St",
    "addressLine2": "Apt 101",
    "city": "Pittsford",
    "state": "NJ",
    "country": "US",
    "postalCode": "12345",
    "addressType": "Remittance",
    "addressSource": "Manual"
  },
  "physicalAddress": {
    "attention": "Attention 2",
    "addressLine1": "456 Main St",
    "addressLine2": "Apt 202",
    "city": "Pittsford",
    "state": "NJ",
    "country": "US",
    "postalCode": "54321",
    "addressType": "Correspondence",
    "addressSource": "Manual"
  }
};

var optsSearch = {
};

var optsSuspend = {
  "vendorId": "J8P6PBvm",
  "reason": "Need this action"
};

var optsUnsuspend = {
  "vendorId": "J8P6PBvm",
  "reason": "Need this action"
};

var optsTimeline = {
  "vendorId": "J8P6PBvm"
};

var optsDelete = {
  "vendorId": "J8P6PBvm",
  "reason": "Need this action"
};

var callback = function (error, data, response) {
    if (error) {
        console.error("The Error is: ", error.status);
        console.error(error.response.res.text);
        throw "Bad Request";
    } else {
        console.log("response data: " + response.status);
    }
};

api.vendorapiSecureMerchantsVendorsPost(xApiKey, xAppKey, xVersion, origin, optsCreate, callback);
api.vendorapiSecureMerchantsVendorsDetailsPost(xApiKey, xAppKey, xVersion, origin, optsDetails, callback);
api.vendorapiSecureMerchantsVendorsEditPost(xApiKey, xAppKey, xVersion, origin, optsEdit, callback);
api.vendorapiSecureMerchantsVendorsSearchPost(xApiKey, xAppKey, xVersion, origin, optsSearch, callback);
api.vendorapiSecureMerchantsVendorsSuspendPost(xApiKey, xAppKey, xVersion, origin, optsSuspend, callback);
api.vendorapiSecureMerchantsVendorsUnsuspendPost(xApiKey, xAppKey, xVersion, origin, optsUnsuspend, callback);
api.vendorapiSecureMerchantsVendorsTimelinePost(xApiKey, xAppKey, xVersion, origin, optsTimeline, callback);
api.vendorapiSecureMerchantsVendorsDeletePost(xApiKey, xAppKey, xVersion, origin, optsDelete, callback);