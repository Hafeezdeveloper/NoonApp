import React from 'react'
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Manjs from "./img"
const ProCarol = () => {
  return (
    <div>
        <Box>
        <Grid container>
          <Grid item xs={12} sm={12} xs={12}>
              <Typography variant='h6' sx={{m:'0px 12px'}}>
              Recommented for you 
              </Typography>
              </Grid>  
    <Grid item md={12} xs={12} sm={12}>

        <Manjs />
    </Grid>
        </Grid>
        </Box>
    </div>
  )
}

export default ProCarol
