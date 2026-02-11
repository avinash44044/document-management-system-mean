const express = require('express');
const router = express.Router();

const auth = require('../middleware/authMiddleware');
const uploadMiddleware = require('../middleware/uploadMiddleware');

const {
  uploadDocument,
  getDocuments,
  searchDocuments,
  uploadNewVersion,
  setPermission
} = require('../controllers/documentController');



router.get('/', auth, getDocuments);

router.get('/search', auth, searchDocuments);

router.post('/upload', auth, uploadMiddleware, uploadDocument);

router.put('/version/:id', auth, uploadMiddleware, uploadNewVersion);

// 🔥 Permission route
router.put('/permission/:id', auth, setPermission);

module.exports = router;
