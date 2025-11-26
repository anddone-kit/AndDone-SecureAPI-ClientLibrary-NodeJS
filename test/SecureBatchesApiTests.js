import expect from 'expect.js';
import ApiClient from '../src/ApiClient.js';
import SecurePaymentBatchingApi from '../src/api/SecurePaymentBatchingApi.js'
import SecurePaymentsApi from '../src/api/SecurePaymentsApi.js';
import SecurePaymentBatchDetailsRequest from '../src/model/SecurePaymentBatchDetailsRequest.js';
import PaymentBatchCancellationRequest from '../src/model/PaymentBatchCancellationRequest.js';
import SecureBatchExecuteRequest from '../src/model/SecureBatchExecuteRequest.js';
const fs = require('fs');


// define global variable for api calls
var api = new SecurePaymentBatchingApi()
var paymentApi = new SecurePaymentsApi()

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
var payment = null;
var batch = null;
var batchDetails = null;
var batchExecute = null;
var batchTimeline = null;
var batchCancel = null;
var statusPayment = "";
var statusBatch = "";
var statusDetails = "";
var statusExecute = "";
var statusTimeline = "";
var statusCancel = "";

// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

var optsPayment = {
    'securePaymentRequest': new SecurePaymentsApi() // {} Secure Payment Request details
};

var optsDetails = {
    'securePaymentBatchDetailsRequest': new SecurePaymentBatchingApi() // {SecurePaymentBatchDetailsRequest} Secure Payment Batch Details Request details
};

var optsCancel = {
    'paymentBatchCancellationRequest': new SecurePaymentBatchingApi() // {PaymentBatchCancellationRequest} Payment Batch Cancellation Request details
};

// add parameters to optsCancel
optsCancel.voidReason = "Duplicate Payments";
optsCancel.merchantId = xAppKey;

// add parameters to optsPayment
optsPayment.paymentReference = "PMT-543216785";
optsPayment.type = "OpenPayment";
optsPayment.tenderInfo = {
    "amount": 178,
    "cardHolderName": "John Doe",
    "cardType": "VISA",
    "cardNumber": "4000620000000007",
    "cardExpiry": "0330",
    "cvDataStatus": "AV",
    "cvv": 737,
    "removeDiscounting": false
};
optsPayment.transactionCode = "Web";
optsPayment.channelType = "CreditCard";
optsPayment.billingContact = {
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

// define callback function
var callback = function (error, data, response) {
    if (error) {
        // console.error("The Error is: ", error);
        throw "Bad Request";
    } else {
        // log successful call
        console.log('Batch API called successfully.');
        if (statusPayment == "") {
            statusPayment = response.status;
            payment = data;
            optsCancel.transactionIds = [payment.transactionId];
            optsDetails.batchId = payment.batchId;
            optsCancel.batchId = optsDetails.batchId;
        } else if (statusBatch == "") {
            // get batch finished, update variables
            statusBatch = response.status;
            batch = data;
        } else if (statusDetails == "") {
            // get batch details finished, update variables
            statusDetails = response.status
            batchDetails = data;
        // } else if (statusExecute == "") {
        //     // execute finished, update variables
        //     statusExecute = response.status;
        //     batchExecute = data;
        } else if (statusTimeline == "") {
            // timeline finished, update variables
            statusTimeline = response.status;
            batchTimeline = data;
        } else if (statusCancel == "") {
            // cancel transaction finished, update variables
            statusCancel = response.status;
            batchCancel = data;
        };
    };
};

// begin test with api call to create payment
paymentApi.securePaymentsPost(xApiKey, xAppKey, xVersion, origin, optsPayment, callback);

// secure payment tests, hooks, and functions
describe('secure payment', function () {
    this.timeout(10000);
    // function to stall asserts until secure payment has finished
    var check = function (done) {
        if (statusPayment != "") done();
        else setTimeout(function () { check(done) }, 1000);
    };

    // before hook to run before all tests
    before(function (done) {
        check(done);
    });

    // after hook to run once all tests are finished
    after(function () {
        // send batches request
        api.secureBatchesPost(xApiKey, xAppKey, xVersion, origin, {}, callback);
    });

    // tests
    it('should be status code 201', function (done) {
        try {
            expect(statusPayment).to.be(201);
        } catch (error) {
            console.log(error);
        };
        done();
    });
});

// get batches tests, hooks, and functions
describe('batches', function () {
    this.timeout(10000);
    // function to stall asserts until batches has finished
    var check = function (done) {
        if (statusBatch != "") done();
        else setTimeout(function () { check(done) }, 1000);
    };

    // before hook to run before all tests
    before(function (done) {
        check(done);
    });

    // after hook to run once all tests are finished
    after(function () {
        // send get batch details request
        api.secureBatchesDetailsPost(xApiKey, xAppKey, xVersion, origin, optsDetails, callback);
    });

    // tests
    it('should be status code 200', function (done) {
        try {
            expect(statusBatch).to.be(200);
        } catch (error) {
            console.log(error);
            // assert.fail();
        };
        done();
    });
});

// get batch details tests, hooks, and functions
describe('get batch details', function () {
    this.timeout(10000);
    // function to stall asserts until get batch details has finished
    var check = function (done) {
        if (statusDetails != "") done();
        else setTimeout(function () { check(done) }, 1000);
    };

    //before hook to run before all tests
    before(function (done) {
        check(done);
    });

    // after hook to run once all tests are finished
    after(function () {
        //send execute batch request
        // api.secureBatchesExecutePost(xApiKey, xAppKey, xVersion, origin, optsDetails, callback);
        api.secureBatchesTimelinesPost(xApiKey, xAppKey, xVersion, origin, optsDetails, callback);
    });
    
    // tests
    it('should be status code 200', function (done) {
        try {
            expect(statusDetails).to.be(200);
        } catch (error) {
            console.log(error);
            // assert.fail();
        };
        done();
    });
});

// // execute batch tests, hooks, and functions
// describe('execute batch', function () {
//     this.timeout(10000);
//     // function to stall asserts until execute batch request has finished
//     var check = function (done) {
//         if (statusExecute != "") done();
//         else setTimeout(function () { check(done) }, 1000);
//     };

//     //before hook to run before all tests
//     before(function (done) {
//         check(done);
//     });

//     // after hook to run once all tests are finished
//     after(function() {
//         //send batch timelines request
//         api.secureBatchesTimelinesPost(xApiKey, xAppKey, xVersion, origin, optsDetails, callback);
//     });

//     //tests
//     it('should be status code 200', function (done) {
//         try {
//             expect(statusExecute).to.be(200);
//         } catch (error) {
//             console.log(error);
//             // assert.fail();
//         };
//         done();
//     });
// });

// batch timelines tests, hooks, and functions
describe('get batch timeline', function () {
    this.timeout(10000);
    // function to stall asserts until batch timelines has finished
    var check = function (done) {
        if (statusTimeline != "") done();
        else setTimeout(function () { check(done) }, 1000);
    };

    //before hook to run before all tests
    before(function (done) {
        check(done);
    });

    // after hook to run once all tests are finished
    after(function() {
        // send batch transaction cancellation request
        api.secureBatchesTransactionsCancelPost(xApiKey, xAppKey, xVersion, origin, optsCancel, callback)
    });

    //tests
    it('should be status code 200', function (done) {
        try {
            expect(statusTimeline).to.be(200);
        } catch (error) {
            console.log(error);
            // assert.fail();
        };
        done();
    });
});

// batch transaction cancel tests, hooks, and functions
describe('batch transaction cancel', function () {
    this.timeout(10000);
    // function to stall asserts until batch transaction cancel has finished
    var check = function (done) {
        if (statusCancel != "") done();
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
            expect(statusCancel).to.be(200);
        } catch (error) {
            console.log(error);
            // assert.fail();
        };
        done();
    });
});