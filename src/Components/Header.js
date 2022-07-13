import { FaClipboardList } from "react-icons/fa"
import style from "./Header.module.css"

function Header() {
  return (
    <header className={style.Header}>
      <FaClipboardList size={36} />
      <h1>To-Do List</h1>
    </header>
  )
}

export default Header
