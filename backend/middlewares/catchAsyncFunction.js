module.exports = (inputFunction) => (req, res, next) => {
  Promise.resolve(inputFunction(req, res, next)).catch(next);
};
