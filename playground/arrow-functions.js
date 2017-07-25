/* eslint no-console: "off" */

const _ = require("lodash");

const myName = "Niels P.",

    sayHello = (name) => {
        console.log(`Hello ${name}`);
    },

    obj = {
        "name": myName,
        "a": () => console.log("a", this.name),
        "b" () {
            console.log("b", this.name);
        },
        "c" () {
            console.log("c", this.name);
        }
    };


obj.a();
obj.b();
obj.c();

sayHello(myName);

// Arrow function same as function(msg, callback) { }
const withCallback = (msg, callback) => {
    const timeout = 2000;

    setTimeout(() => {
        console.log(`Inside withCallback - message is ${msg}`);
        if (callback && _.isFunction(callback)) {
            return callback();
        }

        return null;
    },
    timeout);
};

withCallback("test1", () => console.log("test1", "callback as expression"));
withCallback("test2", () => {
    console.log("test2", "callback with arrow function");
});