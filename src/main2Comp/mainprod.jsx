import React from 'react'
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import ProductCrt from "./prodctC"
const Mainprod = () => {
  return (
    <div>
        <Box sx={{backgroundColor:'rgb(255, 240, 190)'}}>
      <Grid  container>
            <Grid   item xs={12} md={12} sm={12}>
                <ProductCrt  />
            </Grid>
      </Grid>
      </Box>
    </div>
  )
}

export default Mainprod ;
