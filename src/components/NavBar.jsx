import{ NavLink } from "react-router-dom"
export const NavBar = () => {
  return (
  <nav>
    <ul>
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
    </ul>
  </nav>
  )
}
