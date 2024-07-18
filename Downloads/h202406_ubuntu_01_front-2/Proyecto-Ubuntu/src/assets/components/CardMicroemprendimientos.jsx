import { useState, useEffect } from "react";
import theme from "../../config/theme";
import Typography from "@mui/material/Typography";
import Card from "react-bootstrap/Card";
import imgUbicacion from "../img/location_on.svg";
import vectorder from "../img/Vectorderecho.svg";
import vectorizq from "../img/Vectorizquierdo.svg";
import circuloBlanco from "../img/circuloBlanco.svg";
import circuloNegro from "../img/circuloNegro.svg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Button from "@mui/material/Button";
import "../css/CardMicroemprendimiento.css";
// import img1 from "../assets/img/imgempren1.svg";
// import img2 from "../assets/img/imgempren2.svg";
// import img3 from "../assets/img/imgempren3.svg";


 // const microEmprendimiento = {
    //   nombre: "EcoSenda",
    //   descripcion: "Finca agroecológica",
    //   categoria: "Agroecología/Orgánicos/Alimentación saludable",
    //   imagenes: [img1, img2, img3],
    //   ubicacion: "Tunuyán, Mendoza, Argentina",
    //   info: `Promueven un modelo de agricultura sostenible, protegiendo el,
    //       medio ambiente, el agua y las semillas autóctonas. Cultivan
    //       frutas, verduras, plantas medicinales y crean derivados. Editan
    //       también contenidos educativos, gestionan un banco de semillas y
    //       comercializan o intercambian excedentes.`,
    //   info1: `Nació del sueño de restaurar la salud y adoptar un estilo de
    //       vida ideal. Este proyecto familiar creció fundamentado en la
    //       permacultura, biodinámica y agroecología, comprometiéndose con
    //       la soberanía alimentaria, el bienestar, el regreso al campo, la
    //       venta directa y la dignidad de la vida campesina.`,
    // };
const CardMicroemprende = (props) => {
  const {
    nombre,
    descripcion,
    categoria,
    region,
    provincia,
    pais,
    info,
    info1,
    imagenes,
  } = props.micro;

  const ubicacion = region + ", " + provincia + ", " + pais + " .";
  const imagenesEmprendimiento = imagenes;
  const [mostrarImagen, setMostrarImagen] = useState(imagenesEmprendimiento[0]);
  const [vermas, setVermas] = useState(false);
  const [countImg, setCountImg] = useState(0);
  const [circulo1, setCirculo1] = useState(circuloNegro);
  const [circulo2, setCirculo2] = useState(circuloBlanco);
  const [circulo3, setCirculo3] = useState(circuloBlanco);
  const [flecha, setFlecha] = useState(true);

  const style = {
    backgroundColor: theme.palette.grisClaro.main,
    margin: "10px",
  };

  const sumaImg = () => {
    const index = (countImg + 1) % imagenesEmprendimiento.length;
    setCountImg(index);
    setMostrarImagen(imagenesEmprendimiento[index]);
    switch (index) {
      case 0:
        setCirculo1(circuloNegro);
        setCirculo2(circuloBlanco);
        setCirculo3(circuloBlanco);
        break;
      case 1:
        setCirculo1(circuloBlanco);
        setCirculo2(circuloNegro);
        setCirculo3(circuloBlanco);
        break;
      case 2:
        setCirculo1(circuloBlanco);
        setCirculo2(circuloBlanco);
        setCirculo3(circuloNegro);
        break;
    }
  };

  const restaImg = () => {
    const index =
      (countImg - 1 + imagenesEmprendimiento.length) %
      imagenesEmprendimiento.length;
    setCountImg(index);
    setMostrarImagen(imagenesEmprendimiento[index]);
    switch (index) {
      case 0:
        setCirculo1(circuloNegro);
        setCirculo2(circuloBlanco);
        setCirculo3(circuloBlanco);
        break;
      case 1:
        setCirculo1(circuloBlanco);
        setCirculo2(circuloNegro);
        setCirculo3(circuloBlanco);
        break;
      case 2:
        setCirculo1(circuloBlanco);
        setCirculo2(circuloBlanco);
        setCirculo3(circuloNegro);
        break;
    }
  };

  return (
    <>
      <Card className="card " style={style}>
        <div className="cardImagen">
          <Card.Img
            src={mostrarImagen}
            style={{
              sm: { padding: "50px", width: "50%" },
              md: { height: "200px" },
            }}
            className="imgen w-100 mx-auto d-block "
          />
          <div
            className="d-flex justify-content-between vectores "
            style={{
              sm: { padding: "50px", width: "50%" },
              md: { height: "200px" },
            }}
          >
            <img
              src={vectorizq}
              alt="izquierda"
              style={{ width: ".6rem" }}
              onClick={restaImg}
              className="vectorIzq"
            />
            <img
              src={vectorder}
              alt="derecho"
              style={{ width: ".6rem" }}
              onClick={sumaImg}
              className="vectorDer"
            />
          </div>
          <div className="circulos">
            <img src={circulo1} className="imgcirculos" alt="circulo" />
            <img src={circulo2} className="imgcirculos" alt="circulo" />
            <img src={circulo3} className="imgcirculos" alt="circulo" />
          </div>
        </div>

        <Card.Body>
          <Typography
            color={theme.palette.negro.main}
            typography={"semibold"}
            fontSize={"18px"}
          >
            {nombre}
          </Typography>
          <Typography
            color={theme.palette.azul.main}
            typography={"bold"}
            fontSize={"14px"}
          >
            {descripcion}
          </Typography>
          <Typography
            color={theme.palette.negro.main}
            typography={"regular"}
            fontSize={"14px"}
            margin={"10px 0 0 0"}
          >
            {categoria}
          </Typography>
          <div className="d-flex my-3">
            <img src={imgUbicacion} alt="Logo Ubicacion" />
            <Typography
              color={theme.palette.negro.main}
              typography={"regular"}
              fontSize={"14px"}
            >
              {ubicacion}
            </Typography>
          </div>
        </Card.Body>
        {vermas && (
          <>
            <Card.Body>
              <Typography
                color={theme.palette.azul.main}
                fontSize={"16px"}
                typography={"semibold"}
                margin={"0 0 15px 0"}
              >
                Descripción del Microemprendimiento
              </Typography>
              <Typography
                color={theme.palette.negro.main}
                fontSize={"16px"}
                typography={"regular"}
              >
                {info}
              </Typography>
              <hr />
              <Typography
                color={theme.palette.azul.main}
                fontSize={"16px"}
                typography={"semibold"}
                margin={"0 0 15px 0"}
              >
                Más información de interés
              </Typography>
              <Typography
                color={theme.palette.negro.main}
                fontSize={"16px"}
                typography={"regular"}
                margin={"0 0 15px 0"}
              >
                {info1}
              </Typography>
              <div className="d-flex justify-content-center">
                <Button
                  className="btn text-white mt-2 rounded-pill px-5 py-2"
                  variant="contained"
                  size="large"
                  color="azul"
                >
                  Contactar
                </Button>
              </div>
            </Card.Body>
          </>
        )}
        <div className="d-flex justify-content-center ">
          {flecha ? (
            <ExpandMoreIcon
              color="primary"
              fontSize="large"
              onClick={() => {
                setFlecha(!flecha);
                setVermas(!vermas);
              }}
            />
          ) : (
            <ExpandLessIcon
              color="primary"
              fontSize="large"
              onClick={() => {
                setFlecha(!flecha);
                setVermas(!vermas);
              }}
            />
          )}
        </div>
      </Card>
    </>
  );
};

export default CardMicroemprende;
