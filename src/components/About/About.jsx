import api from './icon-api.svg'
import onB from './icon-onboarding.svg'
import online from './icon-online.svg'
import budgeting from './icon-budgeting.svg'
import './About.css'
export function About(props){
    return(
        <article ref={props.aboutRef} className='about'>
            <p className="head">Why choose Digitalbank?</p>
            <p>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
            <section className='grids'>
                <div>
                    <img src={online} alt='bank online image'/>
                    <p className='minHead'>Online Banking</p>
                    <p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
                </div>
                <div>
                    <img src={budgeting} alt='budgeting image'/>
                    <p className='minHead'>Simple Budgeting</p>
                    <p>See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.</p>
                </div>
                <div>
                    <img src={onB} alt='onBoarding image'/>
                    <p className='minHead'>Fast Onboarding</p>
                    <p>We don’t do branches. Open your account in minutes online and start taking control of your finances right away.</p>
                </div>
                <div>
                    <img src={api} alt='API image'/>
                    <p className='minHead'>Open API</p>
                    <p>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
                </div>
            </section>
        </article>
    )
}