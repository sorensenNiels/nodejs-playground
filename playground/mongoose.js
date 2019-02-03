const expect = require("expect");
const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/test", { useNewUrlParser: true });

const plainObj = {
  foo: "bar"
};

const isMongooseModel = obj =>
  !!obj.prototype && obj.prototype instanceof mongoose.Model;

const isMongooseDocument = obj =>
  obj.$isMongooseModelPrototype || obj instanceof mongoose.Model;

const Cat = mongoose.model("Cat", { name: String });
const kitty = new Cat({ name: "Zildjian" });

expect(isMongooseModel(Cat)).toBeTruthy();
expect(isMongooseModel(plainObj)).toBeFalsy();
expect(isMongooseModel(kitty)).toBeFalsy();

expect(isMongooseDocument(kitty)).toBeTruthy();
expect(isMongooseDocument(Cat)).toBeFalsy();

// kitty.save().then(() => console.log('meow'));
