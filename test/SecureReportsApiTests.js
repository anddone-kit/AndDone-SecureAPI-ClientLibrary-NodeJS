import expect from 'expect.js';
import ApiClient from '../src/ApiClient.js';
import SecureReportsApi from '../src/api/SecureReportsApi.js';
const fs = require('fs');


// define global variable for api calls
var api = new SecureReportsApi()

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
    'reportDownloadRequest': {
        "reportId": "YX8XQdrk",
        "date": "05-15-2025",
        // "reportGenerationLogId": "",
        // "fileCompress": true
    }
};

// define callback function
var callback = function (error, data, response) {
    if (error) {
        console.error("The Error is: ", error);
        throw "Bad Request";
    } else {
        // log successful call
        console.log('Reports API called successfully. Status: ' + response.status);
        if (statusPost == "") {
            // post finished, update variables
            status = response.status;
            response = data;
        };
    };
};

// begin test with api call to download report
api.secureReportsDownloadsPost(xApiKey, xAppKey, xVersion, origin, opts, callback);

// reports tests, hooks, and functions
describe('report download', function () {
    this.timeout(10000);
    
    // function to stall asserts until download report has finished
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