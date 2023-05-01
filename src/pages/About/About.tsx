import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import "./About.scss";

export const About = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="about-container">
        <article>
          Welcome to our superhero database! Here, you can explore the
          fascinating world of superheroes and villains and learn all about
          their incredible powers, personalities, and backstories. We've
          compiled a list of the most popular characters in the superhero
          universe, complete with detailed information about their origins,
          abilities, and major story arcs.
          <br />
          <br />
          Whether you're a die-hard fan or a curious newcomer, our database has
          something for everyone. Want to know more about the brooding
          billionaire Bruce Wayne, aka Batman? Or perhaps you're more interested
          in the super-powered alien from Krypton, Superman? Whatever your
          preference, we've got you covered.
          <br />
          <br />
          <br />
          <br />
          So what are you waiting for? Explore our superhero database today and
          discover the most popular characters in the world of superheroes!
        </article>
      </div>
      <Footer></Footer>
    </>
  );
};
