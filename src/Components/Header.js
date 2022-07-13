import { Link } from "react-router-dom"
import { FaClipboardList } from "react-icons/fa"
import style from "./Header.module.css"

function Header() {
  return (
    <header className={style.Header}>
      <ul className={style.HeaderUL}>
        <li>
          <FaClipboardList className={style.Logo} size={36} />
          <Link to={"/"}>CTD Sparrow Todo List</Link>
        </li>
        <li>
          <Link to={"/new"}>New Item</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
