
import locationReducer, {
  setLocation
} from "../location";

describe("locationSlice", () => {
  describe("reducers", () => {
    it("returns initial state", () => {
      const nextState = locationReducer({}, {});

      expect(nextState).toStrictEqual({});
    });
  });

  describe("Testing Reducers", () => {
    it("setLocation", async () => {
      const payload = { lat: 165165616, lng: 54646454, fullAdress: "Rua teste" };
      const expectedAction = {
        type: "location/setLocation",
        payload
      };

      expect(setLocation(payload)).toEqual(expectedAction);
    });
  });
});
