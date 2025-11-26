import expect from 'expect.js';
import ApiClient from '../src/ApiClient.js';
import SecureRefundsApi from '../src/api/SecureRefundsApi.js';
const fs = require('fs');

// define global variable for api calls
var api = new SecureRefundsApi()

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

var opts = {};

// Eligibility
opts.transactionId = "161af9f0-2dc2-4973-b90e-d322e30a056c";

// Payment Token
// opts.paymentToken = "MxakMkkd";
// opts.type = "PaymentIntent";


var callback = function (error, data, response) {
    if (error) {
        console.error(error.response.body);
    } else {
        console.log('API called successfully. Returned data: ' + data.transactionId)
        console.log("response data: " + response.status);
    }
};
api.secureRefundsEligibilityPost(xApiKey, xAppKey, origin, xVersion, opts, callback);
// api.secureRefundsPost(xApiKey, xAppKey, xVersion, origin, opts, callback)