import { useSnack } from "../../hooks/useSnacks"

import Header from "../../components/Header"
import Snacks from "../../components/Snacks"
import SnackTitle from "../../components/SnackTitle"





function Burgers(){
   const {burgers} = useSnack()
    return (
        <div>
            <Header title="Hamburguers" description="Nossos Melhores Hamburgueres" />
            <SnackTitle>Hambúrgueres</SnackTitle>
            <Snacks snacks={burgers}></Snacks>
        </div>
    )
}

export default Burgers