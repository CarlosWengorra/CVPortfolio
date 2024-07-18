import NavBar from "../assets/components/NavBar.jsx";
import Hero from "../assets/components/Hero.jsx";
import ObjetivosUbuntu from "../assets/components/ObjetivosUbuntu.jsx";
import CategoryCards from "../assets/components/CategoryCards.jsx";
import Publications from "../assets/components/Publications.jsx";
import imagenHero from "../assets/img/imagenhero.png";

const Landing = () => {
  return (
    <div>
      <NavBar />
      <Hero
      imagen={imagenHero}
        buscadorEmprendimiento
        style={{
          backgroundImage: `url(${imagenHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          paddingBottom: "20px",
        }}
      />
      <ObjetivosUbuntu />
      <CategoryCards />
      <Publications />
    </div>
  );
};

export default Landing;
