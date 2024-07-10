import { Container } from './styles'

export function Button({ text, styleType = "primary", icon: Icon, loading = false, ...rest }) {
  return (
    <Container
      type="button"
      disabled={loading}
      styleType={styleType}
      {...rest}
    >
      {Icon && <Icon size={20} />}
      {loading ? 'Carregando...' : text}
    </Container >
  )
}