import React from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';  
import BottomAppBar from './MobileBar'


const Navbar2 = () => {
    let abc = [
        {name:"All Categories"},
        {name:"Wood"},
        {name:'Electronic'},
        {name:'Men'},
        {name:'Women'},
        {name:"Cars"},
        {name:"Sports"},
        {name:"BestSellers"},
        {name:"Sell On Soon"},
    ]
  return (
    <div>
      <Box sx={{display:{xs:'none' ,sm:'none',md:'flex'}}}>
          
        <AppBar sx={{backgroundColor:'white'}} position="static" >
        <Toolbar >
        {/* <StyledToolbar  > */}

           {abc.map( (data,i) =>{
               return(
                   <Typography key={i} sx={{width:'100%'}}  variant='button'> <Button sx={{color:'black',fontWeight:'600'}} variant='secondary'> {data.name} </Button></Typography>
               )
           } )} 
      {/* </StyledToolbar> */}
      </Toolbar>
      </AppBar>
      </Box>
           
           <Box sx={{display:{xs:'flex',sm:'none',md:'none'}}}>
               <BottomAppBar />
           </Box>
    </div>
  )
}

export default Navbar2
