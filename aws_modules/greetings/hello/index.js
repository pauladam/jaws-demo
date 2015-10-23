/**
 * AWS Module: Action: Modularized Code
 */

var MD5 = require('jshashes').MD5;

// Export For Lambda Handler
module.exports.run = function(event, context, cb) {
  return cb(null, action(event, context));
};

// Handler
var action = function(event, context) {

    var md5 = new MD5();
    var date = new Date();
    var timeStr = 'The time is now: ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() ;

    return { event: event,
             context: context,
             context_hash: md5.hex(JSON.stringify(context)),
             time: timeStr };
};
