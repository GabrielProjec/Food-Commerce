
import Header from "../../components/Header"
import Snacks from "../../components/Snacks"
import SnackTitle from "../../components/SnackTitle"
import { useSnack } from "../../hooks/useSnacks"

function Drinks(){
  const {drinks} = useSnack()


  
      return (
        <>
          <Header title='Bebidas' />
          <SnackTitle>Bebidas</SnackTitle>
          <Snacks snacks={drinks}></Snacks>
        </>
      )
    }

    export default Drinks;