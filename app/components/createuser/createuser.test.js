import React from "react";
import CreateUser from "./CreateUser";
import { shallow, mount } from "enzyme";

describe("CreateUser page", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CreateUser />);
  });

  test("should exist", () => {
    expect(wrapper).toBeDefined();
  });

  test("should have a default state", () => {
    expect(wrapper.state()).toEqual({
      user: {},
      name: "",
      email: "",
      password: ""
    });
  });

  test("state should change when user inputs personal information", () => {
    const nameInput = wrapper.find("input").first();
    const emailInput = wrapper.find("input").second();
    const password = wrapper.find("input").third();

    nameInput.simulate("change", { target: { value: "Margo" } });
    emailInput.simulate("change", { target: { value: "margo@margo.com" } });
    password.simulate("change", { target: { value: "margo" } });

    expect(wrapper.state()).toEqual({
      user: {},
      name: "Margo",
      email: "margo@margo.com",
      password: "margo"
    });
  });

  test("upon submitting the form, function is run", () => {
    const mockFn = jest.fn();
    const component = shallow(<CreateUser onSubmit={mockFn} />);

    const submitInput = component.find("input").last();

    submitInput.simulate("click");
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
