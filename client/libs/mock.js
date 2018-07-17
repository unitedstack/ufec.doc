const Promise = require('rsvp').Promise;

export default (data, delay) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(data);
  }, delay);
});
