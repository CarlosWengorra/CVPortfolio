import NavBar from "../assets/components/NavBar.jsx";
import Search from "../assets/components/Search.jsx";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import theme from "../config/theme";
import "../assets/css/Search.css";
import imgNoEncontrada from "../assets/img/noEncontrado.svg";

const NoEncontrado = (props) => {
  return (
    <>
      <NavBar />
      <Stack  direction={{ xs: "column" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        padding={{ xs: 3, sm: 3, md: 0 }}>

        <Search bg="#EAEAEA" width="100%" />
        
        <Typography fontSize={24} textAlign={"center"} typography={"bold"}>
          Resultados de tu búsqueda
        </Typography>

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
      </Stack>
    </>
  );
};

export default NoEncontrado;
