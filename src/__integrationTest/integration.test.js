import moxios from "moxios";
import { testStore } from "../utils/testUtils";
import { fetchPosts } from "../reducers/Posts/reducer";

describe("fetch Posts action", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("store is updated correctly : ", () => {
    const expectedState = [
      {
        title: "example test1",
        desc: "this is an example test"
      },
      {
        title: "example test2",
        desc: "this is an example test2"
      },
      {
        title: "example test3",
        desc: "this is an example test3"
      }
    ];

    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState
      });

      return store.dispatch(fetchPosts()).then(() => {
        const newState = store.getState();
        expect(newState.posts).toBe(expectedState);
      });
    });
  });
});
