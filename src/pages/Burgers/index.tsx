import { useContext } from "react"

import Header from "../../components/Header"
import Snacks from "../../components/Snacks"
import SnackTitle from "../../components/SnackTitle"
import { SnackContext } from "../../App"



function Burgers(){
   const {burgers} = useContext(SnackContext)

    return (
        <div>
            <Header title="Hamburguers" description="Nossos Melhores Hamburgueres" />
            <SnackTitle>Hambúrgueres</SnackTitle>
            <Snacks snacks={burgers}></Snacks>
        </div>
    )
}

export default Burgers