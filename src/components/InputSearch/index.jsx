import { IoIosSearch } from 'react-icons/io';
import { HeaderInput } from './styles';

export function InputSearch({ children, ...rest }) {
  return (
    <HeaderInput>
      <IoIosSearch size={20} />
      <input
        type="text"
        placeholder="Busque por pratos ou ingredientes"
        {...rest}
      />
    </HeaderInput>
  )
}