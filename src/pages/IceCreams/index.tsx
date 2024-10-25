
import Header from "../../components/Header"
import Snacks from "../../components/Snacks"
import SnackTitle from "../../components/SnackTitle"
import { useSnack } from "../../hooks/useSnacks"

function IceCreams(){
  const {iceCreams} = useSnack()


      return (
        <>
          <Header title='Sorvetes' />
          <SnackTitle>Sorvetes</SnackTitle>
          <Snacks snacks={iceCreams}></Snacks>
        </>
      )
    }

export default IceCreams