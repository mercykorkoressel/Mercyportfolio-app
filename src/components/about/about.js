import React from 'react';
import './about.css';
import image from '../../assets/mercy5.jpeg'
import { FaAward } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';



function About(props) {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>


            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={image} alt='about image' />
                    </div>
                </div>

                <div className='about__content'>
                    <div className='about__cards' >
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>3+ months learning Experience</small>
                        </article>

                        <article className='about__card'>
                            <FiUser className='about__icon' />
                            <h5>Clients</h5>
                            <small>3+ Clients Worldwide</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>3+ completed Projects</small>
                        </article>
                    </div>
                    <p>
                    I am a passionate web development enthusiast currently pursuing a web development course. With a solid
background in social media and digital marketing, I bring a unique blend of skills to the table. My experience in
social media and digital marketing has equipped me with valuable insights into user engagement, content
strategy, and online branding. I am committed to leveraging these skills to create compelling and user-friendly
websites. I am eager to continue learning and exploring new opportunities in the field of web development, with
the goal of making a meaningful impact through my work.

                    </p>
                    <a href='#contact' className='btn btn-primary text-black'>Let's Talk</a>
                </div>
            </div>

        </section>
    );
}

export default About;