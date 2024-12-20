import Header from "../../components/Header"
import { PayOrder } from "../../components/OrderCloseAction/PayOrder"
import { OrderHeader } from "../../components/OrderHeader"
import { Container, Inner, Form } from "./styles"
import {useForm, SubmitHandler} from 'react-hook-form'

type FieldValues = {
    fullName: string
    email: string
    mobile: string
}

export default function Payment() {
    const {register, handleSubmit, formState: {errors}} = useForm<FieldValues>()

    const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data)

    return (
        <Container>
            <Header title="Pagamento" />
            <OrderHeader />
            <Inner>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <h4>Informações Pessoais</h4>

                    <div className="field">
                        <label htmlFor="fullName">Nome e sobrenome</label>
                        <input type="text" id="fullName" autoComplete="name" {...register('fullName', {required: true})}/>
                        {errors.fullName && <p className="error">Campo obrigatório</p>}
                    </div>
                    <div className="grouped">
                        <div className="field">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" id="email"  autoComplete="email"  {...register('email', {required: true})}/>
                        </div>

                        <div className="field">
                            <label htmlFor="mobile">Celular</label>
                            <input type="tel" id="mobile"  autoComplete="phone" {...register('mobile', {required: true})} />
                        </div>

                        <div className="field">
                            <label htmlFor="document">CPF / CNPJ</label>
                            <input type="number" id="document" name="document" autoComplete="document" />
                        </div>
                    </div>

                    <h4>Endereço de entrega</h4>
                    <div className="field">
                        <label htmlFor="zipcode">CEP</label>
                        <input
                            type="text"
                            id="zipcode"
                            name="zipcode"
                            autoComplete="postal-code"
                            style={{ width: '120px' }}
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="street">Endereço</label>
                        <input type="text" id="street" name="street" autoComplete="street-address" />
                    </div>

                    <div className="grouped">
                        <div className="field">
                            <label htmlFor="number">Número</label>
                            <input type="text" id="number" name="number" />
                        </div>

                        <div className="field">
                            <label htmlFor="complement">Complemento</label>
                            <input type="text" id="complement" name="complement" />
                        </div>
                    </div>

                    <div className="grouped">
                        <div className="field">
                            <label htmlFor="neighborhood">Bairro</label>
                            <input type="text" id="neighborhood" name="neighborhood" />
                        </div>

                        <div className="field">
                            <label htmlFor="city">Cidade</label>
                            <input type="text" id="city" name="city" />
                        </div>
                        <div className='field'>
                            <label htmlFor='state'>Estado</label>
                            <select id='state' name='state'>
                                <option value=''>Selecione</option>
                                <option value='AC'>Acre</option>
                                <option value='AL'>Alagoas</option>
                                <option value='AP'>Amapá</option>
                                <option value='AM'>Amazonas</option>
                                <option value='BA'>Bahia</option>
                                <option value='CE'>Ceará</option>
                                <option value='ES'>Espírito Santo</option>
                                <option value='GO'>Goiás</option>
                                <option value='MA'>Maranhão</option>
                                <option value='MT'>Mato Grosso</option>
                                <option value='MS'>Mato Grosso do Sul</option>
                                <option value='MG'>Minas Gerais</option>
                                <option value='PA'>Pará</option>
                                <option value='PB'>Paraíba</option>
                                <option value='PR'>Paraná</option>
                                <option value='PE'>Pernambuco</option>
                                <option value='PI'>Piauí</option>
                                <option value='RJ'>Rio de Janeiro</option>
                                <option value='RN'>Rio Grande do Norte</option>
                                <option value='RS'>Rio Grande do Sul</option>
                                <option value='RO'>Rondônia</option>
                                <option value='RR'>Roraima</option>
                                <option value='SC'>Santa Catarina</option>
                                <option value='SP'>São Paulo</option>
                                <option value='SE'>Sergipe</option>
                                <option value='TO'>Tocantins</option>
                                <option value='DF'>Distrito Federal</option>
                            </select>
                        </div>
                    </div>

                    <h4>Pagamento</h4>
                    <div className="field">
                        <label htmlFor="credit-card-number">Número do Cartão</label>
                        <input
                            type="text"
                            id="credit-card-number"
                            name="credit-card-number"
                            autoComplete="cc-number"
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="credit-card-holder-name">Nome impresso do cartão</label>
                        <input
                            type="text"
                            id="credit-card-holder-name"
                            name="credit-card-holder-name"
                            autoComplete="cc-name"
                        />
                    </div>
                    <div className="grouped">
                        <div className="field">
                            <label htmlFor="credit-card-expiration">Validade (MM/AA)</label>
                            <input
                                type="text"
                                id="credit-card-expiration"
                                name="credit-card-expiration"
                                autoComplete="cc-exp"
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="credit-card-code">Código de segurança (CVV)</label>
                            <input
                                type="text"
                                id="credit-card-code"
                                name="credit-card-code"
                                autoComplete="cc-csc"
                            />
                        </div>
                    </div>
                    <PayOrder />
                </Form>
            </Inner>
        </Container>
    )
}