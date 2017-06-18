var Form = require("../models/form");

module.exports = function(req, res, next){
    var form = new Form({
        'name': req.body.name,
        'amount': req.body.amount,
        'note': req.body.note
    });
    
    form.save(function(err){
        if(err) throw err;
        console.log('created');

        Form.find({}, function(err, infos){
            if(err) throw err;
            res.json(infos);
        });
    });
};