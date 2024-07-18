import { useState } from 'react';
import '../css/PublicationsList.css';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Box,
  IconButton
} from '@mui/material';
import PublicacionesSlider from '../img/PublicacionesSlider.jpg'
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const publicationsList = [
  {
    id: 1,
    titulo: 'Inversiones Éticas: Más que ganancias',
    fecha: '17/04/2023',
    descripcion: 'Las decisiones financieras han trascendido la mera maximización del rendimiento. Actualmente, muchos inversores desean que sus decisiones reflejen sus valores éticos y morales, dando lugar a las inversiones éticas o sostenibles.',
    imagen: [PublicacionesSlider, PublicacionesSlider, PublicacionesSlider],
  },
  {
    id: 2,
    titulo: 'Inversiones Éticas: Más que ganancias',
    fecha: '17/04/2023',
    descripcion: 'Las decisiones financieras han trascendido la mera maximización del rendimiento. Actualmente, muchos inversores desean que sus decisiones reflejen sus valores éticos y morales, dando lugar a las inversiones éticas o sostenibles.',
    imagen: [PublicacionesSlider, PublicacionesSlider, PublicacionesSlider],
  },
  {
    id: 3,
    titulo: 'Inversiones Éticas: Más que ganancias',
    fecha: '17/04/2023',
    descripcion: 'Las decisiones financieras han trascendido la mera maximización del rendimiento. Actualmente, muchos inversores desean que sus decisiones reflejen sus valores éticos y morales, dando lugar a las inversiones éticas o sostenibles.',
    imagen: [PublicacionesSlider, PublicacionesSlider, PublicacionesSlider],
  },
];

const PublicationsList = () => {
  const [expanded, setExpanded] = useState(null);
  const [currentImage, setCurrentImage] = useState({});

  const handleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };
  const handlePrevImage = (id) => {
    setCurrentImage((prevState) => ({
      ...prevState,
      [id]: (prevState[id] > 0 ? prevState[id] : publicationsList.find(pub => pub.id === id).imagen.length) - 1
    }));
  };

  const handleNextImage = (id) => {
    setCurrentImage((prevState) => ({
      ...prevState,
      [id]: (prevState[id] + 1) % publicationsList.find(pub => pub.id === id).imagen.length
    }));
  };

  return (
    <Grid container spacing={3} direction="column" alignItems="center" id='PublicationsList'>
      {publicationsList.map((pub) => (
        <Grid item key={pub.id} xs={12} md={6}>
          <Card className='PublicationsListCard'>
            <Typography gutterBottom className='PublicationsListTitle' component="div">
              {pub.titulo}
            </Typography>
            <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <IconButton
                sx={{ position: 'absolute', left: 0, color: 'white'}}
                onClick={() => handlePrevImage(pub.id)}
              >
                <ArrowBackIos />
              </IconButton>
              <img
                className='PublicationsListImg'
                src={pub.imagen[currentImage[pub.id] || 0]}
                alt={pub.titulo}
              />
              <IconButton
                sx={{ position: 'absolute', right: 0, color: 'white' }}
                onClick={() => handleNextImage(pub.id)}
              >
                <ArrowForwardIos />
              </IconButton>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 1 }}>
              {pub.imagen.map((_, index) => (
                <Box
                  key={index}
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: (currentImage[pub.id] || 0) === index ? 'black' : 'white',
                    margin: '0 4px'
                  }}
                />
              ))}
            </Box>
            <CardContent className='PublicationsListDescription'>
              <Typography variant="body2" color="text.primary">
                {pub.fecha}
              </Typography>
              <Typography variant="body2" color="text.primary">
                {expanded === pub.id ? pub.descripcion : `${pub.descripcion.substring(0, 230)}...`}
              </Typography>
              <Button size="small" onClick={() => handleExpand(pub.id)} className='PublicationsListButton'>
                {expanded === pub.id ? 'Ver menos' : 'Ver más'}
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
export default PublicationsList;