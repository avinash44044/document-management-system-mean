const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true
  },

  category: String,

  tags: [String],

  currentFile: {
    type: String,
    required: true
  },

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  permissions: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
      role: {
        type: String,
        enum: ['viewer', 'editor']
      }
    }
  ],

  versions: [
    {
      filePath: String,
      uploadedAt: {
        type: Date,
        default: Date.now
      },
      uploadedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
    }
  ]

}, { timestamps: true });

module.exports = mongoose.model('Document', documentSchema);
