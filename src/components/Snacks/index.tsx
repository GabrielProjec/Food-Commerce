import { Container } from "./styles"
import {FiPlus} from 'react-icons/fi'
import { currentFormat } from "../../helpers/currentFormat"

interface SnacksProps {
    snacks: any[]
}

function Snacks({ snacks }: SnacksProps) {
    return (
        <Container>
            {snacks.map((snack) => {
                return (
                    <div key={snack.id} className="snack">
                        <h2>{snack.name}</h2>
                        <img src={snack.image} alt={snack.name} />
                        <p>{snack.description}</p>
                        <div>
                            <strong>{currentFormat(snack.price)}</strong>
                            <button type="button">
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