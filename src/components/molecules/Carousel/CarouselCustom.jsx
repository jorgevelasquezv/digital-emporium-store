import React from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';

export const CarouselCustom = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'linear',
    };
    return (
        <section className="flex items-center justify-center">
            <Slider {...settings} className="-z-10 w-11/12 self-center">
                <div className="w-24 h-48" style={{ width: 100 }}>
                    <img
                        className="h-40"
                        src="https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6553/6553055_sd.jpg"
                        alt=""
                    />
                </div>
                <div className="w-24 h-48" style={{ width: 100 }}>
                    <img
                        className="h-40"
                        src="https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6541/6541789_sd.jpg"
                        alt=""
                    />
                </div>
                <div className="w-24 h-48" style={{ width: 100 }}>
                    <img
                        className="h-40"
                        src="https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6551/6551125_sd.jpg"
                        alt=""
                    />
                </div>
                <div className="w-24 h-48" style={{ width: 100 }}>
                    <img
                        className="h-40"
                        src="https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6455/6455131_sd.jpg"
                        alt=""
                    />
                </div>
                <div className="w-24 h-48" style={{ width: 100 }}>
                    <img
                        className="h-40"
                        src="https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6521/6521174_sd.jpg"
                        alt=""
                    />
                </div>
                <div className="w-24 h-48" style={{ width: 100 }}>
                    <img
                        className="h-40"
                        src="https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6443/6443300_sd.jpg"
                        alt=""
                    />
                </div>
            </Slider>
        </section>
    );
};
