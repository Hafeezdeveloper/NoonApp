import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Typography from "@mui/material/Typography"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styleProdM.css";

// import required modules
import { Pagination } from "swiper";
import { Typography, Box } from "@mui/material";

export default function Manjs() {

    let arr = [
        {
            image: 'https://f.nooncdn.com/products/tr:n-t_240/v1662640953/N53346840A_1.avif',
            title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            price: 90000,
            category: "Iphone 11",
        },
        {
            image: '	https://f.nooncdn.com/products/tr:n-t_240/v1662964834/N53346828A_1.avif',
            title: "Mens Casual Premium Slim Fit T-Shirts ",
            price: 80000,
            description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
            category: "Iphone Xr"
        },
        {
            image: '	https://f.nooncdn.com/products/tr:n-t_240/v1669724765/N40633047A_1.avif',
            title: "Mens Cotton Jacket",
            price: 2500,
            category: "Gaming Pad",
            description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day."
        },
        {
            image: '	https://f.nooncdn.com/products/tr:n-t_240/v1663322644/N43241184A_1.avif',
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
            image: '	https://f.nooncdn.com/products/tr:n-t_240/v1660052743/N52856958A_1.avif',
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
            image: 'https://f.nooncdn.com/products/tr:n-t_240/v1663762039/N51638356A_1.avif',
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
            image: 'https://f.nooncdn.com/products/tr:n-t_240/v1653053749/N52535496A_1.avif',
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
                // navigation={false}
                // spaceBetween={10}
                pagination={{
                    // hide:'true',
                    type: 'custom',
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
            // className="mySwiper"
            >
                {arr.map((data, i) => {
                    return (

                        <SwiperSlide>
                            <Box>
                                <img className="XYZ9" width={"100%"} src={data.image} alt="" />

                                <Typography varaint='p'>{data.category}</Typography>
                            </Box> <br />
                        </SwiperSlide>
                    )
                })}
                {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
            </Swiper>
        </>
    );
}
