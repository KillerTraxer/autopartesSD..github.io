import create from 'zustand';
import { persist } from 'zustand/middleware';

const useFavoritesStore = create(
    persist(
        (set) => ({
            favorites: [],
            toggleFavorite: (product: any) => set((state: any) => {
                const productIndex = state.favorites.findIndex((favorite: any) => favorite.id === product.id);
                if (productIndex >= 0) {
                    return {
                        favorites: [...state.favorites.slice(0, productIndex), ...state.favorites.slice(productIndex + 1)],
                    };
                } else {
                    return {
                        favorites: [...state.favorites, product],
                    };
                }
            }),
        }),
        {
            name: 'favorites-storage',
            getStorage: () => localStorage,
        }
    )
);

export default useFavoritesStore;