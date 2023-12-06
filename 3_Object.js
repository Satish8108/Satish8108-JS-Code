// singleton = declear through literals its not singleton. is made with constructer
// object literals

// Object.create

const mySym = Symbol("key1");

const jsuser = {
  name: "Satish",
  "full name": "Satish Shinde",
  [mySym]: "mykey1",
  age: 18,
  location: "Mumbai",
  email: "shinde@123.ocm",
  isLoggedIn: false,
  lastLoggedInDays: ["Monday", "Saturday"],
};

// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(jsuser["full name"]);
// console.log(jsuser[mySym]);  for symbol

jsuser.email = "jm@chgpt.com";
// Object.freeze(jsuser)
jsuser.email = "fk@.com";
// console.log(jsuser);

jsuser.greeting = function () {
  console.log("hello JS User");
};
jsuser.greetingTwo = function () {
  console.log(`hello JS User,${this.name}`);
};

console.log(jsuser.greeting());
console.log(jsuser.greetingTwo())
