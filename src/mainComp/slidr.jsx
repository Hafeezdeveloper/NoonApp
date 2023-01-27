import React from 'react'
import ControlledCarousel from "./carosal"
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'


const slidr = () => {
  return (
    <div>
      <Box>
          <Grid container direction={"row-reverse"}>
                <Grid  item   md={4} sm={4} >
                  <Grid sx={{display:{xs:'none',sm:'flex',md:"flex"}}} container>
                      <Grid item md={6} sm={6}>
                        <img width={"100%"}  src="https://f.nooncdn.com/mpcms/EN0002/assets/ba7cbb24-568e-4f9f-8149-59fc16c4d51b.png" alt="" />
                      </Grid>
                      <Grid item md={6} sm={6}>
                      <img width={"100%"}  src="	https://f.nooncdn.com/mpcms/EN0002/assets/f397f1cf-ebab-404a-b12f-562c812148f5.png" alt="" />
                      </Grid>
                  </Grid>
              </Grid>

        <Grid sx={{display:{xs:'flex',sm:'none',ms:'none'}}} container  >
              <Grid item xs={12} >
              <img width={"100%"} className='xab0'height={"100%"}  src="https://f.nooncdn.com/mpcms/EN0002/assets/14f42524-e0e5-46d3-bf6a-8c28b336c2ca.png" alt="" />
              </Grid>
        </Grid>

                <Grid item md={8}   sm={8} xs={12}>
                  <Grid container >
                     <Grid item   md={12} sm={12} xs={12}>
                  <ControlledCarousel style={{height:'100%'}}/>
                     </Grid> 
                  </Grid>

              </Grid>
          </Grid>
      </Box>
    </div>
  )
}

export default slidr
