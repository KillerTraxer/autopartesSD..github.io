import create from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create(
    persist(
        (set) => ({
            cartItems: [],
            addToCart: (product: any, quantity: any) => set((state: any) => {
                const existingProduct = state.cartItems.find((item: any) => item.id === product.id);
                if (existingProduct) {
                    return {
                        cartItems: state.cartItems.map((item: any) =>
                            item.id === product.id
                                ? { ...existingProduct, quantity: existingProduct.quantity + quantity }
                                : item
                        ),
                    };
                }
                return {
                    cartItems: [...state.cartItems, { ...product, quantity }],
                };
            }),
            removeFromCart: (productId: any) => set((state: any) => ({
                cartItems: state.cartItems.filter((item: any) => item.id !== productId),
            })),
            updateQuantity: (productId: any, quantity: any) => set((state: any) => ({
                cartItems: state.cartItems.map((item: any) =>
                    item.id === productId ? { ...item, quantity } : item
                ),
            })),
            getTotalPrice: (state: any) => {
                if (!state.cartItems) {
                    return 0; // Retorna 0 si cartItems no está definido
                }
                return state.cartItems.reduce((total: any, item: any) => total + parseFloat(item.price) * item.quantity, 0);
            },

        }),
        {
            name: 'cart-storage',
            getStorage: () => localStorage,
        }
    )
);

export default useCartStore;
