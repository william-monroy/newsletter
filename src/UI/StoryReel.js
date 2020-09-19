import React, { Component } from 'react';
import '../css/StoryReel.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function StoryReel () {

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3500,
            pauseOnHover: true
          };
          return (
            <div className='carousel'>
              <Slider {...settings}>
                <div>
                    <img src="https://scontent.faqp2-3.fna.fbcdn.net/v/t1.0-9/75474148_2610037295753452_8195379555951706112_o.png?_nc_cat=103&_nc_sid=730e14&_nc_ohc=4QPDu9cDy1sAX9AzOzi&_nc_ht=scontent.faqp2-3.fna&oh=1b3f7ba99d5d5bee0549d56690c11e9a&oe=5F887CB2" alt="" height="300px" />
                </div>
                <div>
                    <img src="https://scontent.faqp2-2.fna.fbcdn.net/v/t1.0-9/75298455_2592007514223097_7194523954030051328_n.jpg?_nc_cat=101&_nc_sid=9267fe&_nc_ohc=gYtkMBwVlSgAX-hhO05&_nc_ht=scontent.faqp2-2.fna&oh=1172816c603948eba88d21e48dc67cae&oe=5F8980EE" alt="" height="300px" />
                </div>
                <div>
                    <img src="https://scontent.faqp2-2.fna.fbcdn.net/v/t1.0-9/72994082_2560862460670936_6542076876548997120_n.jpg?_nc_cat=109&_nc_sid=9267fe&_nc_ohc=ZIHbb-j8VxsAX9L5FQo&_nc_ht=scontent.faqp2-2.fna&oh=70e861b1176a2d24fa08977c81a1e577&oe=5F893A30" alt="" height="300px" />
                </div>
                <div>
                    <img src="https://scontent.faqp2-3.fna.fbcdn.net/v/t1.0-9/74319917_2552251574865358_98548286599725056_n.jpg?_nc_cat=108&_nc_sid=9267fe&_nc_ohc=dGvP5NpeGlgAX80eDZw&_nc_ht=scontent.faqp2-3.fna&oh=b431e533c5343be55e4075787ee4b6bc&oe=5F8691B2" alt="" height="300px" />
                </div>
                <div>
                <img src="https://scontent.faqp2-1.fna.fbcdn.net/v/t1.0-9/69299676_2441267392630444_4662821980657942528_o.png?_nc_cat=111&_nc_sid=730e14&_nc_ohc=bm1fbtGTynYAX-c7GtD&_nc_ht=scontent.faqp2-1.fna&oh=4422e2e80ebc8ea6ab18b8ad8eb2dd7c&oe=5F880CFE" alt="" height="300px" />
                </div>
              </Slider>
            </div>
          );
    
}

export default StoryReel
