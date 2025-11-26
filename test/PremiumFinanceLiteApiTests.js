import expect from 'expect.js';
import ApiClient from '../src/ApiClient.js';
import SecurePremiumFinanceLiteApi from '../src/api/SecurePremiumFinanceLiteApi.js';
import PFLiteSecureQuoteRequest from '../src/model/PFLiteSecureQuoteRequest.js';
import PFLiteGetQuoteRequest from '../src/model/PFLiteGetQuoteRequest.js';
const fs = require('fs');


// define global variable for api calls
var api = new SecurePremiumFinanceLiteApi()

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

// define global test variables
var pfliteQuote = null;
var pflitePL = null;
var pfliteLink = null;
var statusGenerate = "";
var statusPL = "";
var statusLink = "";
var quoteKey = "";
var link = "";
var title = "NodeJS PFL PL - " + Date.now();

// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// create generate quote request
var opts = { 
    'pFLiteSecureQuoteRequest': {
        "merchantId": xAppKey,
        "merchant": {
            "contactName": "John Doe",
            "contactPhone": "0123456789"
        },
        "insured": {
            "firstName": "Jane",
            "lastName": "Smith",
            "mobilePhoneNumber": null,
            "faxNumber": null,
            "emailAddress": "test@email.com",
            "isCancellationWarningViaTextEnabled": false,
            "address": {
                "Address1": "1055",
                "Address2": "Broadway Blvd",
                "City": "Anchorage",
                "State": "AK",
                "Zip": "64105",
                "PhoneNumber": null
            }
        },
        "program": {
            "programId": 82262,
            "loanType": "Personal"
        },
        "policies": [
            {
                "premium": 20000,
                "effectiveDate": "05-01-2025 00:00:00",
                "expirationDate": "05-01-2026 00:00:00",
                "coverageType": "FIRE",
                "cancelDays": "Item20",
                "additionalFees": 0,
                // "minimumEarnedPercent": null,
                "policyNumber": "21128675311",
                "carrier": {
                    "name": "OCCIDENTAL FIRE & CASUALTY CO OF NO",
                    "bestNumber": 5555551234,
                    "uniqueId": 23248
                }
            }
        ]
    }
};

// create generate payment link request
var optsPL = {
  "quoteKey": "",
  "isPayInFull": true,
  "title": title,
  "paymentDescription": "FirstPayment",
  "expireIn": "300",
  "expireInUnit": "2",
  "customers": null,
  "callbackParameters": {
    "callbackApiUrl": "htttp://yahoo.com",
    "callbackMessage": "this is test message"
  },
  "referenceDataList": [
    {
      "referenceType": "PolicyNumber",
      "referenceNumber": "pol123",
      "referenceKey": null
    }
  ],
  "settings": {
    "selectedCustomerFields": "First Name,Last Name,Email,Phone",
    "additionalDetailsPreference": "1",
    "intent": {
      "paymentTypes": [
        "ACH",
        "CreditCard",
        "DebitCard"
      ]
    }
  }
};

// create get quote by payment link request
var optsLink = { 
    'pFLiteGetQuoteRequest': {
        "merchantToken": xAppKey,
        "paymentLinkId": ""
    }
};

// define callback function
var callback = function (error, data, response) {
    if (error) {
        console.error("The Error is: ", error.status);
        console.error(error.response.res.text);
        throw "Bad Request";
    } else {
        // log successful call
        console.log('PFL API called successfully. Status: ' + response.status);
        if (statusGenerate == "") {
            // generate quote finished, update variables
            statusGenerate = response.status;
            pfliteQuote = data;
            optsPL.quoteKey = pfliteQuote.item.quoteKey;
        } else if (statusPL == "") {
            // generate PL finished, update variables
            statusPL = response.status;
            pflitePL = data;
            optsLink.pFLiteGetQuoteRequest.paymentLinkId = pflitePL.id;
        } else if (statusLink == "") {
            // get quotes by payment link finished, update variables
            statusLink = response.status;
            pfliteLink = data;
        };
    };
};

// begin test with api call to generate quote
api.secureEpfliteQuotesGeneratePost(xApiKey, xAppKey, xVersion, origin, opts, callback);

// generate quote tests, hooks, and functions
describe('pflite generate quote', function () {
    this.timeout(10000);
    
    // function to stall asserts until generate quote has finished
    var check = function (done) {
        if (statusGenerate != "") done();
        else setTimeout(function () { check(done) }, 1000);
    };

    // before hook to run before all tests
    before(function (done) {
        check(done);
    });

    // after hook to run once all tests are finished
    after(function () {
        // update quote key and send generate payment link request
        api.secureEpfliteQuotesPaymentlinksPost(xApiKey, xAppKey, xVersion, origin, optsPL, callback);
    });

    // tests
    it('should be status code 201', function (done) {
        try {
            expect(statusGenerate).to.be(201);
        } catch (error) {
            console.log(error);
            assert.fail();
        };
        done();
    });
});

// generate payment link tests, hooks, and functions
describe('pflite generate payment link', function () {
    this.timeout(10000);
    
    // function to stall asserts until generate payment link has finished
    var check = function (done) {
        if (statusPL != "") done();
        else setTimeout(function () { check(done) }, 1000);
    };

    // before hook to run before all tests
    before(function (done) {
        check(done);
    });

    // after hook to run once all tests are finished
    after(function () {
        // update quote key and send generate payment link request
        api.secureEpfliteQuotesLinkPost(xApiKey, xAppKey, xVersion, origin, optsLink, callback);
    });

    // tests
    it('should be status code 200', function (done) {
        try {
            expect(statusPL).to.be(200);
        } catch (error) {
            console.log(error);
            assert.fail();
        };
        done();
    });
});

// Get PFL quotes by payment links tests, hooks, and functions
describe('pflite get quotes by payment link', function () {
    this.timeout(10000);
    
    // function to stall asserts until get quotes has finished
    var check = function (done) {
        if (statusLink != "") done();
        else setTimeout(function () { check(done) }, 1000);
    };

    // before hook to run before all tests
    before(function (done) {
        check(done);
    });

    // after hook to run once all tests are finished
    after(function () {
    });

    // tests
    it('should be status code 200', function (done) {
        try {
            expect(statusLink).to.be(200);
        } catch (error) {
            console.log(error);
            assert.fail();
        };
        done();
    });
});