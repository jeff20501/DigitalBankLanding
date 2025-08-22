import plane from './image-plane.jpg'
import currency  from './image-currency.jpg'
import conf from './image-confetti.jpg'
import resturant from './image-restaurant.jpg'
import './Blog.css'
export function Blog(props){
    return(
        <article ref={props.blogRef} className='articles'>
            <p className="head">Latest Articles</p>
            <section className="grids">
                <div>
                    <img src={currency} alt='currency'/>
                    <p>By Claire Robinson</p>
                    <p className='minH'>Receive money in any currency with no fees</p>
                    <p>The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …</p>
                </div>

                <div>
                    <img src={plane} alt='plane'/>
                    <p>By Wilson Hutton</p>
                    <p className='minH'>Take your Digitalbank card wherever you go</p>
                    <p>e want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …</p>
                </div>

                <div>
                    <img src={resturant} alt='resturant'/>
                    <p>By Wilson Hutton</p>
                    <p className='minH'>Treat yourself without worrying about money</p>
                    <p>Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …</p>
                </div>

                <div>
                    <img src={conf} alt='conf'/>
                    <p>By Claire Robinson</p>
                    <p className='minH'>Our invite-only Beta accounts are now live!</p>
                    <p>After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...</p>
                </div>
            </section>
        </article>
    )
}