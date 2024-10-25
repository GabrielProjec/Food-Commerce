
import Header from "../../components/Header"
import Snacks from "../../components/Snacks"
import SnackTitle from "../../components/SnackTitle"
import { useSnack } from "../../hooks/useSnacks"

function Pizzas() {
  const {pizzas} = useSnack()


  return (
    <>
      <Header title='Pizzas' />
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={pizzas}></Snacks>
    </>
  )
}

export default Pizzas