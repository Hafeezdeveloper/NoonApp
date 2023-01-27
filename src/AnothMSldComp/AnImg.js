import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./AnotStyle.css";

// import required modules
import { Pagination } from "swiper";

export default function Animg() {
  
    let arr = [
        {
            image: 'https://f.nooncdn.com/products/tr:n-t_240/v1664110823/N39674788A_1.avif',
            title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            price: 90000,
            category: "Iphone 11",
        },
        {
            image: 'https://f.nooncdn.com/products/tr:n-t_240/v1666787837/N18938413A_1.avif',
            title: "Mens Casual Premium Slim Fit T-Shirts ",
            price: 80000,
            description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
            category: "Iphone Xr"
        },
        {
            image: '	https://f.nooncdn.com/products/tr:n-t_240/v1628403251/N11030949A_1.avif',
            title: "Mens Cotton Jacket",
            price: 2500,
            category: "Gaming Pad",
            description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day."
        },
        {
            image: '		https://f.nooncdn.com/products/tr:n-t_240/v1605679962/N39930249A_1.avif',
            title: "Mens Casual Slim Fit",
            category: "Apple Watch",
            price: 35000,
            description: "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        },
        {
            image: '	https://f.nooncdn.com/products/tr:n-t_240/v1635445545/N48441984A_1.avif',
            title:
                "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
            price: 1695,
            category: "MakeUp",
            description:
                "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        },
        {
            image: 'https://f.nooncdn.com/products/tr:n-t_240/v1635188574/N22279715A_1.avif',
            title: "Solid Gold Petite Micropave ",
            price: 5280,
            description:
                "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
            category: "Iphone 6",
        },
        {
            image: 'https://f.nooncdn.com/products/tr:n-t_240/v1668531488/N22732308A_1.avif',
            title: "Solid Gold Petite Micropave ",
            price: 8580,
            description:
                "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
                category: "Air pods",
        },
        {
            image: '	https://f.nooncdn.com/products/tr:n-t_240/v1667829014/N41247610A_1.avif',
            title: "Solid Gold Petite Micropave ",
            price: 1680,

            description:
                "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
            category: "Iphone 12",
        },
        {
            image: '	https://f.nooncdn.com/products/tr:n-t_240/v1661493555/N46554630A_1.avif',
            title: "Solid Gold Petite Micropave ",
            price: 8980,
            description:
                "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
            category: "jewelery",
        },
        {
            image: '	https://f.nooncdn.com/products/tr:n-t_240/v1667497453/N27393383A_1.avif',
            title: "Solid Gold Petite Micropave ",
            price: 1680,
            description:
                "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
            category: "jewelery",
        },
        {
            image: '	https://f.nooncdn.com/products/tr:n-t_240/v1612882250/N32502751A_2.avif',
            title: "Solid Gold Petite Micropave ",
            price: 1680,
            description:
                "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
            category: "jewelery",
        },
        {
            image: 'https://f.nooncdn.com/products/tr:n-t_240/v1633252956/N48441886A_1.avif',
            title: "Solid Gold Petite Micropave ",
            price: 1680,
            description:
                "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
            category: "jewelery",
        },
        {
            image: '	https://f.nooncdn.com/products/tr:n-t_240/v1645647222/N20689064A_1.avif',
            title: "Solid Gold Petite Micropave ",
            price: 5580,
            description:
                "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
            category: "jewelery",
        },
        // {image:''},
        // {image:''},
    ]

  return (
    <>
      <Swiper
        slidesPerView={6}
        // spaceBetween={10}
        pagination={{
            type:'custom',
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 4,
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
            slidesPerView: 6,
            // spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
            {arr.map( (data,i) =>{
                return(
                       <SwiperSlide>
                        {/* <Box>
                            <img src="" alt="" />
                </Box   > */}
                <Box>
                <img className="lmn9" width={"100%"} src={data.image} alt="" />
                   <Typography variant='p'>
                           {data.category} 
                       </Typography> 
                       </Box>
            </SwiperSlide>
                )
            })}
      
      </Swiper>
    </>
  );
}
