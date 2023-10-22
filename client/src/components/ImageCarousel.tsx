import React from "react";
import Image from "next/image";
import banner1 from "/public/image/banner-1.jpg";
import banner2 from "/public/image/banner-2.jpg";
import banner3 from "/public/image/banner-3.jpg";


const ImageCarousel = () => {
    return (
    <>
     <div className="carousel w-full">
            <div id="banner1" className="carousel-item w-full">
                <Image src={banner1} className="w-full" alt="banner image" />
            </div> 
            <div id="banner2" className="carousel-item w-full">
                <Image src={banner2} className="w-full" alt="banner image" />
            </div> 
            <div id="banner3" className="carousel-item w-full">
                <Image src={banner3} className="w-full" alt="banner image" />
            </div> 
     </div> 
     <div className="flex justify-center w-full py-2 gap-2">
        <a href="#banner1" className="btn btn-xs">1</a> 
        <a href="#banner2" className="btn btn-xs">2</a> 
        <a href="#banner3" className="btn btn-xs">3</a> 
     </div>
    </>

)
};

export default ImageCarousel;
