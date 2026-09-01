import { create } from "zustand";
import { persist } from "zustand/middleware";

const useQuantityStore = create(
  persist(
    (set) => ({
      quantity: 1,
      increaseQuantity: () =>
        set((state) => ({
          quantity: state.quantity + 1,
        })),
      decreaseQuantity: () =>
        set((state) => ({
          quantity: state.quantity - 1,
        })),
    }),
    {
      name: "cartQuantity",
    },
  ),
);

export default useQuantityStore;
