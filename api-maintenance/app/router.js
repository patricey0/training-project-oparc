const {Router} = require('express');

const maintenanceController = require('./controllers/maintenanceController');

const router = Router();

router.get('/', maintenanceController.incidentsPage);

module.exports = router;