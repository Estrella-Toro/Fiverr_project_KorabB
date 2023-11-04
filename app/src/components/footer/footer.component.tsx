import { useState, useEffect } from 'react';
import './footer.styles.scss'
import background from '../../assets/testimonialsCircles.svg';
// import { AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai';
import { FaSquareFacebook } from 'react-icons/fa6';
// import { BsTelephone } from 'react-icons/bs';
import phoneIcon from '../../assets/icon-phone.png'
import instagramIcon from '../../assets/icon-instageam.png'
import mailIcon from '../../assets/icon-mail.png'

import { TestimonialCard } from '../testimonial-card/testimonial-card.component';
import { Link } from 'react-scroll'
import { ContactForm } from '../../components/contact-form/contact-form.component'
import { testimonials } from '../../application-data/testimonials-data'


export const Footer = () => {
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
    return (
        <div id='contact' className='footer'>
            <div className="footer__contact" style={{
                backgroundImage: `url(${background})`,
                backgroundRepeat: `no-repeat`,
            }} >
                <h1 className="footer__contact__testimonials-title">
                    Testimonials
                </h1>
                <div className="footer__contact__testimonials">
                    {testimonials.map((card, index) => {
                        return <TestimonialCard key={index} card={card} />
                    })}
                </div>
                <div id="contact-form__anchortag"></div>
                <ContactForm />
                <div className="footer__contact-text">
                    <h1>Contact</h1>
                    <p>Get in touch with me</p>
                </div>
                <div className="footer__contact-separator"></div>
                <div className="footer__contact-details">
                    <div className='footer__contact-details__span'>
                        <a href="https://www.instagram.com/ecsofit/">
                            <img src={instagramIcon} alt="instagram icon" />
                            <span>@ecsofit</span>
                        </a>
                    </div>
                    <div className='footer__contact-details__span'>
                        <img src={phoneIcon} alt="phone icon" />
                        <span>+32 479 89 97 66</span>
                    </div>
                    <div className='footer__contact-details__span'>
                        <a href="#contact-form__anchortag">
                            <img src={mailIcon} alt="email icon" />
                            <span>sohil.elyasv@gmail.com</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer__block">

                <div className="footer__block__quote">
                    <h1>Get Fit</h1>
                    {isLargeScreen
                        ? <p>Transform your body and unlock your fitness potential with personalized training programs, expert guidance, and unwavering support from Sohil, your trusted personal trainer.</p>
                        : <p>Transform your body and unlock your fitness potential</p>
                    }
                    <div className="footer__block__quote__icons">
                        <a href="https://www.instagram.com/sohil.elyas/"><img src={instagramIcon} alt="" /></a>
                        <a href=" https://www.facebook.com/sohil.khazael/"><FaSquareFacebook /></a>
                        {/* <a href="#"><BsTelegram /></a> */}
                        {/* <a href="#"><FaSquareYoutube /></a> */}
                    </div>
                </div>
                <div className="footer__block__links">
                    <h1>XSOFIT</h1>
                    <ul>
                        <li>
                            <Link
                                activeClass="active"
                                to={'about-me-section'}
                                spy={false}
                                // smooth={true}
                                delay={0}
                                smooth={'linear'}
                                duration={800}
                            >
                                About me
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to={'memberships-container'}
                                spy={false}
                                // smooth={true}
                                delay={0}
                                smooth={'linear'}
                                duration={600}
                            >
                                Membership
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to={'footer__contact__testimonials-title'}
                                spy={false}
                                // smooth={true}
                                delay={0}
                                smooth={'linear'}
                                duration={400}

                            >
                                Testimonials
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to={'footer__contact-text'}
                                spy={false}
                                // smooth={true}
                                delay={0}
                                smooth={'linear'}
                                duration={200}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <p className="footer__copyright">
                Copyright © 2023 Korab B
            </p>
        </div>
    )
}

