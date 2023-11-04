import { CSSProperties } from 'react';
// import { TfiAngleLeft } from 'react-icons/tfi'
import rightArrow from '../assets/rightArrow.svg'

interface Style extends CSSProperties {
    background: string,
    display: string,
}

export type SlickArrowProps = {
    className?: string,
    style?: Style,
    onClick?: () => void
}
export default function SlickPreviousArrow(props: SlickArrowProps) {
    // const { className, style, onClick } = props;
    const { onClick } = props;
    return (
        <div
            className={'slick-prev'}
            style={{
                position: 'absolute',
                border: '0px solid white',
                padding: 0,
                margin: 0,
                backgroundColor: 'transparent',
                fontSize: '30px',
                color: 'white',
                zIndex: 1,
                top: 'calc(50% - 50px)',
                width: 30,
                height: 30,
                cursor: 'pointer',
                left: 15,
            }}
            onClick={onClick}
        >
            <p>
                <img src={rightArrow} alt="" />
            </p>
        </div>
    );
}