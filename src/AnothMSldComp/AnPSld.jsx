import React from 'react'
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Animg from "./AnImg"
const AnPSld = () => {
  return (
    <div>
      <Box>
          <Box>
          <Grid sx={{p:'0px 15px',m:'10px 0px'}} rowSpacing={1} container>
              <Grid item xs={12} sm={12} xs={12}>
                  <Typography variant='h6'>
                Trending deals in electronics
                  </Typography>
              </Grid>
            <Grid item xs={12} sm={12} md={12}>

                    <Animg/>

            </Grid>
          </Grid>
          </Box>

          <Box>
              <Grid container>
                <Grid item xs={12} sm={12} md={12}><img width={"100%"} src="	https://f.nooncdn.com/mpcms/EN0002/assets/4eb2866f-b18b-4419-baf2-7ac3f1962720.png" alt="" /></Grid>
              </Grid>
          </Box>
      </Box>
    </div>
  )
}

export default AnPSld
