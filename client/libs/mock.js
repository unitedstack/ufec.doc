const Promise = require('rsvp').Promise;

export default (data, delay, error) => new Promise((resolve, reject) => {
  if (error) {
    reject(error);
  }
  setTimeout(() => {
    resolve(data);
  }, delay);
});
