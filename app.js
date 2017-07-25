/* eslint no-console: "off" */

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