import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// import  {} from '@mui/material/Sta'
// import Container from '@mui/material/Container'



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 1.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'gray',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '50ch',
      '&:focus': {
        width: '71ch',
      },
    },
  },
}));

export default function SearchAppBar(props) {
    const { window } = props;

    const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact']

    const [mobileOpen, setMobileOpen] = React.useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    };
  
    const drawer = (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ my: 2 }}>
          MUI
        </Typography>
        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );
  
    const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{backgroundColor:"#fbeb04",color:'black'}} position="static">
        <Toolbar>
          <Box  sx={{ width:'100%',display:'flex',justifyContent: {xs:'none',md:'space-between' ,sm:'space-between'}}}>
            
          <Box sx={{display:{sx:"block",md:'none'}}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          </Box>

          <Box>
          <Typography 
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none',md:'block' } }}
          >
            <img style={{width:'100px',margin:'5px 0px'}} src={"	https://z.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg"} alt="" />
          </Typography>

          </Box>

          <Box sx={{flexGrow:1,margin:'2px 0px'}}>

          <Search sx={{backgroundColor:'white'}} >
            <SearchIconWrapper >
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="What are looking for?"
              inputProps={{ 'aria-label': 'search' }}
              
            />
          </Search>

          </Box>

        <Box sx={{display:{xs:'none',md:'flex',sm:'flex'}}}>
          <Box sx={{display:{xs:'none',md:'flex'},margin:'2px 0px'}}>
          <Typography sx={{borderRight:'2px solid black',padding:'6px',fontWeight:'bold'}} variant='button'>
            <Button sx={{color:'black',fontSize:'small'}}>
                English
            </Button>
          </Typography>
          <Typography  sx={{borderRight:'2px solid black',padding:'6px',fontWeight:'bold'}}  variant='button'>
            <Button sx={{color:'black',fontSize:'small'}}
            
              endIcon={<PersonIcon   />} >
                Sign in
            </Button>

          </Typography>
          
          <Typography  sx={{borderRight:'2px solid black',padding:'6px',fontWeight:'bold'}}  variant='button'>
            <Button sx={{color:'black',fontSize:'small'}}
              endIcon={<ShoppingCartIcon />}>
            Cart
            
            </Button>

          </Typography>
          
          </Box>
        </Box>

          </Box>

        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}