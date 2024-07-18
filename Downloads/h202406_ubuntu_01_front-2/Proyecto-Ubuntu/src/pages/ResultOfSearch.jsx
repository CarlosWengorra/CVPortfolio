import NavBar from "../assets/components/NavBar.jsx";
import Search from "../assets/components/Search.jsx";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import theme from "../config/theme";
import "../assets/css/Search.css";
import imgNoEncontrada from "../assets/img/noEncontrado.svg";
import { useEffect, useState } from "react";
import CardMicroemprendimientos from "../assets/components/CardMicroemprendimientos.jsx";

import img1 from "../assets/img/imgempren1.svg";
import img2 from "../assets/img/imgempren2.svg";
import img3 from "../assets/img/imgempren3.svg";

const microEmprendimiento = {
  nombre: "EcoSenda",
  descripcion: "Finca agroecológica",
  categoria: "Agroecología/Orgánicos/Alimentación saludable",
  imagenes: [img1, img2, img3],
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

const ResultOfSearch = () => {
  const palabra = window.location.search;
  const search = new URLSearchParams(palabra).get("search");
  console.log(search);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (search.trim() === microEmprendimiento.nombre) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [search]);
  return (
    <>
      <NavBar />
      <Stack
        direction={{ xs: "column" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        padding={{ xs: 3, sm: 3, md: 0 }}
      >
        <Search bg="#EAEAEA" width="100%" />

        <Typography fontSize={24} textAlign={"center"} typography={"bold"}>
          Resultados de tu búsqueda
        </Typography>
        {open ? (
          <CardMicroemprendimientos micro={microEmprendimiento} />
        ) : (
          <Box
            sx={{
              width: "80%",
              position: "relative",
              // top: "50%",
              // left: "50%",
              transform: "translate(10%, 20%)",
              padding: "20px",
              borderRadius: "10px",
            }}
            bgcolor={theme.palette.grisClaro.main}
            className="text-center"
          >
            <img src={imgNoEncontrada} alt="" />

            <Typography
              id="modal-modal-title"
              color={theme.palette.azul.main}
              typography={"semibold"}
            >
              No se encontraron resultados para tu búsqueda
            </Typography>

            <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}
              color={theme.palette.negro.main}
              typography={"medium"}
            >
              Intentá nuevamente con otra consulta
            </Typography>
          </Box>
        )}
      </Stack>
    </>
  );
};

export default ResultOfSearch;
