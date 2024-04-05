import { Link } from "react-router-dom"
import pro from '../../assets/portfolio1.jpg'
import pro2 from '../../assets/portfolio2.jpg'
import pro3 from '../../assets/portfolio3.jpg'
import pro4 from '../../assets/portfolio4.jpg'
import pro5 from '../../assets/portfolio5.png'
import pro6 from '../../assets/portfolio6.jpg'
import "./project.css"



export default function Projects (){
    return(
<>
<section id="projects">
    <h5>My Recent Projects</h5>
<h2 className="text-center font-bold text-3xl text-sky-300">Projects</h2>

<div className="container portfolio__container grid grid-cols-1 md:grid-cols-3">

  
<article className="portfolio__item">
    <div className="portfolio__item"></div>
    <div>
        <img src={pro6}></img>
    </div>
    <h3  className="text-sky-300  text-xl">Ecommerce landing Page</h3>
    <p>An e-commerce website for small businesses that offers a comprehensive digital platform tailored to meet the unique needs of the enterprise.  </p>
    <div className="portfolio__item-cta">
    <a href="https://github.com/mercykorkoressel/ATN-landing-page" className="btn"target="_blank">github</a>
    <a href="https://all-things-nk.vercel.app/" className="btn btn-primary text-black" target="_blank">Live Demo</a>

    </div>
  </article>
  
  <article className="portfolio__item">
    <div className="portfolio__item"></div>
    <div>
        <img src={pro4}></img>
    </div>
    <h3 className="text-sky-300  text-xl">Agro Ecommerce</h3>
    <p>An Agro ecommerce website provides a convenient platform for farmers and consumers to buy and sell agricultural products online</p>
    <div className="portfolio__item-cta">
    <a href="https://github.com/Jade-Alpha/Portfolio" className="btn"target="_blank">github</a>
    <a href="https://ecommerce-app-chi-ruddy.vercel.app/" className="btn btn-primary text-black" target="_blank">Live Demo</a>
    </div>


  </article>
  <article className="portfolio__item">
    <div className="portfolio__item"></div>
    <div>
        <img src={pro5}></img>
    </div>
    <h3 className="text-sky-300  text-xl">Movie TMDB</h3>
    <p>A comprehensive movie website offering a vast collection of films across genres, providing users with detailed information, trailers, and reviews. </p>
    <div className="portfolio__item-cta">
    <a href="https://github.com/Jade-Alpha/Portfolio" className="btn"target="_blank">github</a>
    <a href="https://movie-app-qtpz.vercel.app/" className="btn btn-primary text-black" target="_blank">Live Demo</a>
    </div>


  </article>

 
 
</div>
</section>

</>

    )
}