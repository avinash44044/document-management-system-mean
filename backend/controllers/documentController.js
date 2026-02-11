const Document = require('../models/Document');

/* ============================= */
/* Upload New Document */
/* ============================= */
exports.uploadDocument = async (req, res) => {
  try {

    const { title, category, tags } = req.body;

    const newDoc = new Document({
      title,
      category,
      tags: tags ? tags.split(',') : [],
      currentFile: req.file.path,
      owner: req.user.id,
      permissions: [],
      versions: []
    });

    await newDoc.save();

    res.status(201).json(newDoc);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


/* ============================= */
/* Get Documents */
/* ============================= */
exports.getDocuments = async (req, res) => {
  try {

    const docs = await Document.find({
      $or: [
        { owner: req.user.id },
        { 'permissions.user': req.user.id }
      ]
    });

    res.json(docs);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


/* ============================= */
/* Search Documents */
/* ============================= */
exports.searchDocuments = async (req, res) => {
  try {

    const query = req.query.q;

    const docs = await Document.find({
      $and: [
        {
          $or: [
            { owner: req.user.id },
            { 'permissions.user': req.user.id }
          ]
        },
        {
          $or: [
            { title: { $regex: query, $options: 'i' } },
            { category: { $regex: query, $options: 'i' } },
            { tags: { $regex: query, $options: 'i' } }
          ]
        }
      ]
    });

    res.json(docs);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


/* ============================= */
/* Upload New Version */
/* ============================= */
exports.uploadNewVersion = async (req, res) => {
  try {

    const doc = await Document.findById(req.params.id);

    if (!doc) {
      return res.status(404).json({ message: 'Document not found' });
    }

    const isOwner = doc.owner.toString() === req.user.id;

    const permission = doc.permissions.find(
      p => p.user.toString() === req.user.id
    );

    if (!isOwner && permission?.role !== 'editor') {
      return res.status(403).json({ message: 'Not allowed' });
    }

    doc.versions.push({
      filePath: doc.currentFile,
      uploadedBy: req.user.id
    });

    doc.currentFile = req.file.path;

    await doc.save();

    res.json(doc);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


/* ============================= */
/* Set Permission */
/* ============================= */
exports.setPermission = async (req, res) => {
  try {

    const { userId, role } = req.body;

    const doc = await Document.findById(req.params.id);

    if (!doc) {
      return res.status(404).json({ message: 'Document not found' });
    }

    // Only owner can assign permission
    if (doc.owner.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Only owner can set permissions' });
    }

    // Remove existing permission if exists
    doc.permissions = doc.permissions.filter(
      p => p.user.toString() !== userId
    );

    // Add new permission
    doc.permissions.push({
      user: userId,
      role
    });

    await doc.save();

    res.json({ message: 'Permission updated', doc });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
