import { currentFormat } from "../../../helpers/currentFormat"
import { useCart } from "../../../hooks/useCart"
import { Container } from "../ConfirmOrder/styles"

export function PayOrder(){
    const {cart, payOrder} = useCart()

    const totalAmount = cart.reduce((acc, item) => (acc += item.subtotal), 0)

    return (
        <Container>
            <button type="button" onClick={payOrder}>
                Pagar
            </button>
            <span>
                Total <strong>{currentFormat(totalAmount)}</strong>
            </span>
        </Container>
    )
}