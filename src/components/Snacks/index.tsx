import { Container } from "./styles"
import { FiPlus } from 'react-icons/fi'
import { currentFormat } from "../../helpers/currentFormat"
import SkeletonSnacks from "../SkeletonSnacks"
import { SnackData } from "../../interfaces/SnackData"
import { useCart } from "../../hooks/useCart"

interface SnacksProps {
  snacks: SnackData[]
}

function Snacks({ snacks }: SnacksProps) {

  const { cart, addSnackIntoCart } = useCart()

  return (
    <Container>
      {!snacks.length
        ? [1, 2, 3, 4].map((n) => <SkeletonSnacks key={n} />)
        : snacks.map((snack) => {
          const snackExitent = cart.find((item) => item.snack === snack.snack && item.id === snack.id)
          return (
            <div key={snack.id} className='snack'>
              {snackExitent && <span>{snackExitent.quantity}</span>}
              <h2>{snack.name}</h2>
              <img src={snack.image} alt={snack.name} />
              <p>{snack.description}</p>
              <div>
                <strong>{currentFormat(snack.price)}</strong>
                <button type='button' onClick={() => addSnackIntoCart(snack)} >
                  <FiPlus />
                </button>
              </div>
            </div>
          )
        })}
    </Container>
  )
}

export default Snacks