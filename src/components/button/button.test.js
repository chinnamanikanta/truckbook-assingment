import React from "react";
// import {setUp} from '../headerComponent.test
import { checkProps, findAtrr } from "../../utils/testUtils";
import Button from "./index";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
Enzyme.configure({
  adapter: new EnzymeAdapter(),
  disableLifecycleMethods: true
});

describe("button Component: ", () => {
  describe("Checking Props : ", () => {
    it("Should not Throw a warning : ", () => {
      const expectedProps = {
        buttonText: "Example text button",
        emitEvent: () => {}
      };
      const propsErr = checkProps(Button, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });
});

describe("rendering the component", () => {
  let wrapper;

  beforeEach(() => {
    const props = {
      buttonText: "example text button",
      emitEvent: () => {}
    };

    wrapper = shallow(<Button {...props} />);
  });

  it("should render the component className: ", () => {
    const button = findAtrr(wrapper, "buttonComponent");
    expect(button.length).toBe(1);
  });
});
