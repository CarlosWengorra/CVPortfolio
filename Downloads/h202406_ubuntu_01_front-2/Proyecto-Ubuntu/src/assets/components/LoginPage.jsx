import { Button, Container, Box, Typography } from '@mui/material';
import googleIcon from '../img/googleIcon.png'
import ubuntuIcon from '../img/ubuntuIcon.png'
import '../css/LoginPage.css'
import './NavBar.jsx'
import NavBar from './NavBar.jsx';
import GroupsIcon from '@mui/icons-material/Groups';

function LoginPage() {
  return (
    <><NavBar/>
    <div className='CenterContainer'>
      <Container maxWidth="sm" style={{ height: '352px', width: '328px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor:'#FDFDFE', borderRadius: '8px' }}>
        <Box textAlign="center" classname='BoxContent'>
          <Typography variant="h4" component="h1" gutterBottom>
            Ingreso Administrador
          </Typography>
          <Box mb={3}>
            <img src={ubuntuIcon} alt="Ubuntu" style={{ width: '33px', height: '75px', marginBottom: '30px'}} />
          </Box>
          <Button variant="contained" style={{ backgroundColor: '#093C59', borderRadius: '100px'}}
          onClick={() => window.location.href = '/home'}
          >
            <img src={googleIcon} alt="GoogleIcon" style={{ width: '16px', height: '16px', backgroundColor: 'white', borderRadius: '100px', padding: '4px', marginRight: '5px' }} />
            <Typography textTransform={'none'}>
              Continuá con Google
            </Typography>
          </Button>
        </Box>
      </Container>
    </div></>
  );
}

export default LoginPage;