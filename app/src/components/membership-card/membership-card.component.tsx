import { Button } from '../button/button.component'
import './membership-card.styles.scss'
import check from '../../assets/check.svg';

import { Link } from 'react-scroll'

type Props = {
    subscription: {
        type: string,
        price: number,
        per: string,
        options: string[],
    }
}

export const MembershipCard = ({ subscription }: Props) => {

    const { type, per, price, options } = subscription;
    const getStarted = () => console.log('Get started!')
    return (
        <div className='membership-card'>
            <h1 className="membership-card__title">{type}</h1>
            <div className="membership-card__price-block">
                <h1>€{price}</h1>
                <p>{per}</p>
            </div>
            <div className="membership-card__description-block">
                {options.map((option, index) => {
                    return (
                        <div key={index * 7}>
                            <img src={check} alt="" />
                            <p>{option}</p>
                        </div>
                    )
                })}
            </div>
            <div className="membership-card__button">
                <Button buttonType="inverted"
                    onClick={getStarted}
                    style={{ width: 200, height: 45, fontSize: 17 }}
                >
                    <Link
                        activeClass="active"
                        to={'footer__contact-text'}
                        spy={false}
                        smooth={true}
                        duration={800}
                    // onClick={() => setIsContactActive(true)}
                    >
                        Get started
                    </Link>
                </Button>
            </div>
        </div>
    )
}