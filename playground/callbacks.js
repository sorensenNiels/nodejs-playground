/* eslint no-console: "off" */

const _ = require("lodash");

// Arrow function same as function(msg, callback) { }
const withCallback = (msg, callback) => {
    const timeout = 2000;

    setTimeout(() => {
        console.log(`Inside withCallback - message is ${msg}`);
        if (callback && _.isFunction(callback)) {
            return callback(timeout);
        }

        return null;
    },
    timeout);
};

withCallback(
    "test1",
    (timeout) => console.log("callback as expression", timeout)
);

withCallback(
    "test2",
    (timeout) => {
        console.log("callback with arrow function", timeout);
    }
);