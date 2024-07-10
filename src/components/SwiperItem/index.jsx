import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SlHeart } from "react-icons/sl";
import { PiPencilSimple } from 'react-icons/pi';
import { IoBagHandleOutline } from "react-icons/io5";

import { AddToCartButton, ClickableArea, FavIcon, FoodCard, FoodCardActions, FoodCardContent, ItemPrice, SelectQuantityContainer } from './styles';
import { formatCurrency } from '../../utils/utils';
import { useCart } from '../../hooks/cart';
import { useAuth } from '../../hooks/auth';
import { api } from '../../hooks/api';

export default function SwiperItem({ slide }) {
  const { isAdmin } = useAuth();
  const { addDishToCart } = useCart();
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const imageFilePath = `${api.defaults.baseURL}/files/${slide.image}`;

  function handleDecreaseQuantity(event) {
    if (selectedQuantity > 1) {
      setSelectedQuantity(prevState => prevState - 1);
    }
    event.stopPropagation();
    event.preventDefault();
  }

  function handleIncreaseQuantity(event) {
    setSelectedQuantity(prevState => prevState + 1);
    event.stopPropagation();
    event.preventDefault();
  }

  function handleAddToCart(event) {
    addDishToCart({ ...slide, quantity: selectedQuantity })
    event.stopPropagation();
    event.preventDefault();
    setSelectedQuantity(1);
  }

  return (
    <FoodCard>
      <FavIcon>
        {isAdmin
          ? (
            <Link to={`/edit-dish/${slide.id}`}>
              <PiPencilSimple />
            </Link>
          )
          : <SlHeart />
        }
      </FavIcon>

      <FoodCardContent>
        <Link to={`/dish/${slide.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <ClickableArea>
            <img
              src={slide.image ? imageFilePath : 'https://via.placeholder.com/150'}
              alt={slide.title}
            />

            <h3>{slide.title}</h3>

            <p>{slide.description}</p>

            <ItemPrice>
              {formatCurrency(slide.price)}
            </ItemPrice>
          </ClickableArea>
        </Link>

        {isAdmin ? null :
          <FoodCardActions>
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

            <AddToCartButton onClick={handleAddToCart}>
              <IoBagHandleOutline />
              {window.innerWidth > 768 ? 'Adicionar' : ''}
            </AddToCartButton>
          </FoodCardActions>
        }
      </FoodCardContent>
    </FoodCard>
  )
}
