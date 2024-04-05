import React, { useState, useEffect } from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';
import { IoLogoHtml5 } from "react-icons/io"
import { IoLogoReact } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

function Experience() {
    

    
    // Previous static frontend skills
    const previousFrontendSkills = [
        { name: 'HTML', level: 'Experienced' },
        { name: 'CSS', level: 'Intermediate' },
        { name: 'JavaScript', level: 'Experienced' },
        { name: 'React JS', level: 'Experienced' },
       
    ];

    // Previous static backend skills
    const previousBackendSkills = [
        { name: 'Node JS', level: 'Experienced' },
        { name: 'MongoDB', level: 'Intermediate' },
        { name: 'Python', level: 'Basic' }
    ];

    return (
        <section id='experience'>
            <h5>Skills I have</h5>
            <h2>My Experience</h2>

            <div className='container experience__container'>
                <div className='experience__frontend'>
                    <h3>Frontend Development</h3>
                    <div className='experience__content'>
                            <article  className='experience__details'>
                                <IoLogoHtml5 className='text-blue-300 experience__details-icon' />
                                <div>
                                    <h4>HTML</h4>
                                    <small className='text-light'>Experienced</small>
                                </div>
                            </article>

                            <article  className='experience__details'>
                                <IoLogoReact  className='text-pink-400  experience__details-icon' />
                                <div>
                                    <h4>React</h4>
                                    <small className='text-light '>Intermediate</small>
                                </div>
                            </article>

                            <article  className='experience__details'>
                                <IoLogoCss3 className=' text-blue-600 experience__details-icon ' />
                                <div>
                                    <h4>CSS</h4>
                                    <small className='text-light'>Intermediate</small>
                                </div>
                            </article>

                            <article  className='experience__details'>
                                <IoLogoJavascript className='text-yellow-400 experience__details-icon' />
                                <div>
                                    <h4>JavaScript</h4>
                                    <small className='text-light'>Basic</small>
                                </div>
                            </article>
                       

                       
                            
                       
                    </div>
                </div>

                <div className='experience__backend'>
                    <h3>Backend Development</h3>
                    <div className='experience__content'>
                       
                       
                            <article  className='experience__details'>
                                <FaNode className=' text-green-400 experience__details-icon' />
                                <div>
                                    <h4>Node JS</h4>
                                    <small className='text-light'>Basic</small>
                                </div>
                            </article>

                            <article  className='experience__details'>
                                <SiMongodb className='text-green-700 experience__details-icon' />
                                <div>
                                    <h4>MongoDB</h4>
                                    <small className='text-light'>Basic</small>
                                </div>
                            </article>

                          
                      

                       
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
