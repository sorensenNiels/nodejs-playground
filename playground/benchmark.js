const _ = require("lodash");

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

// Spread operator vs alternatives
const spreadOperator = () => {
  let i, startTime, endTime, duration;

  // Base timing using spread operator
  startTime = new Date().getTime();
  for (i = 0; i < 10000; i++) {
    cloneObject = { ...baseObject };
  }
  endTime = new Date().getTime();
  console.log("Clone using spread operator", endTime - startTime);
  console.log(cloneObject === baseObject, cloneObject);

  // Timing using Object.assign
  startTime = new Date().getTime();
  for (i = 0; i < 10000; i++) {
    cloneObject = Object.assign(cloneObject, baseObject);
  }
  endTime = new Date().getTime();
  console.log("Clone using Object.assign", endTime - startTime);
  console.log(cloneObject === baseObject, cloneObject);

  // Timing using _.clone
  startTime = new Date().getTime();
  for (i = 0; i < 10000; i++) {
    cloneObject = _.clone(baseObject);
  }
  endTime = new Date().getTime();
  console.log("Clone using lodash clone", endTime - startTime);
  console.log(cloneObject === baseObject, cloneObject);
};

spreadOperator();
