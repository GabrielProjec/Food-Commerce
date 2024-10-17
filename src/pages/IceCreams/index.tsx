import { useEffect, useState } from "react"
import Header from "../../components/Header"
import Snacks from "../../components/Snacks"
import SnackTitle from "../../components/SnackTitle"
import { getIceCreams } from "../../services/api"
import { SnackData } from "../../interfaces/SnackData"

function IceCreams(){

  const [iceCreams, setIceCreams] = useState<SnackData[]>([])

  useEffect(() => {
    (async () => {
      const iceCreamsRequest = await getIceCreams()

      setIceCreams(iceCreamsRequest.data)
    })()
  },[])

      return (
        <>
          <Header title='Sorvetes' />
          <SnackTitle>Sorvetes</SnackTitle>
          <Snacks snacks={iceCreams}></Snacks>
        </>
      )
    }

export default IceCreams