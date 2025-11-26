import expect from 'expect.js';
import ApiClient from '../src/ApiClient.js';
import SecureTokenManagementApi from '../src/api/SecureTokenManagementApi.js';
const fs = require('fs');


// define global variable for api calls
var api = new SecureTokenManagementApi()

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
    'token': '0LDGVDMPLL59EK2X'
};

// define callback function
var callback = function (error, data, response) {
    if (error) {
        console.error("The Error is: ", error);
        throw "Bad Request";
    } else {
        // log successful call
        console.log('TM API called successfully. Returned data: ' + data.title);
        if (statusPost == "") {
            // post finished, update variables
            status = response.status;
            response = data;
        };
    };
};

// begin test with api call to deactivate token
api.secureTokensActivationsDelete(xApiKey, xAppKey, xVersion, origin, opts, callback);

// void transaction tests, hooks, and functions
describe('deactivate account token', function () {
    
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