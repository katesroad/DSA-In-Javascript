// 03, apply, call. bind
const firstPerson = {
  name: "John Chen",
  occupation: "programmer",
};

function sendInvite(greeting1, greeting2) {
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
    console.log("Finished Meal");
  });

  eat();
  eat();
  eat();
}
