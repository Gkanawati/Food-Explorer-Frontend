import { Button } from '../Button';
import { Container, CounterReceipt, Menu } from './styles';
import { PiReceipt } from "react-icons/pi";
import HeaderLogo from '../../assets/HeaderLogo.png';
import LogoAdmin from '../../assets/LogoAdmin.png';
import { GoSignOut } from "react-icons/go";
import { PiList } from "react-icons/pi";
import { IconButton } from '../IconButton';
import { InputSearch } from '../InputSearch';
import { useAuth } from '../../hooks/auth';
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/cart';
import { IoIosAddCircleOutline } from 'react-icons/io';

export function Header({ handleOpenMenu, searchInput, setSearchInput }) {
  const { signOut, isAdmin } = useAuth();
  const { cart } = useCart();

  return (
    <Container>
      <Menu onClick={handleOpenMenu}>
        <PiList size={20} />
      </Menu>

      <Link to='/'>
        <img
          src={isAdmin ? LogoAdmin : HeaderLogo}
          alt="Logo Food Explorer"
          onDragStart={e => e.preventDefault()}
        />
      </Link>

      <div className='input-header'>
        <InputSearch
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>

      {isAdmin ? (
        <div className='receipt-desktop'>
          <Link to='/new-dish'>
            <Button text="Novo Prato" icon={IoIosAddCircleOutline} />
          </Link>
        </div>
      ) : (
        <div className='receipt-desktop'>
          <Link to='/cart'>
            <Button text={`Pedido (${cart.length})`} icon={PiReceipt} />
          </Link>
        </div>
      )}

      <div className='receipt-desktop'>
        <IconButton onClick={() => signOut()}>
          <GoSignOut />
        </IconButton>
      </div>

      <div className='receipt-mobile'>
        <Link to='/cart'>
          <IconButton onClick={() => console.log('pedido')}>
            <CounterReceipt>
              0
            </CounterReceipt>
            <PiReceipt size={25} />
          </IconButton>
        </Link>
      </div>
    </Container>
  )
}
