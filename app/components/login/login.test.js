import React from "react";
import Login from "./Login";
import { shallow, mount } from "enzyme";

describe("Login page", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  afterEach(() => {
    localStorage.clear();
  });

  test("should exist", () => {
    expect(wrapper).toBeDefined();
  });

  test("should have a default state", () => {
    expect(wrapper.state()).toEqual({
      user: {},
      email: "",
      password: ""
    });
  });

  test("state should change when user inputs personal information", () => {
    const email = wrapper.find("input").first();
    const password = wrapper.find("input").second();

    email.simulate("change", { target: { value: "margo@margo.com" } });
    password.simulate("change", { target: { value: "margo" } });

    expect(wrapper.state()).toEqual({
      user: {},
      email: "margo@margo.com",
      password: "margo"
    });
  });

  test("upon submitting the form, function is run", () => {
    const mockFn = jest.fn();
    const component = shallow(<Login onSubmit={mockFn} />);
    const submitInput = component.find("input").last();
    submitInput.simulate("click");
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test("should be able to save user to localStorage", () => {
    const user = { email: "margo@margo.com", password: "margo" };
    wrapper.instance().sendToStorage(user);
    expect(localStorage.store.user).toEqual({
      email: "margo@margo.com",
      password: "margo"
    });
  });
});
