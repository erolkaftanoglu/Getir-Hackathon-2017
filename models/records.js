/**
 * Created by erol on 28.02.2017.
 */
var mongoose = require('mongoose');

var schema = mongoose.Schema({
    key: String,
    value: String,
    createdAt: String
});

module.exports = mongoose.model('records', schema);
