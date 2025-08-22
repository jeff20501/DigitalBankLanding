import './Page.css'
import { Header } from '../components/Header/Header'
import { Intro } from '../components/Intro/Intro'
import { About } from '../components/About/About'
import { Blog } from '../components/Blog/Blog'
import { Footter } from '../components/Footer/Footer'
import { useRef } from 'react'
export function Page(){
    const homeRef = useRef(null)
    const aboutRef = useRef(null)
    const contactRef = useRef(null)
    const blogRef = useRef(null)
    const careersRef = useRef(null)
    const requstRef =useRef(null)
    return(
        <>
            <Header homeRef={homeRef} aboutRef={aboutRef} contactRef={contactRef} blogRef={blogRef} careersRef={careersRef} requstRef={requstRef}/>
            <Intro homeRef={homeRef} requstRef={requstRef}/>
            <About aboutRef={aboutRef}/>
            <Blog blogRef={blogRef}/>
            <Footter contactRef={contactRef} requstRef={requstRef}/>
        </>
    )
}