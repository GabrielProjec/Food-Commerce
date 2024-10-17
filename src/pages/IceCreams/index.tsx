import { useContext} from "react"
import Header from "../../components/Header"
import Snacks from "../../components/Snacks"
import SnackTitle from "../../components/SnackTitle"
import { SnackContext } from "../../context/SnackContext"

function IceCreams(){
  const {iceCreams} = useContext(SnackContext)


      return (
        <>
          <Header title='Sorvetes' />
          <SnackTitle>Sorvetes</SnackTitle>
          <Snacks snacks={iceCreams}></Snacks>
        </>
      )
    }

export default IceCreams