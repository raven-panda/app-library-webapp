import { Search } from 'react-feather';
import Button from './Button';

export default function SearchBar({ placeholder, name }: { placeholder: string; name: string; }) {
  return <label className="ebr_input" aria-label={placeholder} htmlFor={name}>
    <Button>
      <Search size={18}/>
    </Button>
    <input placeholder={placeholder} type="text" name={name} id={name} />
  </label>;
}
