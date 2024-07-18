import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Search from "./Search.jsx";
import "../css/Hero.css";

const Hero = (props) => {
  return (
    <div
      style={{
        backgroundImage: `url(${props.imagen})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        height: "calc(100vh - 56px)",
        paddingBottom: "20px",
      }}
    >
      <Stack
        direction={{ xs: "column" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        padding={{ xs: 3, sm: 3, md: 0 }}
      >
        <div className="">
          {props.buscadorEmprendimiento && (
            <Search bg={"blanco.main"} width={"100%"} />
          )}

          <Typography
            fontSize={"18px"}
            color={"blanco.main"}
            marginBottom={"10px"}
            typography={"semibold"}
          >
            {props.titulo ? props.titulo : "FINANCIAMIENTO SOSTENIBLE"}
          </Typography>

          {props.subtitulo && (
            <Typography
              fontSize={"28px"}
              color={"blanco.main"}
              marginBottom={"10px"}
              typography={"medium"}
            >
              {props.subtitulo}
            </Typography>
          )}

          {props.subtitulo ? (
            <Typography
              fontSize={"24px"}
              width={{ xs: "75%" }}
              color={"blanco.main"}
              typography={"regular"}
            >
              {props.descripcion}
            </Typography>
          ) : (
            <Typography
              fontSize={"28px"}
              width={{ xs: "75%" }}
              color={"blanco.main"}
              typography={"medium"}
            >
              Impulsamos el desarrollo de finanzas de impacto, liderando la
              transición hacia un modelo financiero sostenible
            </Typography>
          )}
        </div>
      </Stack>
    </div>
  );
};

export default Hero;
