import { createContext, useState, ReactNode } from 'react'
import { SnackData } from '../interfaces/SnackData';
import { snackEmoji } from '../helpers/snackEmoji';
import {toast} from 'react-toastify'

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

export function CartProvider({ children }: CartProviderProps) {
    const [cart, setCart] = useState<Snack[]>([])

    function addSnackIntoCart(snack: SnackData): void {
        //buscar
        const snackExistentInCart = cart.find((item) => item.snack === snack.snack && item.id === snack.id)

        // atualizar
        if (snackExistentInCart) {
            const newCart = cart.map((item) => {
                if (item.id === snack.id) {
                    const quantity = item.quantity + 1
                    const subtotal = item.price * quantity

                    return { ...item, quantity, subtotal }
                }
                return item
            })
            toast.success(`Outro(a) ${snackEmoji(snack.snack)} ${snack.name} adicionado nos pedidos!`)
            setCart(newCart)
            return
        }

        // adiciona
        const newSnack = { ...snack, quantity: 1, subtotal: snack.price }
        const newCart = [...cart, newSnack]

        toast.success(`${snackEmoji(snack.snack)} ${snack.name} adicionado nos pedidos!`)
        setCart(newCart)
    }


    return (
        <CartContext.Provider value={{ cart, addSnackIntoCart }}>
            {children}
        </CartContext.Provider>
    )
}