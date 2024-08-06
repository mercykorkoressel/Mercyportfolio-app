import { Link } from 'react-router-dom';
import pic from '../../assets/mercy1.png'
import Nav from "../navbar/navbar";
import Cta from '../cta/cta';
import SocialHeader from '../social/social';
import "./header.css"


export default function Header() {
    return (
        <>
            <section id='#'>
               
                <header    class="rounded-lg min-w-[100px] w-full h-auto md:w-auto md:h-auto" className="text-center justify-center px-5">
                    <div className="text-center px-10">
                        <h5 className="px-5 mt-20 text-2xl">Hello I'm</h5>
                        <h1 className="text-3xl font-bold">Mercy Korkor Essel</h1>
                        <h5 className="text-light text-2xl">A Web Developer</h5>
                        <Cta />
                        <div className="grid grid-cols-1 md:grid-cols-3">
                            <SocialHeader />
                            <div className=" overflow-hidden  m-auto rounded-t-lg">
                                <img src={pic} className=" me h-96 w-80 rounded-es-3xl " alt="" />
                            </div>
                            <button className="rotate-90 text-sky-300">
                                <a href="#about">Scroll down</a>
                            </button>

                        </div>
                    </div>

                </header>
            </section>
        </>
    )
}