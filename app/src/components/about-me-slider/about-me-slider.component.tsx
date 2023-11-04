import './about-me-slider.styles.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from "react-slick";

type Props = {
    slides: {
        title: string;
        content: string;
    }[]
}

export const AboutMeSlider = ({ slides }: Props) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
        // autoplaySpeed: 1000,
    };
    const dashNumber = 4;
    return (
        <div className='about-me-slider'>
            <Slider {...settings}>
                {slides.map((slide, index) => {
                    return (
                        <div key={index}>
                            <h1 className="about-me-slider__title"> {slide.title}</h1>
                            <div className="about-me-slider__separator">
                                {[...Array(dashNumber)].map((innerIndex) => {
                                    const isRed = index === innerIndex;
                                    const separatorStyle = {
                                        backgroundColor: isRed ? '#f14141' : '#6C6C6C',
                                    };
                                    return (
                                        <p
                                            className="about-me-slider__separator-dash"
                                            key={innerIndex}
                                            style={separatorStyle}
                                        >.</p>
                                    );
                                })}
                            </div>
                            <p className='about-me-slider__content'> {slide.content}</p>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}
