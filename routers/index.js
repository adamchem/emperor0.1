var express = require('express');
var create  = require('../controllers/form_create');
var del     = require('../controllers/form_del');
var getinfo = require('../controllers/info_get');
var router  = express.Router();

router.route('/form')
    .get(getinfo)
    .post(create);
router.route('/form/:id')
    .delete(del);

module.exports = router;