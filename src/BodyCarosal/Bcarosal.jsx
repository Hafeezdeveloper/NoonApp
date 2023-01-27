import Carousel from 'react-bootstrap/Carousel';
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

function IndividualIntervalsExample() {
  return (
      <Box>

    <Box>
    <Carousel>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="	https://f.nooncdn.com/mpcms/EN0002/assets/0d23259c-c440-4796-bd19-40700784d537.png"
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="	https://f.nooncdn.com/mpcms/EN0002/assets/d346bdc8-40b1-47b2-9451-08279b8702b6.png"
          alt="Second slide"
        />
       
      </Carousel.Item>
     
    </Carousel>

    </Box>
        <br />

        <Box>
            <Grid container sx={{p:'0px 15px'}}>
                <Grid item xs={12} sm={12} md={12}>
                    <img width={"100%"} src="	https://f.nooncdn.com/ads/banner-1440x1440/en_dk_ksa-ump-01.1674653515.9512038.png" alt="" />
                </Grid>
            </Grid>
        </Box>

    </Box>
  );
}

export default IndividualIntervalsExample;