const {Router} = require('express');

const maintenanceController = require('./controllers/maintenanceController');

const router = Router();

router.get('/', maintenanceController.findAll);

module.exports = router;