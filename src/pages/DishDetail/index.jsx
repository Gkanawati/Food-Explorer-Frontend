import { Link, useNavigate, useParams } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';

import { Container, Content, ChipItem, IngredientesContainer, TextContent, ContentContainer, ActionsContent, SelectQuantityContainer } from './styles';
import { useEffect, useState } from 'react';
import { formatCurrency } from '../../utils/utils';
import { api } from '../../hooks/api';
import { IconButton } from '../../components/IconButton';
import { FaChevronLeft } from "react-icons/fa6";
import { useCart } from '../../hooks/cart';
import { useAuth } from '../../hooks/auth';

export function DishDetails() {
  const params = useParams();
  const { isAdmin } = useAuth();
  const { addDishToCart } = useCart();

  const prefixImageFilePath = `${api.defaults.baseURL}/files/`;

  const [data, setData] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente excluir este prato?");

    if (confirm) {
      await api.delete(`/dishes/${params.id}`);
      handleBack();
    }
  }

  async function fetchDish() {
    const response = await api.get(`/dishes/${params.id}`);
    setData(response.data);
  }

  function handleDecreaseQuantity() {
    if (selectedQuantity > 1) {
      setSelectedQuantity(prevState => prevState - 1);
    }
  }

  function handleIncreaseQuantity() {
    setSelectedQuantity(prevState => prevState + 1);
  }

  function handleAddToCart() {
    addDishToCart({ ...data, quantity: selectedQuantity })
    setSelectedQuantity(1);
  }

  useEffect(() => {
    fetchDish();
  }, [])

  return (
    <Container>
      <Header />

      {data &&
        <main>
          <ContentContainer>
            <IconButton onClick={handleBack}>
              <FaChevronLeft size={25} />
              voltar
            </IconButton>

            <Content>
              <img
                src={data.image ?
                  `${prefixImageFilePath}${data.image}`
                  : 'https://via.placeholder.com/150'
                }
                alt={data.title}
              />

              <TextContent>
                <h1>{data.title}</h1>

                <p>{data.description}</p>

                <IngredientesContainer>
                  {data.ingredients.map((ingredient) =>
                    <ChipItem key={ingredient.id}>{ingredient.name}</ChipItem>
                  )}
                </IngredientesContainer>

                <ActionsContent>
                  {!isAdmin ?
                    <>
                      <SelectQuantityContainer>
                        <button onClick={handleDecreaseQuantity}>
                          <span>-</span>
                        </button>

                        <span>
                          {selectedQuantity}
                        </span>

                        <button onClick={handleIncreaseQuantity}>
                          <span>+</span>
                        </button>
                      </SelectQuantityContainer>

                      <Button
                        text={`Incluir ∙ ${formatCurrency(data.price * selectedQuantity)}`}
                        onClick={handleAddToCart}
                      />
                    </>
                    :
                    <>
                      <Link to={`/edit-dish/${data.id}`} style={{ flex: 1, textDecoration: 'none', minWidth: 115 }}>
                        <Button text="Editar Prato" onClick={() => { }} />
                      </Link>

                      <Button text="Excluir Prato" onClick={handleRemove} />
                    </>
                  }
                </ActionsContent>
              </TextContent>
            </Content>
          </ContentContainer>
        </main>
      }
    </Container>
  )
}