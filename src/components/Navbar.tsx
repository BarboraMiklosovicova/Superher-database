import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <br />
          <li>
            <Link to="/about">About us</Link>
          </li>
          <br />
          <li>
            <Link to="/superheroes">Superheroes</Link>
          </li>
          <li>
            <input type="text" placeholder="Search" />
          </li>
        </ul>
      </nav>
    </>
  );
};
