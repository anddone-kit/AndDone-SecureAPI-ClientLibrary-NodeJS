import expect from 'expect.js';
import ApiClient from '../src/ApiClient.js';
import SecurePaymentsApi from '../src/api/SecurePaymentsApi.js';
const fs = require('fs');


// define global variable for api calls
var api = new SecurePaymentsApi()

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
var securePayment = null;
var searchResults = null;
var securePaymentDetails = null;
var statusPost = "";
var statusSearch = "";
var statusDetails = "";

// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }


var opts = {
    'paymentRequest': new SecurePaymentsApi() // {PFCheckEndorsementsRequest} PF Check Endorsement Request details
};

var optsSearch = {
    'adminTransactionSearchCriteria': new SecurePaymentsApi()
};

var optsDetails = {
    'paymentDetailsRequest': new SecurePaymentsApi()
};

// Create
opts.paymentReference = "PMT-543216785";
opts.type = "OpenPayment";
opts.tenderInfo = {
    "amount": 178,
    "cardHolderName": "John Doe",
    "cardType": "VISA",
    "cardNumber": "4000620000000007",
    "cardExpiry": "0330",
    "cvDataStatus": "AV",
    "cvv": 737,
    "removeDiscounting": false
};
opts.transactionCode = "Web";
opts.channelType = "CreditCard";
opts.billingContact = {
    "phone": "8003213388",
    "name": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "address": {
        "addressLine1": "30",
        "addressLine2": "Memorial Drive",
        "city": "Avon ",
        "state": "NY",
        "country": 1,
        "postalCode": "12701"
    }
}

// Search
optsSearch.startRow = 0;
optsSearch.pageSize = 10;
optsSearch.endDate = "07-25-2025";
optsSearch.startDate = "06-01-2024";

// Details
optsDetails.id = "161af9f0-2dc2-4973-b90e-d322e30a056c";
optsDetails.type = "OpenPayment";

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
        console.log('SP API called successfully. Status: ' + response.status);
        if (statusPost == "") {
            // post finished, update variables
            statusPost = response.status;
            securePayment = data;
        } else if (statusSearch == "") {
            // search finished, update variables
            statusSearch = response.status;
            searchResults = data;
        } else if (statusDetails == "") {
            // delete finished, update variables
            statusDetails = response.status;
            securePaymentDetails = data;
        };
    };
};

// begin test with api call to create payment
api.securePaymentsPost(xApiKey, xAppKey, xVersion, origin, opts, callback);

// create payment tests, hooks, and functions
describe('secure payment post', function () {
    this.timeout(10000);
    
    // function to stall asserts until create payment has finished
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
        api.securePaymentsSearchPost(xApiKey, xAppKey, xVersion, origin, optsSearch, callback);
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
    it('should have the expected reference number', function (done) {
        try {
            expect(securePayment.referenceNo).to.be(opts.paymentReference);
        } catch (error) {
            console.log(error);
            assert.fail();
        };
        done();
    });
});

// search payments tests, hooks, and functions
describe('secure payment search', function () {
    this.timeout(10000);

    // function to stall asserts until update paymentlink has finished
    var check = function (done) {
        if (statusSearch != "") done();
        else setTimeout(function () { check(done) }, 1000);
    };

    //before hook to run before all tests
    before(function (done) {
        check(done);
    });

    // after hook to run once all tests are finished
    after(function () {
        //send get paymentlink details request
        api.securePaymentsdetailsPost(xApiKey, xAppKey, xVersion, origin, optsDetails, callback);
    });
    
    // tests
    it('should be status code 200', function (done) {
        try {
            expect(statusSearch).to.be(200);
        } catch (error) {
            console.log(error);
            assert.fail();
        };
        done();
    });
});

// payment details tests, hooks, and functions
describe('secure payment details', function () {
    this.timeout(10000);

    // function to stall asserts until get paymentlink details has finished
    var check = function (done) {
        if (statusDetails != "") done();
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
            expect(statusDetails).to.be(200);
        } catch (error) {
            console.log(error);
            assert.fail();
        };
        done();
    });
});