import { Container } from './styles'

export function Section({ title, children }) {
  return (
    <Container>
      {title && <h2>{title}</h2>}
      {children}
    </Container>
  )
}