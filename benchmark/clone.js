const _ = require("lodash");
const Benchmark = require("benchmark");

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

let cloneObject;

// add tests
suite
  .add("spread operator", function() {
    cloneObject = { ...baseObject };
  })
  .add("Object.assign", function() {
    Object.assign(cloneObject, baseObject);
  })
  .add("lodash clone", function() {
    cloneObject = _.clone(baseObject);
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
