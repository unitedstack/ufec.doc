const Promise = require('rsvp').Promise;

export default (data, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
};
