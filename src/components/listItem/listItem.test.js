import React from "react";
import { shallow } from "enzyme";
import ListItem from "./listItem";
import { checkProps, findAtrr } from "../../utils/testUtils";
import Enzyme from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
Enzyme.configure({
  adapter: new EnzymeAdapter(),
  disableLifecycleMethods: true
});

const setUp = (props = {}) => {
  const component = shallow(<ListItem {...props} />);

  return component;
};

describe("listItem component", () => {
  describe("checking props: ", () => {
    it("should not throw an error : ", () => {
      const expectedProps = {
        title: "the text example",
        desc: "example description"
      };

      const propsErr = checkProps(ListItem, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe("Component Rendering", () => {
    let wrapper;

    beforeEach(() => {
      const props = {
        title: "the text example",
        desc: "example description"
      };

      wrapper = setUp(props);
    });

    it("Should render without error: ", () => {
      // console.log(wrapper)
      const component = findAtrr(wrapper, "listItemComponent");
      expect(component.length).toBe(1);
    });

    it("Should render title className ", () => {
      // console.log(wrapper)
      const component = findAtrr(wrapper, "titleClassName");
      expect(component.length).toBe(1);
    });

    it("Should render desc className ", () => {
      // console.log(wrapper)
      const component = findAtrr(wrapper, "descClassName");
      expect(component.length).toBe(1);
    });
  });
});
