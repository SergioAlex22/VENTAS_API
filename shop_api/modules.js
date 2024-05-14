const mongoose = require('mongoose');
const { shopSchema } = require('./schemas');

const shopModel = mongoose.model('Shop', shopSchema);

module.exports = {shopModel };