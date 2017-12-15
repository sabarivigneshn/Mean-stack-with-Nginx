var mongoose = require('mongoose');

module.exports = mongoose.model('Issue', {
    tracker: {
        type: String,
        default: ''
    },
    subject: {
        type: String,
        default: ''
    },
    status: {
        type: String,
        default: ''
    },
    priority: {
      type: String,
      default: ''
    },
    assignee: {
        type: String,
        default: ''
    }
});
