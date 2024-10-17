import { useEffect, useState } from "react"
import Header from "../../components/Header"
import Snacks from "../../components/Snacks"
import SnackTitle from "../../components/SnackTitle"
import { getDrinks } from "../../services/api"

function Drinks(){

  const [drinks, setDrinks] = useState([])

  useEffect(() => {
    (async () => {
      const drinksRequest = await getDrinks()

      setDrinks(drinksRequest.data)
    })()
  },[])

  
      return (
        <>
          <Header title='Bebidas' />
          <SnackTitle>Bebidas</SnackTitle>
          <Snacks snacks={drinks}></Snacks>
        </>
      )
    }

    export default Drinks;