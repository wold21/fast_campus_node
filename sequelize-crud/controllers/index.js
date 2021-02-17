const { Router } = require('express');
const router = Router()

router.use('/admin', require('./admin'));
router.use('/company', require('./company'));

module.exports = router;