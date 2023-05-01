import { SuperheroEntity } from "@ngneat/falso";

// SuperHeroProps = SuperheroEntity + fullDescription
interface SuperHeroProps extends SuperheroEntity {
  fullDescription: boolean;
}
//React functional component called SuperHero takes in a SuperheroEntity object as its props.
export const SuperHero = ({
  id,
  realName,
  alterEgo,
  company,
  fullDescription,
}: SuperHeroProps) => {
  if (fullDescription === false) {
    return (
      <div>
        <p>
          {alterEgo} ({realName})
        </p>
      </div>
    );
  } else {
    return (
      <>
        <h3>{alterEgo}</h3>
        <p>Real name: {realName}</p>
        <p>Id: {id}</p>
        <p>Company: {company}</p>
      </>
    );
  }
};
