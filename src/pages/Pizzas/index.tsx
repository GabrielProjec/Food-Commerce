import { useContext} from "react"
import Header from "../../components/Header"
import Snacks from "../../components/Snacks"
import SnackTitle from "../../components/SnackTitle"

import { SnackContext } from "../../context/SnackContext"

function Pizzas() {
  const {pizzas} = useContext(SnackContext)


  return (
    <>
      <Header title='Pizzas' />
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={pizzas}></Snacks>
    </>
  )
}

export default Pizzas