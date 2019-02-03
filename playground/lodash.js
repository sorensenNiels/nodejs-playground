const _ = require("lodash");

const obj1 = {
  0: { text: "Element 0" },
  1: { text: "Element 1" },
  2: { text: "Element 2" }
};

const test = _.flatMap(obj1, n => n);
console.log(test);
