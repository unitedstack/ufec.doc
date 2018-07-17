const moment = require('client/libs/moment');

function getTime(time, fromNow, formatter) {
  const uniformTime = time.replace('.000000', 'Z');
  const _formatter = formatter || 'YYYY-MM-DD HH:mm:ss';

  if (fromNow) {
    return moment(uniformTime).fromNow();
  }
  return moment(uniformTime).format(_formatter);
}

module.exports = getTime;
