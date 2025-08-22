import './Intro.css'
import desktop from './bg-intro-desktop.svg'
import mobile from './bg-intro-mobile.svg'
import mockup from './image-mockups.png'
export function Intro(props){
    return(
        <article ref={props.homeRef} className='intro'>
            <section>
                <p className='head'>Next generation digital banking</p>
                <p>Take your financial life online. Your Digitalbank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                <button>Request Invite</button>
            </section>
            <section>
                <img className='desktop' src={desktop} alt='illustration'/>
                <img className='mobile' src={mobile} alt = 'illustration'/>
                <img className='mock' src={mockup} alt='mockup'/>
            </section>
        </article>
    )
}