import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import myImage from "../../assets/Marvel.jpeg";
import myImage2 from "../../assets/Avengers-Endgame-Banner-2-de7cf60.jpg";
import myImage3 from "../../assets/dc-movies-in-order-05-justice-league-1608143609.jpg";

export const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="home-container">
        <h3>Welcome to our superhero database!</h3>
        <p>Sharing a few of our favourite superheros...</p>
      </div>
      <div className="img-container">
        <img id="myImage" src={myImage} alt="Superheros-Marvel" />
        <img id="myImage" src={myImage2} alt="Superheros-Marvel" />
        <img id="myImage" src={myImage3} alt="Superheros-DC" />
      </div>
      <Footer></Footer>
    </>
  );
};
