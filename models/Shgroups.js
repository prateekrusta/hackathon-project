const mongoose = require('mongoose');

const ShgroupsSchema = mongoose.Schema({
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  name: {
    type: String,
    required: true,
  },
  representative: {
    type: String,
    required: true,
  },
  members: {
    type: Number,
    required: true,
  },
  memberList: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
    },
  ],
  phone: {
    type: Number,
    required: true,
  },
  business: {
    type: String,
    required: true,
  },
  assistance: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('shgroups', ShgroupsSchema);
