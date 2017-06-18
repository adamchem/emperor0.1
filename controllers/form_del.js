var Form = require("../models/form");

module.exports = function(req, res, next){
    Form.findOneAndRemove({_id: req.params.id}, function(err){
        if(err) throw err;
        console.log('deleted');
        Form.find({}, function(err, users){
            if(err) throw err;
            res.json({userinfos: users});
        });
    });
};