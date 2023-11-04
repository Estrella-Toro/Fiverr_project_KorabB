import { AboutMeSection } from '../../components/about-me-section/about-me-section.component'
import { Footer } from '../../components/footer/footer.component'
import { Hero } from '../../components/hero-section/hero.component'
import { MembershipsContainer } from '../../components/memberships-container/memberships-container.component'
import './home.styles.scss'
import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'



import { firebaseConfig } from '../../application-data/firebase-config';
import { initializeApp } from 'firebase/app';
import { getStorage, getDownloadURL, ref } from 'firebase/storage';
//@ts-ignore
const app = initializeApp(firebaseConfig);
const storage = getStorage();
const imageRefHero = ref(storage, '/images/HomepageFinalEditSM.webp');
const imageRefCircles = ref(storage, '/images/MiddleBalls.svg');
const imageRefBalls = ref(storage, '/images/Balls.png');
const imageRefAboutMe = ref(storage, '/images/AboutMFinalEditSM.webp');

const Home = () => {

    const [heroImageUrl, setHeroImageUrl] = useState('');
    const [circlesImageUrl, setCirclesImageUrl] = useState('');
    const [ballsImageUrl, setBallsImageUrl] = useState('');
    const [aboutMeImageUrl, setAboutMeImageUrl] = useState('');

    useEffect(() => {
        const getFirestoreImageUrl = async () => {
            const urlHero = await getDownloadURL(imageRefHero);
            const urlCircles = await getDownloadURL(imageRefCircles);
            const urlBalls = await getDownloadURL(imageRefBalls);
            const urlAboutMe = await getDownloadURL(imageRefAboutMe);
            setHeroImageUrl(urlHero);
            setCirclesImageUrl(urlCircles);
            setBallsImageUrl(urlBalls);
            setAboutMeImageUrl(urlAboutMe);
        }
        getFirestoreImageUrl();

    }, []);
    return (
        <>
            <Outlet />
            {heroImageUrl
                && circlesImageUrl
                && ballsImageUrl
                && aboutMeImageUrl
                ?
                <>
                    <Hero heroImageUrl={heroImageUrl}
                        circlesImageUrl={circlesImageUrl}
                        ballsImageUrl={ballsImageUrl}
                    />
                    <AboutMeSection aboutMeImageUrl={aboutMeImageUrl} />
                    <MembershipsContainer />
                    <Footer />
                </>
                : ''
            }
        </>
    )
}

export default Home