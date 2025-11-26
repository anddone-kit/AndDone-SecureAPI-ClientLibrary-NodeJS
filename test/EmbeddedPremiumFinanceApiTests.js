import expect from 'expect.js';
import ApiClient from '../src/ApiClient.js';
import SecureEmbeddedPremiumFinanceApi from '../src/api/SecureEmbeddedPremiumFinanceApi.js';
import SecureEmbeddedPremiumFinanceEndorsementsApi from '../src/api/SecureEmbeddedPremiumFinanceEndorsementsApi.js';
const fs = require('fs');


// define global variable for api calls
var api = new SecureEmbeddedPremiumFinanceApi();
var endApi = new SecureEmbeddedPremiumFinanceEndorsementsApi();

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
var epfData = "";
var status = "";

// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

var opts = {};

// create generate quote request
var optsGenerate = {
    'quoteRequest': {
        "PaymentIntentId": "adJmo1A8",
        "Details": {
            "CouponInvoicePrinted": null,
            "Installments": null,
            "ProgramIDs":[82262],
            "BatchId": "Batch-00543738", //this need to //update background
            "Commercial": null,
            "Coupon": null,
            "Interval": null,
            "DownPaymentMethod": "BOTH", // Take it from allow Transaction Type
            "DownPaymentPaidBy": "Insured"
        },
        "Insured": {
            "UniqueId": xAppKey,
            "AgentCustomerNumber": "Suyash",
            "Email": "dylan.smith@fmkagency.com",
            "CareOf": "",
            "Address": {
                "Name": "Sam",
                "Address1": "1055 Broadway",
                "Address2": "",
                "City": "Kansas City",
                "State": "KY",
                "Zip": "64105",
                "Phone": ""
            }
        },
        "Agent": {
            "UniqueID": xAppKey,// Merchant Id
            "Email": "dylan.smith@fmkagency.com",
            "Address": {
                "Name": "Insurance Agency",
                "Address1": "PO Box 486",
                "Address2": "",
                "City": "Kansas City",
                "State": "KY",
                "Zip": "64105",
                "Phone": ""
            }
        },
        "Policies": [
            {
                "PolicyId": 2,
                "Premium": 1000,
                "Fee": 0,
                "Tax": 0,
                "Coverage": "FIRE",
                "EffectiveDate": "2025-05-01T00:00:00",
                "ExpirationDate": "2026-05-01T00:00:00",
                "Term": 12,
                "MinimumEarned": 0,
                "MinimumLiability": 0,
                "MaximumLiability": 0,
                "InvoiceNumber": "",
                "PolicyFees": [],
                "Company": {
                    "BestNumber": "",
                    "UniqueId": "LIC",
                    "Name": "LEXINGTON INSURANCE COMPANY",
                    "Address1": "",
                    "Address2": "",
                    "City": "Kansas City",
                    "State": "MO",
                    "Zip": "",
                    "Phone": ""
                }
            }
        ]
    }

};

// get quote by quote key request
var optsQuoteKey = {
    'getQuoteKeyRequest': {
        'quoteKey': 29650446
    }
}

// get quote by payment intent request
var optsPaymentIntent = {
    'getQuoteRequest': {
        'paymentIntentId': "DxnmRZqv"
    }
}

// capture eSign request
var optsESign = {
    'pFQuoteEsignRequest': {
        "merchantToken": xAppKey,
        "quoteKey": "29664515",
        "insuredName": "John",
        "ipAddress": "101.205.12.14",
        "macAddress": "12-34-56-78-9A-BC",
        "captchaToken": "rewgwgwehrtehwytrbwbtyjcxcvnt",
        "actionName": ""
    }
}

// book quote request
var optsBookQuote = {
    'pFQuoteBookingRequest': {
        'QuoteKey': 29643158,
        'merchantToken': xAppKey
    }
}

// retrieve PFA request
var optsPFA = {
    'pFRetrievePFARequestDTO': {
        "QuoteKey": 29643158
    }
}

// check endorsement eligibility request
var optsCheckEligibility = {
    'pFCheckEndorsementsRequest': {
        "quotekey": 29643158,
        "merchantToken": xAppKey
    }
}

// update policy request
var optsPolicyUpdate = {
    'pFPolicyUpdateRequestDTO': {
        "quoteKey": 29645595,
        "premium": 9000,
        "category": "FIRE",
        "newPolicyNumber": "1256"
    }
}

// endorsement request
var optsEndorsementRequest = {
    'pFEndorsementRequest': {
        "quote": {
            "merchantReference": "test 011",
            "accountNumber": "243490",
            "agreementId": 8025326,
            "policies": [
                {
                    "policyId": 11746655,
                    "premium": 40000.0,
                    "effectiveDate": "2025-03-30T05:39:43.181Z",
                    "expirationDate": "2026-03-30T05:39:43.181Z",
                    "coverage": "BOP",
                    "company": {
                        "bestNumber": "",
                        "UniqueId": "1733",
                        "Name": "Bankers Standard Insurance Co",
                        "careOf": "string",
                        "address1": "string",
                        "address2": "string",
                        "city": "string",
                        "state": "string",
                        "zip": "string",
                        "phone": "string"
                    }
                }
            ],
            "insured": {
                "AgentCustomerNumber": "Suyash",
                "Email": "dylan.smith@fmkagency.com",
                "CareOf": "",
                "Address": {
                    "Name": "Sam",
                    "Address1": "1055 Broadway",
                    "Address2": "",
                    "City": "Kansas City",
                    "State": "MO",
                    "Zip": "64105",
                    "Phone": ""
                }
            }
        }
    }
}

// book endorsement request
var optsBookEndorsement = {
    'pFQuoteBookingRequest': {
        "quotekey": 29644219
    }
}

// define callback function
var callback = function (error, data, response) {
    if (error) {
        console.error("The Error is: ", error);
        throw "Bad Request";
    } else {
        // log successful call
        console.log('EPF API called successfully. Status: ' + response.status);
        status = response.status;
        epfData = data;
    };
};

// generate quote tests, hooks, and functions
describe.skip('EPF generate quote', function () {
    this.timeout(10000);
    
    // function to stall asserts until generate quote has finished
    var check = function (done) {
        if (status != "") done();
        else setTimeout(function () { check(done) }, 1000);
    };

    // before hook to run before all tests
    before(function (done) {
        api.secureEpfQuotesGeneratePost(xApiKey, xAppKey, xVersion, origin, optsGenerate, callback);
        check(done);
    });

    // after hook to run once all tests are finished
    after(function () {
    });

    // tests
    it('should be status code 201', function (done) {
        try {
            expect(status).to.be(201);
        } catch (error) {
            console.log(error);
            assert.fail();
        };
        done();
    });
});

// get quote by quote key tests, hooks, and functions
describe('EPF get quote by quote key', function () {
    this.timeout(10000);
    
    // function to stall asserts until generate quote has finished
    var check = function (done) {
        if (status != "") done();
        else setTimeout(function () { check(done) }, 1000);
    };

    // before hook to run before all tests
    before(function (done) {
        console.log(optsQuoteKey);
        api.secureEpfQuotesPost(xApiKey, xAppKey, xVersion, origin, optsQuoteKey, callback);
        check(done);
    });

    // after hook to run once all tests are finished
    after(function () {
    });

    // tests
    it('should be status code 200', function (done) {
        try {
            expect(status).to.be(200);
        } catch (error) {
            console.log(error);
            assert.fail();
        };
        done();
    });
});

// get quote by payment intent tests, hooks, and functions
describe('EPF get quote by payment intent', function () {
    this.timeout(10000);
    
    // function to stall asserts until generate quote has finished
    var check = function (done) {
        if (status != "") done();
        else setTimeout(function () { check(done) }, 1000);
    };

    // before hook to run before all tests
    before(function (done) {
        api.secureEpfQuotesIntentPost(xApiKey, xAppKey, xVersion, origin, optsPaymentIntent, callback);
        check(done);
    });

    // after hook to run once all tests are finished
    after(function () {
    });

    // tests
    it('should be status code 200', function (done) {
        try {
            expect(status).to.be(200);
        } catch (error) {
            console.log(error);
            assert.fail();
        };
        done();
    });
});

// capture eSign tests, hooks, and functions
describe.skip('EPF capture eSign', function () {
    this.timeout(10000);
    
    // function to stall asserts until generate quote has finished
    var check = function (done) {
        if (status != "") done();
        else setTimeout(function () { check(done) }, 1000);
    };

    // before hook to run before all tests
    before(function (done) {
        api.secureEpfQuotesCaptureesignPut(xApiKey, xAppKey, xVersion, origin, optsESign, callback);
        check(done);
    });

    // after hook to run once all tests are finished
    after(function () {
    });

    // tests
    it('should be status code 200', function (done) {
        try {
            expect(status).to.be(200);
        } catch (error) {
            console.log(error);
            assert.fail();
        };
        done();
    });
});

// retrieve pfa tests, hooks, and functions
describe.skip('EPF retrieve pfa', function () {
    this.timeout(10000);
    
    // function to stall asserts until generate quote has finished
    var check = function (done) {
        if (status != "") done();
        else setTimeout(function () { check(done) }, 1000);
    };

    // before hook to run before all tests
    before(function (done) {
        api.secureEpfRetrievepfaPost(xApiKey, xAppKey, xVersion, origin, optsPFA, callback);
        check(done);
    });

    // after hook to run once all tests are finished
    after(function () {
    });

    // tests
    it('should be status code 200', function (done) {
        try {
            expect(status).to.be(200);
        } catch (error) {
            console.log(error);
            assert.fail();
        };
        done();
    });
});

// confirm (book) quote tests, hooks, and functions
describe.skip('EPF confirm (book) quote', function () {
    this.timeout(10000);
    
    // function to stall asserts until generate quote has finished
    var check = function (done) {
        if (status != "") done();
        else setTimeout(function () { check(done) }, 1000);
    };

    // before hook to run before all tests
    before(function (done) {
        api.secureEpfQuotesBookingPut(xApiKey, xAppKey, xVersion, origin, optsBookQuote, callback);
        check(done);
    });

    // after hook to run once all tests are finished
    after(function () {
    });

    // tests
    it('should be status code 200', function (done) {
        try {
            expect(status).to.be(200);
        } catch (error) {
            console.log(error);
            assert.fail();
        };
        done();
    });
});

// retrieve endorsement eligibility tests, hooks, and functions
describe.skip('EPF retrieve endorsement eligibility', function () {
    this.timeout(10000);
    
    // function to stall asserts until generate quote has finished
    var check = function (done) {
        if (status != "") done();
        else setTimeout(function () { check(done) }, 1000);
    };

    // before hook to run before all tests
    before(function (done) {
        endApi.secureEpfEndorsementsPost(xApiKey, xAppKey, xVersion, origin, optsCheckEligibility, callback);
        check(done);
    });

    // after hook to run once all tests are finished
    after(function () {
    });

    // tests
    it('should be status code 200', function (done) {
        try {
            expect(status).to.be(200);
        } catch (error) {
            console.log(error);
            assert.fail();
        };
        done();
    });
});

// update policy tests, hooks, and functions
describe.skip('EPF update policy', function () {
    this.timeout(10000);
    
    // function to stall asserts until generate quote has finished
    var check = function (done) {
        if (status != "") done();
        else setTimeout(function () { check(done) }, 1000);
    };

    // before hook to run before all tests
    before(function (done) {
        api.secureEpfMerchantsQuotesPolicyPut(xApiKey, xAppKey, xVersion, origin, optsPolicyUpdate, callback);
        check(done);
    });

    // after hook to run once all tests are finished
    after(function () {
    });

    // tests
    it('should be status code 200', function (done) {
        try {
            expect(status).to.be(200);
        } catch (error) {
            console.log(error);
            assert.fail();
        };
        done();
    });
});

// update endorsement tests, hooks, and functions
describe.skip('EPF update endorsement quote', function () {
    this.timeout(10000);
    
    // function to stall asserts until generate quote has finished
    var check = function (done) {
        if (status != "") done();
        else setTimeout(function () { check(done) }, 1000);
    };

    // before hook to run before all tests
    before(function (done) {
        endApi.secureEpfQuoteEndorsementPost(xApiKey, xAppKey, xVersion, origin, optsEndorsementRequest, callback);
        check(done);
    });

    // after hook to run once all tests are finished
    after(function () {
    });

    // tests
    it('should be status code 200', function (done) {
        try {
            expect(status).to.be(200);
        } catch (error) {
            console.log(error);
            assert.fail();
        };
        done();
    });
});

// confirm (book) endorsement tests, hooks, and functions
describe.skip('EPF confirm (book) endorsement', function () {
    this.timeout(10000);
    
    // function to stall asserts until generate quote has finished
    var check = function (done) {
        if (status != "") done();
        else setTimeout(function () { check(done) }, 1000);
    };

    // before hook to run before all tests
    before(function (done) {
        endApi.secureEpfQuoteEndorsementBookingPut(xApiKey, xAppKey, xVersion, origin, optsBookEndorsement, callback);
        check(done);
    });

    // after hook to run once all tests are finished
    after(function () {
    });

    // tests
    it('should be status code 200', function (done) {
        try {
            expect(status).to.be(200);
        } catch (error) {
            console.log(error);
            assert.fail();
        };
        done();
    });
});
