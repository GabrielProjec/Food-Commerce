import { currentFormat } from "../../../../helpers/currentFormat"
import { useCart } from "../../../../hooks/useCart"
import { Container } from "./styles"
import {FaTrashAlt} from 'react-icons/fa'

import plusImg from '../../../../assets/circle-plus.svg'
import minusImg from '../../../../assets/circle-minus.svg'

export function TableDesktop() {
    const {cart, removeSnackFromCart, snackCartDecrement, snackCartIncrement} = useCart()

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Lanche</th>
                        <th>Qtd</th>
                        <th>SubTotal</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((item) => (
                            <tr key={`${item.snack}-${item.id}`}>
                                <td>
                                    <img src={item.image} alt={item.name} />
                                </td>
                                <td>
                                    <h4>{item.name}</h4>
                                    <span>{currentFormat(item.price)}</span>
                                </td>
                                <td>
                                    <div>
                                        <button type="button" onClick={() => snackCartDecrement(item)}>
                                            <img src={minusImg} alt="button de diminuir" />
                                        </button>
                                    <span>

                                    {`${item.quantity}`.padStart(2 , '0')}
                                    </span>
                                    <button type="button" onClick={() => snackCartIncrement(item)}>
                                            <img src={plusImg} alt="button de diminuir" />
                                        </button>
                                    </div>
                                </td>
                                <td>
                                    <h5>{currentFormat(item.subtotal)}</h5>
                                </td>
                                <td>
                                    <button onClick={() => removeSnackFromCart(item)}>
                                    <FaTrashAlt />
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </Container>
    )
}