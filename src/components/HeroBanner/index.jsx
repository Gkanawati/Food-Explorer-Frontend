import { Container } from './styles';
import HeroImg from '../../assets/hero-img.png';

export function HeroBanner() {
  return (
    <Container>
      <div className='img-container'>
        <img
          src={HeroImg}
          alt="Hero Banner"
          onDragStart={e => e.preventDefault()}
        />
      </div>

      <div>
        <h1>Sabores inigualáveis</h1>

        <h3>Sinta o cuidado do preparo com ingredientes selecionados</h3>
      </div>
    </Container>
  );
}