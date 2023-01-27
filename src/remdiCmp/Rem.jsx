import React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

const Rem = () => {
  return (
    <div>
        <Grid container>
            <Grid item md={12} sx={{display:{xs:'none',sm:'flex',md:'flex'}}}>
                <img width={"100%"} src="	https://f.nooncdn.com/mpcms/EN0002/assets/14f42524-e0e5-46d3-bf6a-8c28b336c2ca.png" alt="" />
            </Grid>
        </Grid>
    </div>
  )
}

export default Rem;
