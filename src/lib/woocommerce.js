import axios from 'axios';

const wooCommerce = axios.create({
  baseURL: `${process.env.WC_STORE_URL}/wp-json/wc/v3`,
  auth: {
    username: process.env.WC_CONSUMER_KEY,
    password: process.env.WC_CONSUMER_SECRET,
  },
});

export default wooCommerce;