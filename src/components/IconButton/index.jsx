import { Container } from './styles';

export function IconButton({ children, ...rest }) {
  return (
    <Container {...rest}>
      {children}
    </Container>
  )
}