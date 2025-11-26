import SecureOrumApi from '../src/api/SecureOrumApi.js';
const fs = require('fs');

// define global variable for api calls
var api = new SecureOrumApi()

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

var optsVerify = {
    'verifyBankAccountRequest': {
        "accountNumber": "123456780",
        "routingNumber": "121000358",
        "accountHolderName": "John Doe",
        "statementDisplayName": "Johns Account",
        "bankAccountEntity": {
            "id": 1,
            "type": "Vendor"
        }
    }
};

var optsDetails = {
    'verificationEntityRequest': {
        "id": "220a5d64-b9c7-46c8-adb2-c13fe66abcb2"
    }
};

var callback = function (error, data, response) {
    if (error) {
        console.error("The Error is: ", error);
        // console.error(error.response.res.text);
        throw "Bad Request";
    } else {
        console.log("response data: " + response.status);
    }
};
api.secureBankaccountsVerifyPost(xApiKey, xAppKey, xVersion, origin, optsVerify, callback);
// api.secureBankaccountsDetailsPost(xApiKey, xAppKey, xVersion, origin, optsDetails, callback);