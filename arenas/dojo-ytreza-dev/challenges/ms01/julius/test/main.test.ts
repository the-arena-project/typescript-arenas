import { empty_field, field_of_single_line, complex_field } from "..";

describe("do you understand the rules ?", () => {
  it("an empty field should give en empty solved field", () => {
    expect(empty_field).toEqual("");
  });

  it("a field with a single line", () => {
    expect(field_of_single_line).toEqual("01*10");
  });

  it("a complex field", () => {
    expect(complex_field).toEqual("012*10\n13*310\n1**200");
  });


});
