import expect from 'expect.js';
import ApiClient from '../src/ApiClient.js';
import SecurePaymentLinksApi from '../src/api/SecurePaymentLinksApi.js'
const fs = require('fs');


// define global variable for api calls
var api = new SecurePaymentLinksApi()

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
var paymentLink = null;
var paymentLinkUpdate = null;
var paymentLinkDetails = null;
var deleteMessage = null;
var statusPost = "";
var statusPut = "";
var statusGet = "";
var statusDel = "";
var title = "NodeJS PL - " + Date.now();
var titleUpdate = title + " UPDATED";

// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

var opts = {
    "title": title,
    "merchantId": xAppKey,
    "paymentDescription": "Test Premium down payment.",
    "amount": "200",
    "expireIn": 7,
    "expireInUnit": 4,
    "referenceDataList": [
        {
            "referenceType": 2,
            "referenceNumber": "TEST00000002",
            "referenceKey": ""
        }
    ],
    "responseType": 1,
    "callbackParameters": {
        "callbackApiUrl": "https://www.anddone.com",
        "callbackMessage": "Thank you for your payment!",
        "redirectionTime": ""
    },
    "customers": [
        {
            "firstName": "Testing",
            "lastName": "Tester",
            "email": "tt@test.com",
            "phone": "9876543210",
            "address": {
                "addressLine1": "123 Lois Ln.",
                "addressLine2": "#123",
                "city": "Tampa",
                "state": "FL",
                "country": 1,
                "postalCode": "33613"
            }
        }
    ],
    "settings": {
        "additionalDetailsPreference": 2,
        "intent": {
            "PaymentTypes": [
                "ACH",
                "CreditCard",
                "DebitCard"
            ]
        }
    },
    "lineItems": [
        {
            "quantity": 10,
            "productId": "0123",
            "lineItemType": 1
        }
    ],
    "splits": [
        {
            "virtualAccount": "",
            "accountType": 0,
            "amount": 0,
            "reference": "",
            "chargeIndicator": false
        }
    ]
};

var optsGet = {};

var optsDelete = {}

// define callback function
var callback = function (error, data, response) {
    if (error) {
        console.error("The Error is: ", error.status);
        console.error(error.response.res.text);
        throw "Bad Request";
    } else {
        // log successful call
        console.log('PL API called successfully. Returned data: ' + data.title);
        if (statusPost == "") {
            // post finished, update variables
            statusPost = response.status;
            paymentLink = data;
            optsGet.paymentLinkId = paymentLink.id;
            optsDelete = {
                'securePaymentLinkRequest': {'paymentLinkId': paymentLink.id}
            };
        } else if (statusPut == "") {
            // put finished, update variables
            statusPut = response.status
            paymentLinkUpdate = data;
        } else if (statusGet == "") {
            // get finished, update variables
            statusGet = response.status;
            paymentLinkDetails = data;
        } else if (statusDel == "") {
            // delete finished, update variables
            statusDel = response.status;
            deleteMessage = data;
        };
    };
};

// begin test with api call to create paymentlink
api.securePaymentlinksPost(xApiKey, xAppKey, xVersion, origin, opts, callback);

// create paymentlink tests, hooks, and functions
describe('payment link post', function () {
    
    // function to stall asserts until create paymentlink has finished
    var check = function (done) {
        if (statusPost != "") done();
        else setTimeout(function () { check(done) }, 1000);
    };

    // before hook to run before all tests
    before(function (done) {
        check(done);
    });

    // after hook to run once all tests are finished
    after(function () {
        // update title and send update paymentlink request
        opts.title = titleUpdate;
        api.securePaymentlinksIdPut(xApiKey, xAppKey, xVersion, origin, paymentLink.id, opts, callback);
    });

    // tests
    it('should be status code 201', function (done) {
        console.log(statusPost);
        try {
            expect(statusPost).to.be(201);
        } catch (error) {
            console.log(error);
            assert.fail();
        };
        done();
    });
    it('should have the expected title', function (done) {
        try {
            expect(paymentLink.title).to.be(title);
        } catch (error) {
            console.log(error);
            assert.fail();
        };
        done();
    });
});

// update paymentlink tests, hooks, and functions
describe('payment link update', function () {

    // function to stall asserts until update paymentlink has finished
    var check = function (done) {
        if (statusPut != "") done();
        else setTimeout(function () { check(done) }, 1000);
    };

    //before hook to run before all tests
    before(function (done) {
        check(done);
    });

    // after hook to run once all tests are finished
    after(function () {
        //send get paymentlink details request
        api.securePaymentlinksDetailsPost(xApiKey, xAppKey, xVersion, origin, optsGet, callback);
    });
    
    // tests
    it('should be status code 200', function (done) {
        try {
            expect(statusPut).to.be(200);
        } catch (error) {
            console.log(error);
            assert.fail();
        };
        done();
    });
    it('should have the expected title', function (done) {
        try {
            expect(paymentLinkUpdate.title).to.be(titleUpdate);
        } catch (error) {
            console.log(error);
            assert.fail();
        };
        done();
    });
});

// get paymentlink details tests, hooks, and functions
describe('get payment link details', function () {

    // function to stall asserts until get paymentlink details has finished
    var check = function (done) {
        if (statusGet != "") done();
        else setTimeout(function () { check(done) }, 1000);
    };

    //before hook to run before all tests
    before(function (done) {
        check(done);
    });

    // after hook to run once all tests are finished
    after(function() {
        //send paymentlink expiration request
        api.securePaymentlinksExpirationsPost(xApiKey, xAppKey, xVersion, origin, optsDelete, callback);
    });

    //tests
    it('should be status code 200', function (done) {
        try {
            expect(statusGet).to.be(200);
        } catch (error) {
            console.log(error);
            assert.fail();
        };
        done();
    });
    it('should have the expected id', function (done) {
        try {
            expect(paymentLinkDetails.id).to.be(paymentLink.id);
        } catch (error) {
            console.log(error);
            assert.fail();
        };
        done();
    });
});

// expire paymentlink tests, hooks, and functions
describe('expire payment link', function () {

    // function to stall asserts until get paymentlink details has finished
    var check = function (done) {
        if (statusDel != "") done();
        else setTimeout(function () { check(done) }, 1000);
    };

    //before hook to run before all tests
    before(function (done) {
        check(done);
    });

    // after hook to run once all tests are finished
    after(function() {
    });

    //tests
    it('should be status code 200', function (done) {
        try {
            expect(statusDel).to.be(200);
        } catch (error) {
            console.log(error);
            assert.fail();
        };
        done();
    });
});