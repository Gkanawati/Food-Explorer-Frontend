import { Container } from './styles'
import HeaderLogo from '../../assets/HeaderLogo.png'

export default function Footer() {
  return (
    <Container>
      <img src={HeaderLogo} alt="Logo Food Explorer" />

      &copy; 2024 - Todos os direitos reservados.
    </Container>
  )
}
