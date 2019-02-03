const _ = require("lodash");
const expect = require("expect");

const topObj = {
  a: 1,
  b: 2,
  subObj: {
    sa: 1,
    sb: 2
  }
};

// Spread operator is shallow copy
const cloneObj = { ...topObj };
expect(topObj === cloneObj).toBeFalsy();
expect(topObj.subObj === cloneObj.subObj).toBeTruthy();

// Lodash clone is shallow copy
const cloneObj2 = _.clone(topObj);
expect(topObj === cloneObj2).toBeFalsy();
expect(topObj.subObj === cloneObj2.subObj).toBeTruthy();

// Lodash cloneDeep is true clone
const cloneDeep = _.cloneDeep(topObj);
expect(topObj === cloneDeep).toBeFalsy();
expect(topObj.subObj === cloneDeep.subObj).toBeFalsy();
