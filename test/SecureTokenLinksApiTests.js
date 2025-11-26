import expect from 'expect.js';
import ApiClient from '../src/ApiClient.js';
import SecureTokenLinksApi from '../src/api/SecureTokenLinksApi.js';
const fs = require('fs');

// define global variable for api calls
var api = new SecureTokenLinksApi()

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
var tokenLink = null;
var tokenLinkDetails = null;
var tokenLinkPut = null;
var tokenLinkDelete = null;
var tokenLinkList = null;
var statusPost = "";
var statusDetails = "";
var statusPut = "";
var statusDelete = "";
var statusList = "";
var title = "NodeJS TL - " + Date.now();
var titleUpdated = title + " UPDATED";

var opts =  {
    "merchantId": xAppKey,
    "title": title,
    "intent": {
        "PaymentTypes": [
            "ACH",
            "CreditCard",
            "DebitCard"
        ]
    },
    "expireIn": 7,
    "expireInUnit": 4,
    "callbackParameters": {},
    "customers": [{
        "email": "test@test.com",
        "phone": "1234567890",
        "address": {}
    }]
};

var optsDetails = {
    "tokenLinkId": ""
};

var optsUpdate = {
    "title": titleUpdated,
    "tokenLinkId": "",
    "expireIn": 8,
    "expireInUnit": 4,
    "intent": {
        "PaymentTypes": [
            "ACH",
            "CreditCard",
            "DebitCard"
        ]
    }
};

var optsDelete = {
    "tokenLinkId": ""
};

// define callback function
var callback = function (error, data, response) {
    if (error) {
        console.error("The Error is: ", error);
        throw "Bad Request";
    } else {
        // log successful call
        console.log('TL API called successfully. Status: ' + response.status);
        if (statusPost == "") {
            // post finished, update variables
            statusPost = response.status;
            tokenLink = data;
            optsDetails.tokenLinkId = tokenLink.tokenLinkId
            optsUpdate.tokenLinkId = tokenLink.tokenLinkId
            optsDelete.tokenLinkId = tokenLink.tokenLinkId
        } else if (statusDetails == "") {
            // details finished, update variables
            statusDetails = response.status;
            tokenLinkDetails = data;
        } else if (statusPut == "") {
            // put finished, update variables
            statusPut = response.status;
            tokenLinkPut = data;
        } else if (statusDelete == "") {
            // delete finished, update variables
            statusDelete = response.status;
            tokenLinkDelete = data;
        } else if (statusList == "") {
            // list finished, update variables
            statusList = response.status;
            tokenLinkList = data;
        };
    };
};

// begin test with api call to create tokenlink
api.secureTokenlinksPost(xApiKey, xAppKey, xVersion, origin, opts, callback);

// create tokenlink tests, hooks, and functions
describe('secure tokenlink post', function () {
    this.timeout(10000);
    
    // function to stall asserts until create tokenlink has finished
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
        // send get tokenlink details request
        api.secureTokenlinksDetailsPost(xApiKey, xAppKey, xVersion, origin, optsDetails, callback);
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
            expect(tokenLink.title).to.be(opts.title);
        } catch (error) {
            console.log(error);
            assert.fail();
        };
        done();
    });
});

// get tokenlink details tests, hooks, and functions
describe('secure tokenlinks get', function () {
    this.timeout(10000);

    // function to stall asserts until get tokenlink details has finished
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
        // send update tokenlink request
        api.secureTokenlinksPut(xApiKey, xAppKey, xVersion, origin, optsUpdate, callback);
    });
    
    // tests
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

// update tokenlink tests, hooks, and functions
describe('secure tokenlink put', function () {
    this.timeout(10000);
    
    // function to stall asserts until update tokenlink has finished
    var check = function (done) {
        if (statusPut != "") done();
        else setTimeout(function () { check(done) }, 1000);
    };

    // before hook to run before all tests
    before(function (done) {
        check(done);
    });

    // after hook to run once all tests are finished
    after(function () {
        // send get tokenlink details request
        api.secureTokenlinksExpirationsPost(xApiKey, xAppKey, xVersion, origin, optsDelete, callback);
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
});

// delete tokenlink tests, hooks, and functions
describe('secure tokenlink delete', function () {
    this.timeout(10000);
    
    // function to stall asserts until delete tokenlink has finished
    var check = function (done) {
        if (statusDelete != "") done();
        else setTimeout(function () { check(done) }, 1000);
    };

    // before hook to run before all tests
    before(function (done) {
        check(done);
    });

    // after hook to run once all tests are finished
    after(function () {
        // send get tokenlink list request
        api.secureTokenlinksListPost(xApiKey, xAppKey, xVersion, origin, {}, callback);
    });

    // tests
    it('should be status code 200', function (done) {
        try {
            expect(statusDelete).to.be(200);
        } catch (error) {
            console.log(error);
            assert.fail();
        };
        done();
    });
});

// list tokenlink tests, hooks, and functions
describe('secure tokenlink list', function () {
    this.timeout(10000);
    
    // function to stall asserts until get tokenlink list has finished
    var check = function (done) {
        if (statusList != "") done();
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
            expect(statusList).to.be(200);
        } catch (error) {
            console.log(error);
            assert.fail();
        };
        done();
    });
});