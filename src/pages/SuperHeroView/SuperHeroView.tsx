import { Link, useLoaderData, useParams } from "react-router-dom";
import { Loader } from "../SuperheroList/SuperheroList";
import { SuperHero } from "../../components/SuperHero";

//The component uses the useParams hook to access the URL parameters passed to this view. It also uses the useLoaderData hook to retrieve the superHeroes data loaded by the server.
export const SuperHeroView = () => {
  const params = useParams();
  const { superHeroes } = useLoaderData() as Loader;

  //The current constant is set to the superhero object whose id matches the id parameter from the URL.
  const current = superHeroes.find((superhero) => superhero.id === params.id);
  if (current === undefined) {
    return (
      <>
        <div className="">
          <h2>Ooops something went wrong.</h2>
          <p>There is no superhero with this id!</p>
          <p>Please try again.</p>
        </div>
      </>
    );
  } else
    return (
      <div>
        <SuperHero {...current} fullDescription={true}></SuperHero>
        <div className="buttons">
          <Link to="/superheroes">
            <button className="btn">Go back</button>
          </Link>
        </div>
      </div>
    );

  // here we send props fullDescription {true} so the description is going to be visible when we click on it
};
