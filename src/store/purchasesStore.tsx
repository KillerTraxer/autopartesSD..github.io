import create from 'zustand';
import { persist } from 'zustand/middleware';

const usePurchasesStore = create(
    persist(
        (set) => ({
            purchases: [],
            addPurchase: (purchase: any) => set((state: any) => {
                const existingPurchase = state.purchases.find((p: any) => p.collectionId === purchase.collectionId);
                if (existingPurchase) {
                    // Si la compra ya existe, no hacer nada
                    return state;
                } else {
                    // Si la compra no existe, agregarla a la lista
                    return {
                        purchases: [...state.purchases, purchase],
                    };
                }
            }),
        }),
        {
            name: 'purchases-storage',
            getStorage: () => localStorage,
        }
    )
);

export default usePurchasesStore;
