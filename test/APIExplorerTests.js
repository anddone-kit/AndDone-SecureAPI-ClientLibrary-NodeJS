import SecurePaymentIntentApi from '../src/api/SecurePaymentIntentApi.js';
import SecurePaymentLinksApi from '../src/api/SecurePaymentLinksApi.js';
import SecurePaymentsApi from '../src/api/SecurePaymentsApi.js';
import SecureEmbeddedPremiumFinanceApi from '../src/api/SecureEmbeddedPremiumFinanceApi.js';
import SecureEmbeddedPremiumFinanceEndorsementsApi from '../src/api/SecureEmbeddedPremiumFinanceEndorsementsApi.js';
import SecurePremiumFinanceLiteApi from '../src/api/SecurePremiumFinanceLiteApi.js';
import SecureOrumApi from '../src/api/SecureOrumApi.js';
import SecurePaymentBatchingApi from '../src/api/SecurePaymentBatchingApi.js';
import SecureVoidsApi from '../src/api/SecureVoidsApi.js';
import SecureVendorManagementApi from '../src/api/SecureVendorManagementApi.js';
import SecureOutboundPaymentsApi from '../src/api/SecureOutboundPaymentsApi.js';
import SecureRefundsApi from '../src/api/SecureRefundsApi.js';
import SecureReportsApi from '../src/api/SecureReportsApi.js';
import SecureTokenLinksApi from '../src/api/SecureTokenLinksApi.js';
import SecureTokenManagementApi from '../src/api/SecureTokenManagementApi.js';
import ApiClient from '../src/ApiClient.js';

let xApiKey = 'T3Hj93GzbuhMLiNQg/yJ/yNArhFJeEHoSLyFZ9IBQkY=';
let xAppKey = 'bdYqRMdn';
let xVersion = 2.3;
let origin = '136.34.79.196/32';

let postBody = {
  "paymentId": "3a5167e6-bd18-4c44-9d5e-075813f30896"
};

let api_client = new ApiClient();
api_client.basePath = 'https://api2.uat.anddone.com';
let api_instance = new SecureOutboundPaymentsApi(api_client);

api_instance.vendorapiSecureOutboundpaymentsDetailPost(xApiKey, xAppKey, xVersion, origin, postBody, (error, data, response) => {
    if (error) {
        console.error("The Error is: ", error);
    } else {
        console.log('API response: ', response.status);
        console.log('API response body: ', data);
    }
});