const router = require('express').Router();
const adminController = require('../controllers/adminController');
const { upload, uploadMultiple } = require('../middlewares/multer');
const auth = require('../middlewares/auth');

router.get('/signin', adminController.viewLogin);
router.post('/signin', adminController.actionLogin);
router.use(auth);
router.post('/logout', adminController.actionLogout);
router.post('/create', adminController.createAcccount);

router.get('/dashboard', adminController.viewDashboard);

router.get('/userlist', adminController.viewAdminlist);
router.get('/add-user', adminController.addPageAdminlist);
router.delete('/userlist/:id', adminController.deleteUser);

router.get('/configuration', adminController.viewConfiguration);
router.post('/configuration', adminController.addConfiguration);
router.put('/configuration', adminController.editConfiguration);

router.get('/band', adminController.viewBand);
router.get('/add-band', adminController.addPageBand);
router.post('/add-band', uploadMultiple, adminController.addBand);
router.get('/band/:id', uploadMultiple, adminController.editPageBand);
router.put('/band/:id', uploadMultiple, adminController.editBand);
router.delete('/band/:id', adminController.deleteBand);

router.get('/project', adminController.viewProject);
router.get('/add-project', adminController.addPageProject);
router.post('/add-project', upload, adminController.addProject);
router.get('/project/:id', adminController.editPageProject);
router.put('/project/:id', upload, adminController.editProject);
router.delete('/project/:id', adminController.deleteProject);

router.get('/portofolio', adminController.viewPortofolio);

router.get('/portofolio/image', adminController.viewPortofolioImage);
router.get('/portofolio/add-image', adminController.addPagePortofolioImage);
router.post('/portofolio-image', upload, adminController.addPortofolioImage);
router.get('/portofolio-image/:id', adminController.editPagePortofolioImage);
router.put('/portofolio-image/:id', upload, adminController.editPortofolioImage);
router.delete('/portofolio-image/:id', adminController.deletePortofolioImage);

router.get('/portofolio/video', adminController.viewPortofolioVideo);
router.get('/portofolio/add-video', adminController.addPagePortofolioVideo);
router.post('/portofolio-video', adminController.addPortofolioVideo);
router.get('/portofolio-video/:id', adminController.editPagePortofolioVideo);
router.put('/portofolio-video/:id', adminController.editPortofolioVideo)
router.delete('/portofolio-video/:id', adminController.deletePortofolioVideo);

router.get('/category', adminController.viewCategory);
router.post('/category', adminController.addCategory);
router.put('/category', adminController.editCategory);
router.delete('/category/:id', adminController.deleteCategory);

router.get('/journal', adminController.viewJournal);
router.get('/add-journal', adminController.addPageJournal);
router.post('/add-journal', uploadMultiple, adminController.addJournal);
router.get('/journal/:id', uploadMultiple, adminController.editPageJournal);
router.put('/journal/:id', uploadMultiple, adminController.editJournal);
router.delete('/journal/:id', adminController.deleteJournal);

module.exports = router;