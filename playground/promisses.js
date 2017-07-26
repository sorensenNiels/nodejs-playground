/* eslint no-console: "off" */

const _ = require("lodash");

const withPromise = (msg) => {
    const timeout = 1000;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (msg === "fail") {
                reject("something bad happened");
            } else {
                resolve("Success!");
            }
        }, timeout);
    });
};

withPromise("test1").
    then((res) => console.log("Success", res));

withPromise("fail").
    then((res) => console.log("Success", res)).
    catch((res) => console.log(res));


const doSomeAsync = (options, callback) => {
    const promise = new Promise((resolve, reject) => {
        const check = options.num === 1;

        setTimeout(() => {
            if (check) {
                resolve("Number is 1");
            } else {
                // reject(new Error("Number is not 1"));
                reject("Number is not 1");
            }
        }, 1000);
    });

    if (callback && typeof callback === "function") {
        promise.then(callback.bind(null, null), callback);
    }

    return promise;
};

doSomeAsync({"num": 1}).
    then((res) => console.log("Success!", res)).
    catch((res) => console.log("Failed", res));

doSomeAsync({"num": 2}).
    then((res) => console.log("Success!", res)).
    catch((res) => console.log("Failed", res));

doSomeAsync({"num": 1}, (error, res) => {
    if (error) {
        console.log(error);
    } else {
        console.log("doSomeAsync with callback ->", res);
    }
});

doSomeAsync({"num": 2}, (error, res) => {
    if (error) {
        console.log("doSomeAsync with callback ->", error);
    } else {
        console.log("doSomeAsync with callback ->", res);
    }
});