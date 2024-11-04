import { Container } from "./styles";
import Header from "../../components/Header";
import { OrderHeader } from "../../components/OrderHeader";
import { Table } from "./Table";

export default function MyCart(){
    return (
        <Container>
            <Header title="Carrinho" />
            <OrderHeader />
            <Table />
        </Container>
    )
}