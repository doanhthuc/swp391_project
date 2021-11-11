import create from "zustand";
import { persist } from "zustand/middleware";

const store = (set, get) => ({
  // Variables
  products: [],
  // Functions
  addProduct: (product) => {
    const lstOfProducts = get().products;
    let flag = false;
    for (let i = 0; i < lstOfProducts.length; i++) {
      if (lstOfProducts[i].productId === product.productId) {
        lstOfProducts[i].quantity += product.quantity;
        flag = true;
        break;
      }
      flag = false;
    }
    if (flag) {
      return set(() => ({ products: lstOfProducts }));
    } else {
      return set(() => ({ products: [...get().products, product] }));
    }
  },
  deleteProduct: (id) => {
    const lstOfProducts = get().products.filter((x) => x.productId !== id);
    return set(() => ({ products: lstOfProducts }));
  },
  clearAllProducts: () => set(() => ({ products: [] })),
});

const orderStore = create(persist(store));

export default orderStore;
