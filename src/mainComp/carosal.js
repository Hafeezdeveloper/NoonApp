// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import "./style1.css";

// // import required modules
// import { Autoplay, Pagination, Navigation } from "swiper";

// export default function Carosal() {
//   return (
//     <>
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Autoplay, Navigation]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//             <img src="https://f.nooncdn.com/mpcms/EN0002/assets/543fe748-8eb3-49ee-9b87-3b279b22cb70.png" alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//             <img src="https://f.nooncdn.com/mpcms/EN0002/assets/ed2aff6f-ebae-4810-9dc9-16379560ebed.png" alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//             <img src="	https://f.nooncdn.com/mpcms/EN0002/assets/b8fde2ec-405b-42a3-87c1-35057159ae62.png" alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//             <img src="	https://f.nooncdn.com/mpcms/EN0002/assets/80433471-3e39-4a1d-a1a1-2d89eb02fb92.png" alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//             <img src="https://f.nooncdn.com/mpcms/EN0002/assets/b659980e-6b84-4661-bcf6-b101beb55548.png" alt="" />
//         </SwiperSlide>
        
//       </Swiper>
//     </>
//   );
// }


import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import './style1.css'
function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel   activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item >
        <img
          className="w-100"
            // width={"1050px"}
          src="https://f.nooncdn.com/mpcms/EN0002/assets/543fe748-8eb3-49ee-9b87-3b279b22cb70.png"
          alt="First slide"
            // width={"100%"}

        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=" w-100"
          src="https://f.nooncdn.com/mpcms/EN0002/assets/31faeb25-aa1c-4bba-b9ac-595d4a18be69.png"
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100"
          src="https://f.nooncdn.com/mpcms/EN0002/assets/b8fde2ec-405b-42a3-87c1-35057159ae62.png"
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
    // https://f.nooncdn.com/mpcms/EN0002/assets/b659980e-6b84-4661-bcf6-b101beb55548.png
  );
}

export default ControlledCarousel;