import { useState } from "react";
import { Box, Drawer, List, ListItem, ListItemText, ListItemButton, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ubuntuTitle from '../img/ubuntuTitle.png';

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  }

  const DrawerList = (
    <Box sx={{ width: "256px", backgroundColor: "azul.main", height: "100%" }} role="presentation" onClick={ toggleDrawer(false) }>
      <List>
          <ListItem key={'Inicio'} disablePadding>
            <ListItemButton onClick={() => window.location.href = '/home'}>
              <ListItemText>
                <Typography typography={"bold"} color={"blanco.main"}>
                  {'Inicio'}
                </Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem key={'Microemprendimientos'} disablePadding>
            <ListItemButton onClick={() => window.location.href = '/microEmprendimientos'}>
              <ListItemText>
                <Typography typography={"bold"} color={"blanco.main"}>
                  {'Microemprendimientos'}
                </Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem key={'Publicaciones'} disablePadding>
            <ListItemButton onClick={() => window.location.href = '/home'}>
              <ListItemText>
                <Typography typography={"bold"} color={"blanco.main"}>
                  {'Publicaciones'}
                </Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: "blanco.main",
          height: '56px',
          // position: 'fixed',
          // width: '100%',
          // zIndex: "2"
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={ toggleDrawer(true) }
          sx={{display: "inherit", marginLeft: "5px"}}
        >
          { open ? (
            <CloseIcon />
          ) : (
            <MenuIcon />
          )}
        </IconButton>
        <img src={ubuntuTitle} alt="Ubuntu" style={{ width: '100px', margin: "0px auto" }} />
      </Box>
      <Drawer open={open} onClose={ toggleDrawer(false) } PaperProps={{sx: {marginTop: "56px"}}} BackdropProps={{ invisible: true }}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default NavBar;