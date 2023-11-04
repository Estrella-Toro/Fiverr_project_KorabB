import { Button } from '../button/button.component'
import './about-me-card.styles.scss'
import buttonArrow from '../../assets/buttonArrow.svg'
import { InfoCard } from '../info-card/info-card.component'
import { Link } from 'react-scroll'
import { infoCards } from '../../application-data/about-me-data'



export const AboutMeCard = () => {
    return (
        <div className='about-me-card'>
            <h2 className="about-me-card__above-title">I'm</h2>
            <h1 className="about-me-card__title">Sohil Elyas</h1>
            <div className="about-me-card__cards-container">
                {infoCards.map((infoCard, index) => {
                    return <InfoCard key={index} title={infoCard.title} content={infoCard.content} />
                })}
            </div>
            <div className="about-me-card__button">
                <Button >
                    <Link
                        className='about-me-card__button'
                        activeClass="active"
                        to={'footer__contact-text'}
                        spy={false}
                        smooth={true}
                        duration={800}
                    // onClick={() => setIsContactActive(true)}
                    >
                        Contact me <span><img src={buttonArrow} alt="" /></span>
                    </Link>
                </Button>

            </div>
        </div>
    )
}
