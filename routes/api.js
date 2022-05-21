const router = require('express').Router();
const apiController = require('../controllers/apiController');

router.get('/landing-page', apiController.landingPage);
router.get('/band-page/:id', apiController.bandPage);
router.get('/project-page', apiController.projectPage);
router.get('/portofolio-page', apiController.portofolioPage);
router.get('/journal-page', apiController.journalPage);
router.get('/journal-page/:id', apiController.journalDetail);
router.get('/category-page', apiController.categoryPage);
router.get('/category-page/:id', apiController.categoryDetailPage);

module.exports = router;