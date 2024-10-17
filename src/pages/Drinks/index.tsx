import { useContext } from "react"
import Header from "../../components/Header"
import Snacks from "../../components/Snacks"
import SnackTitle from "../../components/SnackTitle"
import { SnackContext } from "../../App"

function Drinks(){
  const {drinks} = useContext(SnackContext)


  
      return (
        <>
          <Header title='Bebidas' />
          <SnackTitle>Bebidas</SnackTitle>
          <Snacks snacks={drinks}></Snacks>
        </>
      )
    }

    export default Drinks;