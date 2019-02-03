const lang = {};
lang.isPlainObject = value =>
  value instanceof Object && value.constructor === Object;

const object = {};
object.forEach = (obj, fn) => {
  if (typeof fn !== "function") throw new TypeError();
  if (!lang.isPlainObject(obj)) throw new TypeError();

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      fn.call(obj, obj[key], key);
    }
  }
};

module.exports = { object, lang, isPlainObject: lang.isPlainObject };
