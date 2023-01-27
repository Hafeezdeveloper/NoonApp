import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { padding } from '@mui/system';

const Deal = () => {
  return (
    <div>
      <Box>
          <Grid container rowSpacing={2}  sx={{p:'10px 0px',backgroundColor:'rgb(255, 240, 190)'}}>
              <Grid item xs={12} sm={12} md={12}><img width={"100%"} src="	https://f.nooncdn.com/mpcms/EN0002/assets/908e7245-d574-4b81-91d9-0dab73a07dda.png" alt="" /></Grid>
              <Grid item xs={12} sm={12} md={12} >
                  <Grid container spacing={3} sx={{p:'5px 15px'}}>
                    <Grid item md={3} sm={3} xs={6}><img width={"100%"} src="	https://f.nooncdn.com/mpcms/EN0002/assets/dfcec5e2-e3a5-46cb-8d37-7f1cb46eaf9b.png" alt="" /></Grid>  
                    <Grid item md={3} sm={3} xs={6}><img width={"100%"} src="	https://f.nooncdn.com/mpcms/EN0002/assets/7845a4bc-d2db-4d85-8124-bdb2457c1b1a.png" alt="" /></Grid>  
                    <Grid item md={3} sm={3} xs={6}><img width={"100%"} src="https://f.nooncdn.com/mpcms/EN0002/assets/4a6cefcc-215c-471e-a2ff-401fa15b4299.png" alt="" /></Grid>  
                    <Grid item md={3} sm={3} xs={6}><img width={"100%"} src="	https://f.nooncdn.com/mpcms/EN0002/assets/c2b3b0dc-d202-4dd8-9f57-3f3350f556e0.png" alt="" /></Grid>  
                  </Grid>
              </Grid>
              
          </Grid>
      </Box>
    </div>
  )
}

export default Deal;
