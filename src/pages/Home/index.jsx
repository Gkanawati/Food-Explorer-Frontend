import { useCallback, useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { SideMenu } from '../../components/SideMenu';
import { Content, EmptyContainer, FilterText, MainContainer } from './styles';
import { HeroBanner } from '../../components/HeroBanner';
import { CategorySlider } from '../../components/Slider';
import Footer from '../../components/Footer';
import { api } from '../../hooks/api';
import { debounce } from '../../utils/utils';
import { EmptyIcon } from '../../assets/icons';

export function Home() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getDishes = async (dishName) => {
    try {
      setIsLoading(true);
      const filterByDishName = {
        dishName
      };

      const response = await api.get('/dishes', { params: filterByDishName });
      const dishes = response.data;

      // Agrupar pratos por categoria
      const categorizedDishes = dishes.reduce((acc, dish) => {
        const category = dish.category;
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(dish);
        return acc;
      }, {});

      // Transformar o objeto em um array para facilitar a iteração
      const formattedCategories = Object.keys(categorizedDishes).map((category, index) => ({
        id: index + 1,
        categoryTitle: category,
        data: categorizedDishes[category]
      }));

      setCategories(formattedCategories);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  const debouncedGetDishes = useCallback(debounce(getDishes, 500), []);

  useEffect(() => {
    debouncedGetDishes(searchInput);
  }, [searchInput]);

  return (
    <>
      <SideMenu menuIsOpen={menuIsOpen} handleCloseMenu={() => setMenuIsOpen(false)} />

      <Header
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleOpenMenu={() => setMenuIsOpen(true)}
      />

      <MainContainer>
        <Content>
          {searchInput
            ? <div>
              <FilterText>Resultados para "{searchInput}"</FilterText>
            </div>
            : <div className='hero-section'>
              <HeroBanner />
            </div>
          }

          {categories.map(category => <CategorySlider key={category.id} content={category} />)}

          {!isLoading && (categories.length === 0) &&
            <EmptyContainer>
              <EmptyIcon />

              <span>Nenhum prato encontrado</span>
            </EmptyContainer>
          }

          {isLoading &&
            <EmptyContainer>
              <span>Buscando seus pratos favoritos...</span>
            </EmptyContainer>
          }
        </Content>
      </MainContainer>

      <Footer />
    </>
  );
}