import { useEffect, useState } from "react"
import Header from "../../components/Header"
import Snacks from "../../components/Snacks"
import SnackTitle from "../../components/SnackTitle"
import { getPizzas } from "../../services/api"

function Pizzas() {


  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    (async () => {
      const pizzasRequest = await getPizzas()

      setPizzas(pizzasRequest.data)
    })()
  }, [])



  return (
    <>
      <Header title='Pizzas' />
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={pizzas}></Snacks>
    </>
  )
}

export default Pizzas