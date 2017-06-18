var Form = require("../models/form");

module.exports = function(req, res, next){

    Form.find({}, function(err, infos){
        if(err) throw err;
        res.json(infos);
    });
};