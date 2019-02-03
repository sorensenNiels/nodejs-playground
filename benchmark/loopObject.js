const _ = require("lodash");
const Benchmark = require("benchmark");
const { isPlainObject, object } = require("../utilities");
const suite = new Benchmark.Suite();

const baseObject = {
  a: 1,
  b: 2,
  c: "A string 1",
  d: "A string 2",
  foo: {
    a: 1,
    b: 2,
    c: "A string 1",
    d: "A string 2"
  }
};

// const forEach = (obj, fn) => {
//   if (typeof fn !== "function") throw new TypeError();
//   if (!isPlainObject(obj)) throw new TypeError();

//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       fn.call(obj, obj[key], key);
//     }
//   }
// };

// add tests
suite
  .add("loop using custom forEach", function() {
    object.forEach(baseObject, (value, key) => {
      // Nothing to do
    });
  })
  .add("loop using for var key in", function() {
    for (let key in baseObject) {
      if (baseObject.hasOwnProperty(key)) {
        // Nothing to do
      }
    }
  })
  .add("loop using Object.entries", function() {
    for (const [key, value] of Object.entries(baseObject)) {
      // Nothing to do
    }
  })
  .add("loop using lodash forEach", function() {
    _.forEach(baseObject, (value, key) => {
      // Nothing to do
    });
  })
  // add listeners
  .on("cycle", function(event) {
    console.log(String(event.target));
  })
  .on("complete", function() {
    console.log("Fastest is " + this.filter("fastest").map("name"));
  })
  // run async
  .run({ async: true });

// logs:
// => RegExp#test x 4,161,532 +-0.99% (59 cycles)
// => String#indexOf x 6,139,623 +-1.00% (131 cycles)
// => Fastest is String#indexOf
