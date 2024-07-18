import { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "../css/Search.css";
// import img1 from "../img/imgempren1.svg";
// import img2 from "../img/imgempren2.svg";
// import img3 from "../img/imgempren3.svg";


 const microEmprendimiento = {
      nombre: "EcoSenda",
      descripcion: "Finca agroecológica",
      categoria: "Agroecología/Orgánicos/Alimentación saludable",
      // imagenes: [img1, img2, img3],
      region: "Tunuyán",
      provincia: "Mendoza",
      pais: "Argentina",
      info: `Promueven un modelo de agricultura sostenible, protegiendo el,
          medio ambiente, el agua y las semillas autóctonas. Cultivan
          frutas, verduras, plantas medicinales y crean derivados. Editan
          también contenidos educativos, gestionan un banco de semillas y
          comercializan o intercambian excedentes.`,
      info1: `Nació del sueño de restaurar la salud y adoptar un estilo de
          vida ideal. Este proyecto familiar creció fundamentado en la
          permacultura, biodinámica y agroecología, comprometiéndose con
          la soberanía alimentaria, el bienestar, el regreso al campo, la
          venta directa y la dignidad de la vida campesina.`,
    };


const Search = (props) => {
  const [search, setSearch] = useState("");
  
  const handleKeyPress = (e) => {
    // Manejar la tecla Enter
    if (e.key === "Enter") {
      if (search.trim() === microEmprendimiento.nombre) {
        window.location.href = '/ResultOfSearch?search=' + search; 
      } else {
        window.location.href = '/NoEncontrado';
      }
    }
  };

  const handleIconClick = () => {
    // Manejar clic en el ícono de búsqueda
    if (search.trim() === microEmprendimiento.nombre) {
      window.location.href = '/ResultOfSearch?search=' + search;
    } else {
      window.location.href = '/NoEncontrado';
    }
  };

  return (
    <div>
      <input
        type="search"
        placeholder="Buscar Microemprendimientos"
        className="search rounded-5 py-4 my-3"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyPress}
        style={{ backgroundColor: props.bg, width: props.width }}
      />

      <SearchIcon
        id="icon_search"
        fontSize="large"  
        onClick={handleIconClick}
      />
       
    </div>
  );
};

export default Search;
