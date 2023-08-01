import { MembershipCard } from '../membership-card/membership-card.component'
import './memberships-container.styles.scss'

import { useEffect, useState } from 'react';

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import rightArrow from '../../assets/rightArrow.svg'
import leftArrow from '../../assets/leftArrow.svg'

export const MembershipsContainer = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        nextArrow: (
            <div>
                {/* <div className="next-slick-arrow"> ⫸ </div> */}
                <div className="next-slick-arrow"> <img src={leftArrow} alt="" /> </div>
            </div>
        ),
        prevArrow: (
            <div>
                {/* <div className="prev-slick-arrow"> ⫷ </div> */}
                <div className="prev-slick-arrow"> <img src={rightArrow} alt="" /> </div>
            </div>
        ),
        // autoplaySpeed: 1000,
    };

    const subscriptions = [
        {
            type: 'BASIC',
            price: 75,
            options: ['Nutritional Guidance',
                'Nutritional Guidance',
                'Nutritional Guidance test',
                'Nutritional Guidance'],
        },
        {
            type: 'PREMIUM',
            price: 150,
            options: ['Nutritional Guidance',
                'Nutritional Guidance',
                'Nutritional Guidance',
                'Nutritional Guidance'],
        },
        {
            type: 'ADVANCED',
            price: 300,
            options: ['Nutritional Guidance',
                'Nutritional Guidance',
                'Nutritional Guidance',
                'Nutritional Guidance'],
        },
    ]

    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 960);
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Call handleResize to set initial value
        handleResize();

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className='memberships-container'>
            <h1 className="memberships-container__title">Memberships</h1>
            {isLargeScreen
                ? <div className="memberships-container__tiers">
                    {subscriptions.map((subscription, index) => {
                        return (<div key={index * 11}>
                            <MembershipCard key={index} subscription={subscription} />
                        </div>)
                    }
                    )}
                </div>
                : <div className="memberships-container__mobile">
                    <Slider {...settings}>
                        {subscriptions.map((subscription, index) => {
                            return (
                                <div key={index * 5} className="memberships-container__mobile__slide">
                                    <MembershipCard key={index} subscription={subscription} />
                                </div>
                            )
                        }
                        )}
                    </Slider>
                </div>
            }
        </div>
    )
}
