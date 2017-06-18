var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://110219011:110219011@ds123722.mlab.com:23722/emperor');
var Schema = mongoose.Schema;

var orderSchema = new Schema({
    name: String,
	amount: Number,
    note: String
});
module.exports = mongoose.model('orderSchema', orderSchema);