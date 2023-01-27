import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
const prodM = () => {
  return (
    <div>
        <Box>
        <Grid container  columnSpacing={5}  sx={{backgroundColor:'#f4f4fc'}} >
          
      <Grid item md={4}  sx={{m:'30px 0px',backgroundColor:'white',p:'10px 25px',display:{xs:'none',sm:'block',md:'block'}}}>
        
        <Grid container columnSpacing={3} rowSpacing={2} sx={{p:' 10px 25px'}}>
          <Grid item md={12} sm={12}>
            {/* <Typography variant="h6" sx={{fontWeight:'800'}}>
          More reason to join
        </Typography> */}
        <img width={"100%"} src="https://f.nooncdn.com/mpcms/EN0002/assets/13a58314-e0d4-4fc8-8760-440374fec065.png" alt="" />
          </Grid>
          <Grid item md={6} sm={6}>
            <img width={"100%"} src="	https://f.nooncdn.com/mpcms/EN0002/assets/f657b831-1138-4b71-82d7-f64bd116d7a2.png" alt="" />
            </Grid>
         <Grid item md={6} sm={6}><img width={"100%"} src="https://f.nooncdn.com/mpcms/EN0001/assets/d60b456a-31f4-4ce8-a090-766dae3738f0.png" alt="" /></Grid>
        <Grid item md={6} sm={6}><img width={"100%"} src="https://f.nooncdn.com/mpcms/EN0001/assets/13e146bb-6381-4d6e-9620-0b0743650dc6.png" alt="" /></Grid>
        <Grid item md={6} sm={6}><img width={"100%"} src="https://f.nooncdn.com/mpcms/EN0001/assets/2f75ee19-4d9a-4bc7-9599-f10b30f05469.png" alt="" /></Grid>
        </Grid>
      </Grid>
      <Grid item md={4}   sx={{m:'30px 0px',p:'10px 0px',display:{xs:'block',sm:'block',md:'block'}}}>
        
        <Grid container columnSpacing={3} rowSpacing={2} sx={{backgroundColor:'rgb(255, 240, 190)',p:' 8px 25px'}}>
          <Grid item md={12} sm={12} xs={12}>
            {/* <Typography variant="h6" sx={{fontWeight:'800'}}>
          Mega deal of the day
        </Typography> */}
        <img width={"100%"} src="	https://f.nooncdn.com/mpcms/EN0001/assets/3d4912ae-c58f-47d5-bf26-85ebf71e14a1.png" alt="" />
          </Grid>
          <Grid item md={6} sm={6} xs={6}>
            <img width={"100%"} src="		https://f.nooncdn.com/mpcms/EN0002/assets/1f0bdcbf-8384-4ef1-8ef3-bb6e819fd9f2.png" alt="" />
            </Grid>
         <Grid item md={6} sm={6} xs={6}><img width={"100%"} src="https://f.nooncdn.com/mpcms/EN0002/assets/8802b908-3cf9-4963-b653-3c10d828cec7.png" alt="" /></Grid>
        <Grid item md={6} sm={6} xs={6}><img width={"100%"} src="https://f.nooncdn.com/mpcms/EN0002/assets/62f6a792-c811-4d63-8062-0b4982043d71.png" alt="" /></Grid>
        <Grid item md={6} sm={6} xs={6}><img width={"100%"} src="	https://f.nooncdn.com/mpcms/EN0002/assets/148d92ff-4a28-4781-bd0f-fe728a5a1714.png" alt="" /></Grid>
        </Grid>
      </Grid>
      <Grid item md={4}  sx={{m:'30px 0px',backgroundColor:'',p:'13px 25px',display:{xs:'none',sm:'block',md:'block'}}}>
      <Grid container columnSpacing={3} rowSpacing={2} sx={{backgroundColor:'white',p:' 0px 25px'}}>
          <Grid item md={12} sx={{m:'12px 0px'}} sm={12}>
            {/* <Typography variant="h6" sx={{fontWeight:'800'}}>
          In focus
        </Typography> */}
        <img width={"100%"} src="https://f.nooncdn.com/mpcms/EN0002/assets/19354a5e-afa6-4b88-898c-d71b28084cfd.png" alt="" />
          </Grid>
          
        <Grid item md={12} sm={12}><img width={"100%"}  src="https://f.nooncdn.com/mpcms/EN0002/assets/b8192e91-f1da-4392-bce6-e1e1bdc99116.png" alt="" /></Grid>
        <Grid item md={12} sm={12}><img width={"100%"} src="	https://f.nooncdn.com/mpcms/EN0002/assets/38d94c10-2005-4c77-9bc0-71706e890a8d.png" alt="" /></Grid>
        </Grid>
      </Grid>
        </Grid>
      </Box>    
    </div>
  )
}

export default prodM;
