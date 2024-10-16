import Header from "../../components/Header"
import Snacks from "../../components/Snacks"
import SnackTitle from "../../components/SnackTitle"



function Burgers(){
    const data = [
        {
          id: 1,
          snack: 'burger',
          name: 'Mega',
          description:
            'O artesanal tamanho família recheado com três carnes suculentas, queijo e bacon.',
          price: 25.5,
          image: 'https://i.imgur.com/upjIUnG.jpg',
        },
        {
          id: 2,
          snack: 'burger',
          name: 'Extra bacon',
          description:
            'Criado para os amantes de bacon, possui em todas as suas camadas bacon bem assado e ainda queijo e carne.',
          price: 23.5,
          image: 'https://i.imgur.com/B4J04AJ.jpg',
        },
        {
          id: 3,
          snack: 'burger',
          name: 'Extra bacon',
          description:
            'Criado para os amantes de bacon, possui em todas as suas camadas bacon bem assado e ainda queijo e carne.',
          price: 23.5,
          image: 'https://i.imgur.com/B4J04AJ.jpg',
        },
      ]

      
    return (
        <div>
            <Header title="Hamburguers" description="Nossos Melhores Hamburgueres" />
            <SnackTitle>Hambúrgueres</SnackTitle>
            <Snacks snacks={data}></Snacks>
        </div>
    )
}

export default Burgers