import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Box from "@mui/material/Box"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import "./styleProd.css";

// import required modules
import { Pagination,Scrollbar,Navigation } from "swiper";

export default function ProductCrt() {
  return (
    <>
    <Box className={"abcs1"} sx={{height:{md:'230px',sm:'240px',xs:'140px'} ,display:'flex',alignItems:'center'}}> 

      <Swiper
    //   style={{height:'155px'}}
    
      scrollbar={{
        hide: true, 
        dragSize:'20px'

      }}
        slidesPerView={12}
        spaceBetween={0}
        pagination={{
          clickable: true,
            type:'custom'
            
        }}
        navigation={true}
        breakpoints={{
          "@0.00": {
            slidesPerView: 6,
            // spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 6,
            // spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 6,
            // spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 12,
            // spaceBetween: 50,
          },
        }}
        modules={[Pagination,Scrollbar,Navigation]}
        // className="mySwiper"
      >
        <SwiperSlide>
            <img className={"abcd0"}   src="https://f.nooncdn.com/mpcms/EN0001/assets/35f88437-db79-4ba3-b20e-8591c5488703.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className={"abcd0"}  src="https://f.nooncdn.com/mpcms/EN0002/assets/7ba892f5-cb97-443c-9f2a-64af785b5bd1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className={"abcd0"}  src="https://f.nooncdn.com/mpcms/EN0002/assets/1ba50c65-97f1-4209-a808-94d2839fe5e5.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className={"abcd0"}  src="https://f.nooncdn.com/mpcms/EN0002/assets/09e266d2-1989-4d5f-bb8f-fd28cbe9a4da.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className={"abcd0"}  src="https://f.nooncdn.com/mpcms/EN0002/assets/b5c0623b-ace4-43e2-a562-0d190bdf2866.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className={"abcd0"}  src="https://f.nooncdn.com/mpcms/EN0002/assets/81eaa734-013e-48cd-bf74-73ea6e3882d2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className={"abcd0"}  src="	https://f.nooncdn.com/mpcms/EN0002/assets/a4247bd6-1d71-4848-8137-6031a549567b.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className={"abcd0"}  src="	https://f.nooncdn.com/mpcms/EN0002/assets/9c93723d-0d65-494c-a337-3ed2c14d2838.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className={"abcd0"}  src="	https://f.nooncdn.com/mpcms/EN0002/assets/b8d2234c-9833-4c3c-95a5-d02eec4a1a8d.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className={"abcd0"}  src="	https://f.nooncdn.com/mpcms/EN0002/assets/8d3ca880-c80f-40a1-8206-5552c4aaf7a5.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className={"abcd0"}  src="	https://f.nooncdn.com/mpcms/EN0002/assets/bebff70b-1b21-4696-812d-bb289c1de2d6.png" alt="" /></SwiperSlide>
        <SwiperSlide>
            <img className={"abcd0"}  src="https://f.nooncdn.com/mpcms/EN0002/assets/1a3277d1-cef5-4102-8a4f-a0221e25a0f4.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className={"abcd0"}  src="	https://f.nooncdn.com/mpcms/EN0002/assets/f74a3653-dcdc-41bd-bf38-d28031cf6903.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className={"abcd0"}  src="https://f.nooncdn.com/mpcms/EN0002/assets/5c8d9d0f-1e97-4640-b301-f94c035e42bd.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className={"abcd0"} src="	https://f.nooncdn.com/mpcms/EN0002/assets/d759e2e3-f1d4-4149-8582-b2ab789f7608.png" alt="" />
        </SwiperSlide>

        <SwiperSlide>
            <img className={"abcd0"} src="	https://f.nooncdn.com/mpcms/EN0002/assets/bafc5cf9-e3cd-4ab7-bf41-319823962f86.png"  />
        </SwiperSlide>
        <SwiperSlide>
            <img className={"abcd0"} src="	https://f.nooncdn.com/mpcms/EN0002/assets/01c2a337-dc72-4859-aab2-4946e0705514.png"  />
        </SwiperSlide>
        <SwiperSlide>
            <img className={"abcd0"} src="	https://f.nooncdn.com/mpcms/EN0002/assets/8d59ba77-af7a-43df-969f-3166e427b5a5.png"  />
        </SwiperSlide>
        <SwiperSlide>
            <img className={"abcd0"} src="	https://f.nooncdn.com/mpcms/EN0002/assets/a436393e-5e2c-434f-a4b3-c568eb66f7b7.png"  />
        </SwiperSlide>
        <SwiperSlide>
            <img className={"abcd0"} src="https://f.nooncdn.com/mpcms/EN0002/assets/bd2ef346-9b4f-4088-bccc-09ae821fe7d8.png"  />
        </SwiperSlide>
      </Swiper>
      </Box>
    </>
  );
}
