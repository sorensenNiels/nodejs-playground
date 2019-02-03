const isObject = o =>
  o != null && typeof o === "object" && Array.isArray(o) === false;

module.exports = isObject;
