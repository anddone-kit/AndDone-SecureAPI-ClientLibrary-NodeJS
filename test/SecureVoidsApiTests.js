import expect from 'expect.js';
import ApiClient from '../src/ApiClient.js';
import SecureVoidsApi from '../src/api/SecureVoidsApi.js';
import SecureTransactionCancelRequest from '../src/model/SecureTransactionCancelRequest.js';
const fs = require('fs');


// define global variable for api calls
var api = new SecureVoidsApi()

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
var response = null;
var status = "";

var opts = {
    'secureTransactionCancelRequest': new SecureTransactionCancelRequest() // {secureTransactionCancelRequest} Secure Voids Request details
};
// add fields to request
opts.transactionId = "53448b1c-12f9-4e73-9715-997f4bea5101";
opts.voidReason = "Duplicate transaction";

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
        console.log('Void API called successfully. Status: ' + response.status);
        if (status == "") {
            // post finished, update variables
            status = response.status;
            response = data;
        };
    };
};

// begin test with api call to cancel transaction
api.secureCancellationsPost(xApiKey, xAppKey, xVersion, origin, opts, callback);

// void transaction tests, hooks, and functions
describe('void transaction', function () {
    this.timeout(10000);
    
    // function to stall asserts until create paymentlink has finished
    var check = function (done) {
        if (status != "") done();
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
            expect(status).to.be(200);
        } catch (error) {
            console.log(error);
            assert.fail();
        };
        done();
    });
});