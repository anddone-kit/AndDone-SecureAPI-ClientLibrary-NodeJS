import expect from 'expect.js';
import ApiClient from '../src/ApiClient.js';
import SecurePaymentIntentApi from '../src/api/SecurePaymentIntentApi.js';
const fs = require('fs');


// define global variable for api calls
var api = new SecurePaymentIntentApi()

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
var paymentIntent = null;
var deleteMessage = null;
var statusPost = "";
var statusDel = "";
var title = "NodeJS PI - " + Date.now();

// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

var opts = {
    'paymentIntentRequest':  {
        "saveForFuture": true,
        "amount": 1000,
        "title": title,
        "shortDescription": "shortDescription",
        "paymentDescription": "paymentDescription",
        "invoiceNumber": "postman",
        "expiresIn": "300000",
        "intent": {
            "paymentTypes": [
                "CreditCard"
            ]
        },
        "enablePremiumFinance": true,
        "splits": null,
        "additionalDetailsPreference": "NoAdditionalDetails"
    }
};

// var optsGet = {
//     'paymentLinkRequest': new SecurePaymentLinksApi() // {PaymentLinkRequest} Secure Payment Link Request details
// };

// define callback function
var callback = function (error, data, response) {
    if (error) {
        console.error("The Error is: ", error);
        throw "Bad Request";
    } else {
        // log successful call
        console.log('PI API called successfully. Returned data: ' + data.title);
        if (statusPost == "") {
            // post finished, update variables
            statusPost = response.status;
            paymentIntent = data;
        } else if (statusDel == "") {
            // delete finished, update variables
            statusDel = response.status;
            deleteMessage = data;
        };
    };
};

// begin test with api call to create paymentlink
api.securePaymentintentsPost(xApiKey, xAppKey, xVersion, origin, opts, callback);

// create paymentlink tests, hooks, and functions
describe('payment intent post', function () {
    
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
        api.securePaymentintentsExpirationsPost(xApiKey, xAppKey, xVersion, origin, paymentIntent.paymentToken, callback);
    });

    // tests
    it('should be status code 201', function (done) {
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
            expect(paymentIntent.title).to.be(title);
        } catch (error) {
            console.log(error);
            assert.fail();
        };
        done();
    });
});

// expire payment intent tests, hooks, and functions
describe('expire payment intent', function () {

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