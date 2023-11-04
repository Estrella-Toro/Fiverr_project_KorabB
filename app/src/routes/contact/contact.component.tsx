import './contact.styles.scss'
import { Outlet } from 'react-router-dom'
import { ContactForm } from '../../components/contact-form/contact-form.component'
// import { Footer } from '../../components/footer/footer.component'

export const Contact = () => {
    return (

        <>
            <Outlet />
            <ContactForm />
        </>
    )
}

