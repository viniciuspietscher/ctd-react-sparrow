import { Link } from "react-router-dom"
import style from "./Landing.module.css"

function Landing() {
  return (
    <>
      <h1 className={style.Heading}>CTD Sparrow - Todo List</h1>
      <div className={style.LandingParagraph}>
        <Link to={"/new"}>
          Click here to view your todo list and add items!
        </Link>
      </div>
    </>
  )
}

export default Landing
