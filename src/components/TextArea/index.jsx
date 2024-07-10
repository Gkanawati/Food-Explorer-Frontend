import { Container, TextAreaInput } from './styles';

export function TextArea({ ...rest }) {
  return (
    <Container>
      <label htmlFor="description">Descrição</label>
      <TextAreaInput {...rest} id="description" />
    </Container>
  )
}