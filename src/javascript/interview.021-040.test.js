describe("quizz", () => {
  it("encode/decodeURI", () => {
    let uri = "employeeDetails?name=john&occupation=manager";

    let encoded_uri = encodeURI(uri);
    let decoded_uri = decodeURI(encoded_uri);

    expect(encoded_uri).toBe(uri);
    expect(decoded_uri).toBe(uri);
  });
});
