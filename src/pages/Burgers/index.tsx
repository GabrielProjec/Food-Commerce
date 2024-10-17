import { useState, useEffect } from "react"

import Header from "../../components/Header"
import Snacks from "../../components/Snacks"
import SnackTitle from "../../components/SnackTitle"
import { getBurgers } from "../../services/api"
import { SnackData } from "../../interfaces/SnackData"


function Burgers(){
  const [burgers, setBurgers] = useState
  <SnackData[]>([])

  useEffect(() => {
    (async () => {
      const burgerRequest = await getBurgers()

    setBurgers(burgerRequest.data)
    })()
  },[])



    

      
    return (
        <div>
            <Header title="Hamburguers" description="Nossos Melhores Hamburgueres" />
            <SnackTitle>Hambúrgueres</SnackTitle>
            <Snacks snacks={burgers}></Snacks>
        </div>
    )
}

export default Burgers