import './testimonial-card.styles.scss'
import stars from '../../assets/Stars.svg'
import heroImage from '../../assets/testimonials-pfp.png'

import { Testimonials } from '../../application-data/testimonials-data'

type Props = {
    card: Testimonials
}


export const TestimonialCard = ({ card }: Props) => {

    return (
        <div className="testimonial-card">
            <div className="testimonial-card__head">
                <div className="testimonial-card__head__image">
                    <img src={heroImage} alt="" />
                </div>
                <div className="testimonial-card__head__title">
                    <div className="testimonial-card__head__title-name">
                        <p>{card.name}</p>
                    </div>
                    <div className="testimonial-card__head__title-status">
                        <p>{card.status}</p>
                    </div>
                </div>
            </div>
            <div className="testimonial-card__text-content">
                <p>{card.review}</p>
            </div>
            <div className="testimonial-card__stars">
                <img src={stars} alt="" />
            </div>

        </div>
    )
}

