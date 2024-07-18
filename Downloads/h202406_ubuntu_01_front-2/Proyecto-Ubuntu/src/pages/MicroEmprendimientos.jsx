import NavBar from "../assets/components/NavBar.jsx";
import Hero from "../assets/components/Hero.jsx";
import CategoryCard from "../assets/components/CategoryCard.jsx";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import "../assets/css/HeroMicro.css";
import imagen from "../assets/img/imagenHeroEmprende.png";

const categoriasStandard = [
  {
    ima: "src/assets/img/EconomiaSocial.png",
    texto: "Economía social/Desarrollo local/ Inclusión financiera",
  },
  {
    ima: "src/assets/img/Agroecologia.png",
    texto: "Agroecología/Orgánicos/ Alimentación saludable",
  },
  {
    ima: "src/assets/img/Conservacion.png",
    texto: "Conservación/Regeneración/ Servicios ecosistémicos",
  },

  {
    ima: "src/assets/img/empresas.png",
    texto: "Empresas/ Organismos de impacto/Economía circular",
  },
];
const MicroEmprendimmiento = () => {
  function renderizarCategoriasStandard() {
    return categoriasStandard.map((categoria, index) => (
      <CategoryCard key={index} ima={categoria.ima} texto={categoria.texto} />
    ));
  }
  return (
    <>
      <NavBar />

      <Hero
      imagen={imagen} 
        buscadorEmprendimiento
        titulo={"MICROEMPRENDIMIENTOS"}
        subtitulo={"Invertí sostenible"}
        descripcion={
          "Explorá las categorías y encontrá la inversión sostenible que mejor se ajuste a tus metas financieras"
        }
        />
        

      <div className="silueta d-flex flex-column">
        <Typography
          fontSize={"24px"}
          color={"negro.main"}
          typography={"semibold"}
          textAlign={"center"}
          marginBottom={"10px"}
        >
          Categorias
        </Typography>
        <Stack
          direction={{ xs: "column" }}
          spacing={{ xs: 3, sm: 2, md: 4 }}
          padding={{ xs: 3, sm: 3, md: 0 }}
        >
          {renderizarCategoriasStandard()}
        </Stack>
      </div>
    </>
  );
};

export default MicroEmprendimmiento;
