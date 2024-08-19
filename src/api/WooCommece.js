// import WooCommerceAPI from "woocommerce-api";
// import '../envConfig.ts'
var WooCommerceAPI = require('woocommerce-api');

const WC_CONSUMER_KEY = "ck_ad88c6e186c5f98b17ca7d6a7e53fc7e04e697b9"
const WC_CONSUMER_SECRET = "cs_d91af2647856cc3ee606238af4c90f19ef018ec7"
 
var WooCommerce = new WooCommerceAPI({
  url: 'http://example.com',
  consumerKey: WC_CONSUMER_KEY,
  consumerSecret: WC_CONSUMER_SECRET,
  wpAPI: true,
  version: 'wc/v1'
});
 
// export default defineConfig({
//   dbCredentials: {
//     connectionString,
//   },
// })

// const CK = process.env.WC_CONSUMER_KEY
// const CS = process.env.WC_CONSUMER_SECRET



console.log(CS, CK)
