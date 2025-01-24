import { create } from 'zustand'
import { Product, CartItem } from '../../utils/types'

interface CartState {
  cart: CartItem[]
  addToCart: (newCartItem: Product) => void
  removeFromCart: (cartId: number) => void
  incrementCartQuantity: (cartId: number) => void
  decrementCartQuantity: (cartId: number) => void
  clearCart: () => void
}

export const useCartStore = create<CartState>((set, get) => ({
  cart: [],
  addToCart: (newCartItem: Product) => {
    const currentCart = get().cart
    const existingCartItem = currentCart.find(
      (product) => product.id === newCartItem.id
    )
    if (existingCartItem) {
      set({
        cart: currentCart.map((item: CartItem) =>
          item.id === newCartItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      })
    } else {
      set({ cart: [...currentCart, { ...newCartItem, quantity: 1 }] })
    }
  },
  removeFromCart: (cartId: number) =>
    set((state) => ({
      cart: state.cart.filter((product: CartItem) => product.id !== cartId),
    })),
  incrementCartQuantity: (cartId: number) => {
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id == cartId ? { ...item, quantity: item.quantity + 1 } : item
      ),
    }))
  },
  decrementCartQuantity: (cartId: number) => {
    set((state) => {
      const updatedCart = state.cart.map((item) =>
        item.id === cartId ? { ...item, quantity: item.quantity - 1 } : item
      )
      return {
        cart: updatedCart.filter((item) => item.quantity > 0),
      }
    })
  },
  clearCart: () => set({ cart: [] }),
}))
