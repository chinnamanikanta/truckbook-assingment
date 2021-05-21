import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";
import Headline from "./Headline/headline";
import Enzyme from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { checkProps, findAtrr } from "../utils/testUtils";

Enzyme.configure({
  adapter: new EnzymeAdapter(),
  disableLifecycleMethods: true
});

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);

  return component;
};

describe("Header component", () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  it("should render without error", () => {
    const wrapper = findAtrr(component, "HeaderComponent");

    expect(wrapper.length).toBe(1);
  });

  it("should render button without error", () => {
    const wrapper = findAtrr(component, "btn");
    expect(wrapper.length).toBe(1);
  });
});

describe("Headerline render props", () => {
  describe("checking props:", () => {
    it("should not throw a warning:", () => {
      const expectedProps = {
        posts: "Test posts",
        desc: "Test description",
        tempData: [
          {
            fname: "Test fName",
            lname: "Test lname",
            email: "Test Email",
            age: 25,
            onlineStatus: true
          }
        ]
      };

      const propsErr = checkProps(Headline, expectedProps);

      expect(propsErr).toBeUndefined();
    });
  });
});
