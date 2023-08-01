import { useState, useEffect } from 'react';
import { Button } from '../button/button.component';
import circles from '../../assets/MiddleBalls.svg';
// import hero from '../../assets/Hero-homepage-2.png';
import hero from '../../assets/HomepageFinalEditSM.png';
import balls from '../../assets/Balls.png';
import './hero.styles.scss';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


export const Hero = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 720);
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



    const background = isLargeScreen ? circles : balls

    return (
        <div className="hero-homepage"
            style={{
                backgroundImage: `url(${background})`,
                backgroundRepeat: `no-repeat`,
            }}>
            <div className="hero-homepage__card">
                <h2 className="hero-homepage__card__title">GET FIT</h2>

                <p className="hero-homepage__card__text">Unleash your potential. Start your fitness journey with me now.</p>

                <div className="hero-homepage__card__button">
                    <Button
                        buttonType="inverted"
                        style={{ fontSize: 17 }}>
                        <Link
                            activeClass="active"
                            to={'memberships-container'}
                            spy={false}
                            smooth={true}
                            offset={120}
                            duration={800}
                        // onClick={() => setIsContactActive(true)}
                        >
                            Get started
                        </Link>
                    </Button>
                </div>
            </div>

            <div className="hero-homepage__image">
                <img src={hero} alt="" />
            </div>
        </div>
    );
};
