import { createContext, useState, useEffect, ReactNode } from 'react'
import { SnackData } from '../interfaces/SnackData';

interface Snack extends SnackData {
    quantity: number;
    subtotal: number
}

interface UpdateCartProps {
    id: number;
    snack: string;
    newQuantity: number
}

interface RemoveSnackFromCartProps {
    id: number;
    snack: string
}

interface CartContextProps {
    cart: Snack[]
    addSnackIntoCart: (snack: SnackData) => void;
   // updateCart: ({id, snack , newQuantity}: UpdateCartProps) => void;
   // removeSnackFromCart: ({id, snack}: RemoveSnackFromCartProps ) => void
}

interface CartProviderProps {
    children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export function CartProvider({children}: CartProviderProps){
   const [cart, setCart] = useState<Snack[]>([])

   function addSnackIntoCart(snack: SnackData): void {
    const newSnack = {...snack, quantity: 1, subtotal: snack.price}
    const newCart = [...cart, newSnack]
    setCart(newCart)
   }


   return (
    <CartContext.Provider value={{cart, addSnackIntoCart}}>
        {children}
    </CartContext.Provider>
   )
}