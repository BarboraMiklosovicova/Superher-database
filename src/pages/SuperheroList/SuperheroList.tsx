import { SuperheroEntity, randSuperhero } from "@ngneat/falso";
import { Navbar } from "../../components/Navbar";
import { Link } from "react-router-dom";
import { SuperHero } from "../../components/SuperHero";
import "./SuperheroList.scss";

const allSuperheroes: SuperheroEntity[] = [];

for (let index = 0; index < 10; index++) {
  allSuperheroes.push(randSuperhero());
}

// Interface Loader is a object with property superHeroes that is an Array of SuperheroEntity which comes from falso
export interface Loader {
  superHeroes: SuperheroEntity[];
}

//function superheroLoader returns an object containing an array of these superhero entities.
// eslint-disable-next-line react-refresh/only-export-components
export const superheroLoader = () => {
  //a object that contains superHeroes empty array
  const data: Loader = { superHeroes: [] };
  data.superHeroes = allSuperheroes;

  return data;
};

export const SuperheroList = () => {
  return (
    <>
      <Navbar></Navbar>
      <h2>These are the 10 most popular superhero at this moment!</h2>
      <p>Click on the superhero to learn more about their character.</p>

      {allSuperheroes.map((superhero, index) => (
        <Link key={index} to={superhero.id}>
          <SuperHero {...superhero} fullDescription={false}></SuperHero>
        </Link>
      ))}
    </>
  );
};
