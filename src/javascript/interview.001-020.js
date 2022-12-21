// 03, apply, call. bind
const firstPerson = {
  name: "John Chen",
  occupation: "programmer",
};

function sendInvite(greeting1, greeting2) {
  // eslint-disable-next-line no-console
  console.info(
    `${greeting1} ${this.name}  ${greeting2} ? welcome join in ${this.occupation} family`
  );
}

sendInvite.call(firstPerson, "hello", "how are you");
sendInvite.apply(firstPerson, ["hello", "how are you"]);

const invitedPerson = sendInvite.bind(firstPerson);

invitedPerson("hello", "how are you");

// 13 High order function

{
  // eslint-disable-next-line no-inner-declarations
  function after(time, callback) {
    return function () {
      if (--time == 0) {
        callback();
      }
    };
  }

  const eat = after(3, () => {
    // eslint-disable-next-line no-console
    console.log("Finished Meal");
  });

  eat();
  eat();
  eat();
}

// 15 curry in javascript

{
  const curryUnaryFunction = (a) => (b) => (c) => a + b + c;

  curryUnaryFunction(1); // returns a function: b => c =>  1 + b + c
  curryUnaryFunction(1)(2); // returns a function: c => 3 + c
  curryUnaryFunction(1)(2)(3); // returns the number 6
}

// 16: Pure function, input => output, && doesn't influence its external env

// 17: let vs var
// var, scope elevation
// let, block scope
// salary = 130000$/year vs let salary = 130000$/year
