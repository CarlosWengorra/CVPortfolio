import { createTheme } from '@mui/material/styles';

let theme = createTheme({
  typography: {
    light: {
      fontFamily: "Lato, sans-serif", 
      fontWeight: 300,
      fontStyle: "normal"
    },
    regular: {
      fontFamily: "Lato, sans-serif", 
      fontWeight: 400,
      fontStyle: "normal"
    },
    medium: {
      fontFamily: "Lato, sans-serif",
      fontWeight: 500,
      fontStyle: "normal"
    },
    semibold: {
      fontFamily: "Lato, sans-serif",
      fontWeight: 600,
      fontStyle: "normal"
    },
    bold: {
      fontFamily: "Lato , sans-serif",
      fontWeight: 700,
      fontStyle: "normal"
    }
  },
  palette: {
    blanco: {
      main: '#FDFDFD', 
    },
    grisClaro: {
      main: '#EAEAEA', 
    },
    grisMedio: {
      main: '#D2D2D2', 
    },
    grisOscuro: {
      main: '#6E6F70',
  },
  negro: {
    main: '#090909',
  },
  azul: {
    main: '#093C59',
  },
  verde: {
    main: '#226516',
  },
  gestionada: {
    main: '#1D9129',
  },
  noGestionada: {
    main: '#B86B11',
  },
  error: {
    main: '#BC1111',
  }
}});

export default theme;
