import { Link } from "react-router-dom"
import { FaClipboardList } from "react-icons/fa"
import style from "./Header.module.css"

function Header() {
  return (
    <header className={style.Header}>
      <ul>
        <li>
          <FaClipboardList size={36} />
          <Link to={"/"}>My todo list app</Link>
        </li>
        <li>
          <Link to={"/new"}>New Item</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
