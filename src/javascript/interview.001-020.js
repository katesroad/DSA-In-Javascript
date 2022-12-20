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
