import darkLight from './images/logo-dark.svg'
import './Header.css'
import {useState} from 'react'
import clsx from 'clsx'
export function Header(props){
     //state
     const[nav, setNav] = useState(false)
    
    //function
    const toggleNav=()=>{
        setNav(prevNav=>!prevNav)
    }
    
    //clsx classname
    const ClassNav = clsx('nav', 
        nav&&'showNav',
        !nav&&'hidden'
    )

    const ClassHam = clsx('hamburger',
        nav&&'showNav',
        !nav&&'hidden'
    )

    const overlay = clsx('overlay',
        nav?"shown":null
    )

    console.log(overlay)
    return(
        <article>
            <header>
                <img src={darkLight} alt='bank logo'/>
                <ul className={ClassNav}>
                    <li onClick={()=>{
                            props.homeRef.current?.scrollIntoView({behavior: "smooth"})
                            nav&&toggleNav()
                       } } >Home</li>
                            
                    <li onClick={()=>{
                            props.aboutRef.current?.scrollIntoView({behavior: "smooth"})
                            nav&&toggleNav()
                       } }>About</li>
                            
                    <li onClick={()=>{
                            props.contactRef.current?.scrollIntoView({behavior: "smooth"})
                            nav&&toggleNav()
                        }}>Contact</li>
                            
                    <li onClick={()=>{
                            props.blogRef.current?.scrollIntoView({behavior: "smooth"})
                            nav&&toggleNav()
                      }  }>Blog</li>
                            
                    <li onClick={()=>{
                            props.careersRef.current?.scrollIntoView({behavior: "smooth"})
                            nav&&toggleNav()
                        }}>Careers</li>
                            
                </ul>
                <div onClick={toggleNav} className={ClassHam}>
                    <div className='bar'></div>
                    <div className='bar'></div>
                    <div className='bar'></div>
                </div>
                <button onClick={()=>props.requstRef.current?.scrollIntoView({behavior: "smooth"})}>Request Invite</button>                
            </header>
            {nav?<div className={overlay}></div>:null}
        </article>       
    )
}