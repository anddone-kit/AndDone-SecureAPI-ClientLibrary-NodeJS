import SecureOutboundPaymentsApi from '../src/api/SecureOutboundPaymentsApi.js';
const fs = require('fs');

// define global variable for api calls
var api = new SecureOutboundPaymentsApi()

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

var optsCreate = {
  "vendorId": "J8P6PBvm",
  "paymentMethod": "Check",
  "amount": 70.23,
  "bankDetail": {
    "accountNumber": "123456780",
    "routingNumber": "121000358"
  },
  "Data": {
    "checkNumber": 1003,
    "memo": "Self transfer",
    "checkDate": "05-19-2025",
    "remittanceData": {
      "headings": [
        {
          "name": "Item1",
          "type": "Date"
        },
        {
          "name": "Amount1",
          "type": "decimal"
        },
        {
          "name": "desc",
          "type": "text"
        }
      ],
      "rows": [
        [
          {
            "name": "Item1",
            "value": "04-24-2024",
            "type": "Date"
          },
          {
            "name": "Amount1",
            "value": "100.12",
            "type": "decimal"
          },
          {
            "name": "desc",
            "value": "100.12",
            "type": "text"
          }
        ],
        [
          {
            "name": "Item1",
            "value": "04-27-2024",
            "type": "Date"
          },
          {
            "name": "Amount1",
            "value": "500",
            "type": "decimal"
          },
          {
            "name": "desc",
            "value": "100.12",
            "type": "text"
          }
        ]
      ]
    }
  }
};

var optsDetails = {
  "paymentId": "5a5b9d55-7d93-4b5d-81eb-682adff13562"
};

var optsTimeline = {
  "paymentId": "5a5b9d55-7d93-4b5d-81eb-682adff13562"
};

var optsSearch = {};

var optsCancel = {
  "paymentId": "5a5b9d55-7d93-4b5d-81eb-682adff13562"
};

var callback = function (error, data, response) {
    if (error) {
        console.error("The Error is: ", error.status);
        console.error(error.response.res.text);
        throw "Bad Request";
    } else {
        console.log("OP API called successfully. Response status: " + response.status);
    }
};
api.vendorapiSecureOutboundpaymentsPost(xApiKey, xAppKey, xVersion, origin, optsCreate, callback);
// api.vendorapiSecureOutboundpaymentsDetailPost(xApiKey, xAppKey, xVersion, origin, optsDetails, callback);
// api.vendorapiSecureOutboundPaymentsTimelinesPost(xApiKey, xAppKey, xVersion, origin, optsTimeline, callback);
// api.vendorapiSecureOutboundpaymentsSearchPost(xApiKey, xAppKey, xVersion, origin, optsSearch, callback);
// api.vendorapiSecureOutboundpaymentsCancelPost(xApiKey, xAppKey, xVersion, origin, optsCancel, callback);