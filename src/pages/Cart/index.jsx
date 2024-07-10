import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';

import { Container, Content, TextContent, ContentContainer, CartItem, TextCartItem, TitleSection, PaymentCard, SelectPaymentMethod, Divider, ContentPayment, PaymentButton } from './styles';
import { useState } from 'react';
import { formatCurrency } from '../../utils/utils';
import { api } from '../../hooks/api';
import { IconButton } from '../../components/IconButton';
import { FaChevronLeft, FaTrash } from "react-icons/fa6";
import { useCart } from '../../hooks/cart';
import { CreditCardIcon, PixIcon, QrCodeIcon } from '../../assets/icons';

export function Cart() {
  const { cart, removeDishFromCart } = useCart();
  const navigate = useNavigate();

  const [paymentMethodSelected, setPaymentMethodSelected] = useState('pix');

  function handleBack() {
    navigate(-1);
  }

  return (
    <Container>
      <Header />

      {cart &&
        <main>
          <ContentContainer>
            <IconButton onClick={handleBack}>
              <FaChevronLeft size={25} />
              voltar
            </IconButton>

            <Content>
              <div>
                <TitleSection>Meu Pedido</TitleSection>

                {cart.map((dish) => (
                  <CartItem key={dish.id}>
                    <img src={`${api.defaults.baseURL}/files/${dish.image}`} alt={dish.name} />

                    <div>
                      <TextCartItem>
                        <h3>{dish.quantity} x {dish.title}</h3>
                        <span>-</span>
                        <span>{formatCurrency(dish.price * dish.quantity)}</span>
                      </TextCartItem>

                      <button onClick={() => removeDishFromCart(dish)}>
                        <FaTrash />
                        Excluir
                      </button>
                    </div>
                  </CartItem>
                ))}

                {cart.length > 0 &&
                  <TextContent>
                    <h3>Total: {formatCurrency(cart.reduce((acc, item) => acc + (item.price * item.quantity), 0))}</h3>
                    <Button text='Finalizar Pedido' />
                  </TextContent>
                }

                {cart.length === 0 &&
                  <TextContent>
                    <h3>🙁 Seu carrinho está vazio.</h3>
                  </TextContent>
                }
              </div>

              <div>
                <TitleSection>Pagamento</TitleSection>

                <PaymentCard>
                  <SelectPaymentMethod>
                    <PaymentButton
                      onClick={() => setPaymentMethodSelected('pix')}
                      isSelected={paymentMethodSelected === 'pix'}
                    >
                      <PixIcon />
                      <span>PIX</span>
                    </PaymentButton>

                    <Divider />

                    <PaymentButton
                      onClick={() => setPaymentMethodSelected('credit')}
                      isSelected={paymentMethodSelected === 'credit'}
                    >
                      <CreditCardIcon />
                      <span>Crédito</span>
                    </PaymentButton>
                  </SelectPaymentMethod>

                  <ContentPayment>
                    <QrCodeIcon />
                  </ContentPayment>
                </PaymentCard>
              </div>
            </Content>
          </ContentContainer>
        </main>
      }
    </Container>
  )
}
