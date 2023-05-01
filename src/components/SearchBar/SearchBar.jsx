import s from "./style.module.css";
import { SearchHeart } from "react-bootstrap-icons";
import { Input } from "components/Input/Input";
export function SearchBar({ onTextChange, placeholder }) {
  return (
    <>
      <SearchHeart size={25} className={s.icon} />
      <Input onTextChange={onTextChange} placeholder={placeholder} />
    </>
  );
}
