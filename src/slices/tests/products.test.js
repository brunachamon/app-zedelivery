
import productsReducer, {
  setProducts
} from "../products";

describe("productsSlice", () => {
  describe("reducers", () => {
    it("returns initial state", () => {
      const nextState = productsReducer([], []);

      expect(nextState).toStrictEqual([]);
    });
  });

  describe("Testing Reducers", () => {
    it("setProducts", async () => {
      const payload = [
        {
          id: "8868",
          images: [],
          productVariants: [],
          rgb: false,
          title: "Skol 269ml - Unidade"
        }
      ];
      const expectedAction = {
        type: "products/setProducts",
        payload
      };

      expect(setProducts(payload)).toEqual(expectedAction);
    });
  });
});
