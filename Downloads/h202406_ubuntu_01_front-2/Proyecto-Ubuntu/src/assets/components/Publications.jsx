import { Typography } from '@mui/material';
import PublicationsList from './PublicationsList';
import '../css/PublicationsList.css'

function Publications() {
  return (
    <div id='Publications'>
      <Typography className='PublicationsTitleA'>Publicaciones</Typography>
      <Typography className='PublicationsTitleB'>Finanzas con impacto</Typography>
      <PublicationsList />
    </div>
  );
}

export default Publications;