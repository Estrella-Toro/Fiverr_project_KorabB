import { MembershipCard } from '../membership-card/membership-card.component'
import SlickNextArrow from '../../custom-slick-arrows-components/SlickNextArrow';
import SlickPreviousArrow from '../../custom-slick-arrows-components/SlickPreviousArrow';
import './memberships-container.styles.scss'

import { useEffect, useState } from 'react';

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { subscriptions } from '../../application-data/subscriptions-data';

export const MembershipsContainer = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        nextArrow: <SlickNextArrow />,
        prevArrow: <SlickPreviousArrow />,
        // autoplaySpeed: 1000,
    };



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
                        return (<div key={index}>
                            <MembershipCard subscription={subscription} />
                        </div>)
                    }
                    )}
                </div>
                : <div className="memberships-container__mobile">
                    <div className="memberships-container__mobile-container">
                        <Slider {...settings}>
                            {subscriptions.map((subscription, index) => {
                                return (
                                    <div key={index} className="memberships-container__mobile__slide">
                                        <MembershipCard subscription={subscription} />
                                    </div>
                                )
                            }
                            )}
                        </Slider>
                    </div>
                </div>
            }
        </div>
    )
}
