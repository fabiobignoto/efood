import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

import { usePurchaseMutation } from '../../services/api'

import { priceFormat } from '../../utils/functions/priceFormat'
import totalPrice from '../../utils/functions/totalCart'

import * as CartSlice from '../../store/reducers/cartSlice'
import { RootReducer } from '../../store'

import Cart from '../Cart'
import ButtonCart from '../ButtonCart'

import { SideBar } from '../../styles'

import * as S from './styles'

type ProductOrder = {
  id: number
  price: number
}

const Checkout = () => {
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()

  const dispatcher = useDispatch()

  const { isCartOpen, isInCheckoutForms, items } = useSelector(
    (state: RootReducer) => state.cart
  )

  const [isInPaymentInformation, setIsInPaymentInformation] = useState(false)

  useEffect(() => {
    if (isSuccess === true) {
      dispatcher(CartSlice.cartEmpty())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess])

  const leaveDelivery = () => {
    dispatcher(CartSlice.checkoutClose())
  }

  const concludeOrder = () => {
    dispatcher(CartSlice.cartClose())
    dispatcher(CartSlice.checkoutClose())
    dispatcher(CartSlice.cartEmpty())
  }

  const formDelivery = useFormik({
    initialValues: {
      receiver: '',
      address: '',
      city: '',
      zipCode: '',
      number: '',
      complement: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(5, 'Precisa ter, pelo menos, 5 caracters.')
        .required(''),
      address: Yup.string()
        .min(5, 'Precisa ter, pelo menos, 5 caracters.')
        .required(''),
      city: Yup.string()
        .min(4, 'Precisa ter, pelo menos, 4 caracteres.')
        .required(''),
      zipCode: Yup.string()
        .min(9, 'Precisa ter 8 algarismos')
        .max(9, 'Precisa ter 8 algarismos')
        .required(''),
      number: Yup.string().required('')
    }),
    onSubmit: () => {
      setIsInPaymentInformation(true)
    }
  })

  const formPayment = useFormik({
    initialValues: {
      cardName: '',
      cardNumber: '',
      code: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      cardName: Yup.string()
        .min(5, 'Precisa ter, pelo menos, 5 caracters.')
        .required(''),
      cardNumber: Yup.string()
        .min(19, 'Precisa ter 16 caracters.')
        .max(19, 'Precisa ter 16 caracters.')
        .required(''),
      code: Yup.string().min(3, 'Precisa ter 3 dígitos.').required(''),
      expiresMonth: Yup.string()
        .min(2, 'Precisa ter 2 algarismos')
        .max(2, 'Precisa ter 2 algarismos')
        .test('ValidMonth', 'Insira um mês válido.', (value) => {
          if (Number(value) >= 1 && Number(value) <= 12) {
            return true
          } else {
            return false
          }
        })
        .required(''),
      expiresYear: Yup.string()
        .min(4, 'Precisa ter 4 algarismos.')
        .max(4, 'Precisa ter 4 algarismos.')
        .required('')
        .test('ValidYear', 'Ano de vencimento inválido.', (value) => {
          const actualYear = new Date(new Date().getTime()).getFullYear()
          if (Number(value) >= actualYear) {
            return true
          } else {
            return false
          }
        })
    }),
    onSubmit: () => purchaseOrder()
  })

  const purchaseOrder = () => {
    const products: ProductOrder[] = []
    items.map((item: CartSlice.CardProduct) => {
      const product: ProductOrder = {
        id: item.id,
        price: item.product.preco
      }
      products.push(product)
    })
    purchase({
      delivery: {
        receiver: formDelivery.values.receiver,
        address: {
          description: formDelivery.values.address,
          city: formDelivery.values.city,
          number: Number(formDelivery.values.number),
          zipCode: formDelivery.values.zipCode,
          complement: formDelivery.values.complement
        }
      },
      payment: {
        card: {
          name: formPayment.values.cardName,
          number: formPayment.values.cardNumber,
          code: Number(formPayment.values.code),
          expires: {
            month: Number(formPayment.values.expiresMonth),
            year: Number(formPayment.values.expiresYear)
          }
        }
      },
      products: products
    })
  }

  const deliveryForm = () => {
    return (
      <>
        <S.CheckoutForm onSubmit={formDelivery.handleSubmit}>
          <h3>Entrega</h3>
          <S.InputGroup>
            <label htmlFor="receiver">Quem irá receber</label>
            <input
              id="receiver"
              type="text"
              name="receiver"
              value={formDelivery.values.receiver}
              onChange={formDelivery.handleChange}
              onBlur={formDelivery.handleBlur}
              className={
                'receiver' in formDelivery.touched &&
                'receiver' in formDelivery.errors
                  ? 'hasError'
                  : ''
              }
            />
            <small>
              {formDelivery.touched.receiver && formDelivery.errors.receiver}
            </small>
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="address">Endereço</label>
            <input
              id="address"
              type="text"
              name="address"
              value={formDelivery.values.address}
              onChange={formDelivery.handleChange}
              onBlur={formDelivery.handleBlur}
              className={
                'address' in formDelivery.touched &&
                'address' in formDelivery.errors
                  ? 'hasError'
                  : ''
              }
            />
            <small>
              {formDelivery.touched.address && formDelivery.errors.address}
            </small>
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="city">Cidade</label>
            <input
              id="city"
              type="text"
              name="city"
              value={formDelivery.values.city}
              onChange={formDelivery.handleChange}
              onBlur={formDelivery.handleBlur}
              className={
                'city' in formDelivery.touched && 'city' in formDelivery.errors
                  ? 'hasError'
                  : ''
              }
            />
            <small>
              {formDelivery.touched.city && formDelivery.errors.city}
            </small>
          </S.InputGroup>
          <S.RowGroup $gap="34px">
            <S.InputGroup $inputWidth="155px">
              <label htmlFor="zipCode">CEP</label>
              <InputMask
                mask="99999-999"
                maskChar=""
                id="zipCode"
                type="text"
                name="zipCode"
                value={formDelivery.values.zipCode}
                onChange={formDelivery.handleChange}
                onBlur={formDelivery.handleBlur}
                className={
                  'zipCode' in formDelivery.touched &&
                  'zipCode' in formDelivery.errors
                    ? 'hasError'
                    : ''
                }
              />
              <small>
                {formDelivery.touched.zipCode && formDelivery.errors.zipCode}
              </small>
            </S.InputGroup>
            <S.InputGroup $inputWidth="155px">
              <label htmlFor="number">Número</label>
              <input
                id="number"
                type="text"
                name="number"
                value={formDelivery.values.number}
                onChange={formDelivery.handleChange}
                onBlur={formDelivery.handleBlur}
                className={
                  'number' in formDelivery.touched &&
                  'number' in formDelivery.errors
                    ? 'hasError'
                    : ''
                }
              />
              <small>
                {formDelivery.touched.number && formDelivery.errors.number}
              </small>
            </S.InputGroup>
          </S.RowGroup>

          <S.InputGroup>
            <label htmlFor="complement">Complemento</label>
            <input
              id="complement"
              type="text"
              name="complement"
              value={formDelivery.values.complement}
              onChange={formDelivery.handleChange}
              onBlur={formDelivery.handleBlur}
            />
          </S.InputGroup>
          <S.ButtonsDiv>
            <ButtonCart action="Continuar com o pagamento" type="submit" />
            <ButtonCart
              action="Voltar para o carrinho"
              type="button"
              clickAction={leaveDelivery}
            />
          </S.ButtonsDiv>
        </S.CheckoutForm>
      </>
    )
  }

  const paymentForm = () => {
    return (
      <>
        <S.CheckoutForm onSubmit={formPayment.handleSubmit}>
          <h3>Pagamento - Valor a pagar {priceFormat(totalPrice(items))}</h3>

          <S.InputGroup>
            <label htmlFor="cardName">Nome no cartão</label>
            <input
              id="cardName"
              type="text"
              name="cardName"
              value={formPayment.values.cardName}
              onChange={formPayment.handleChange}
              onBlur={formPayment.handleBlur}
              className={
                'cardName' in formPayment.touched &&
                'cardName' in formPayment.errors
                  ? 'hasError'
                  : ''
              }
            />
            <small>
              {formPayment.touched.cardName && formPayment.errors.cardName}
            </small>
          </S.InputGroup>
          <S.RowGroup $gap="30px">
            <S.InputGroup $inputWidth="228px">
              <label htmlFor="cardNumber">Número do cartão</label>
              <InputMask
                mask="9999 9999 9999 9999"
                maskChar=""
                id="cardNumber"
                type="text"
                name="cardNumber"
                value={formPayment.values.cardNumber}
                onChange={formPayment.handleChange}
                onBlur={formPayment.handleBlur}
                className={
                  'cardNumber' in formPayment.touched &&
                  'cardNumber' in formPayment.errors
                    ? 'hasError'
                    : ''
                }
              />
              <small>
                {formPayment.touched.cardNumber &&
                  formPayment.errors.cardNumber}
              </small>
            </S.InputGroup>
            <S.InputGroup $inputWidth="87px">
              <label htmlFor="code">CVV</label>
              <InputMask
                mask="999"
                maskChar=""
                id="code"
                type="text"
                name="code"
                value={formPayment.values.code}
                onChange={formPayment.handleChange}
                onBlur={formPayment.handleBlur}
                className={
                  'code' in formPayment.touched && 'code' in formPayment.errors
                    ? 'hasError'
                    : ''
                }
              />
              <small>
                {formPayment.touched.code && formPayment.errors.code}
              </small>
            </S.InputGroup>
          </S.RowGroup>
          <S.RowGroup $gap="34px">
            <S.InputGroup $inputWidth="155px">
              <label htmlFor="expiresMonth">Mês de vencimento</label>
              <InputMask
                mask="99"
                maskChar=""
                id="expiresMonth"
                type="text"
                name="expiresMonth"
                value={formPayment.values.expiresMonth}
                onChange={formPayment.handleChange}
                onBlur={formPayment.handleBlur}
                className={
                  'expiresMonth' in formPayment.touched &&
                  'expiresMonth' in formPayment.errors
                    ? 'hasError'
                    : ''
                }
              />
              <small>
                {formPayment.touched.expiresMonth &&
                  formPayment.errors.expiresMonth}
              </small>
            </S.InputGroup>
            <S.InputGroup $inputWidth="155px">
              <label htmlFor="expiresYear">Ano de vencimento</label>
              <InputMask
                mask="9999"
                maskChar=""
                id="expiresYear"
                type="text"
                name="expiresYear"
                value={formPayment.values.expiresYear}
                onChange={formPayment.handleChange}
                onBlur={formPayment.handleBlur}
                className={
                  'expiresYear' in formPayment.touched &&
                  'expiresYear' in formPayment.errors
                    ? 'hasError'
                    : ''
                }
              />
              <small>
                {formPayment.touched.expiresYear &&
                  formPayment.errors.expiresYear}
              </small>
            </S.InputGroup>
          </S.RowGroup>
          <S.ButtonsDiv>
            <ButtonCart
              disabled={isLoading}
              action={
                isLoading ? 'Finalizando pedido...' : 'Finalizar pagamento'
              }
              type="submit"
            />
            <ButtonCart
              action="Voltar para edição de endereço"
              type="button"
              clickAction={() => setIsInPaymentInformation(false)}
            />
          </S.ButtonsDiv>
        </S.CheckoutForm>
      </>
    )
  }

  const finishedOrder = () => {
    return (
      <>
        <S.TitleOrder>Pedido realizado - {data?.orderId}</S.TitleOrder>
        <S.DivParagraph>
          <S.Paragraph>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </S.Paragraph>
          <S.Paragraph>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </S.Paragraph>
          <S.Paragraph>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </S.Paragraph>
          <S.Paragraph>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </S.Paragraph>
        </S.DivParagraph>

        <ButtonCart
          type="button"
          action="Concluir"
          clickAction={concludeOrder}
        />
      </>
    )
  }

  return (
    <SideBar>
      {isCartOpen && !isInCheckoutForms && <Cart />}
      {isCartOpen &&
        isInCheckoutForms &&
        !isInPaymentInformation &&
        deliveryForm()}
      {isCartOpen &&
        isInCheckoutForms &&
        isInPaymentInformation &&
        !isSuccess &&
        paymentForm()}
      {isSuccess && finishedOrder()}
    </SideBar>
  )
}
export default Checkout
