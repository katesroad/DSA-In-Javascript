import { parseCookie } from "./interview.021-040";

it("encode/decodeURI", () => {
  let uri = "employeeDetails?name=john&occupation=manager";

  let encoded_uri = encodeURI(uri);
  let decoded_uri = decodeURI(encoded_uri);

  expect(encoded_uri).toBe(uri);
  expect(decoded_uri).toBe(uri);
});

it("parseCookie", () => {
  const metadata = {
    department: "engineering",
    level: "Sr",
    reportTo: "Tech Lead",
    role: "FED",
  };

  for (let key in metadata) {
    const value = metadata[key];

    // You can only set one cookie at a time
    // eslint-disable-next-line max-len
    // Read: https://stackoverflow.com/questions/26820747/i-can-only-make-a-cookie-have-one-value-in-javascript/26820801#26820801?newreg=7ae7424e6e974e17b9357a9b12676aef
    document.cookie = `${key}=${encodeURIComponent(value)}`;
  }

  expect(parseCookie()).toEqual(metadata);
});
