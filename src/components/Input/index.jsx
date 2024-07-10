import { Container, InputContainer } from './styles';

export function Input({ icon: Icon, labelText, id, ...rest }) {
  return (
    <Container>
      <label htmlFor={id}>{labelText}</label>
      <InputContainer className='inputContainer'>
        {Icon && <Icon size={20} />}
        <input {...rest} id={id} name={id} />
      </InputContainer>
    </Container>
  )
}