import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import './navbar.css';
import { IoHomeOutline } from "react-icons/io5";



const Navbar =()=>{
    return(
        <nav>
            <a href="#" className="active">home</a>
            <a href="#about">about</a>
            <a href="#skills">skills</a>
            <a href="#experience">experience</a>
            <a href="#projects">project</a>
            <a href="#achievements">achievement</a>
            <a href="#posts">post</a>
            <a href="#contact">contact</a>
        </nav>
    )
}
export default Navbar

//     return (
//         <div>
//             <nav>
//                 <HashLink to="#home" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>Home</HashLink>
//                 <HashLink to="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>About</HashLink>
//                 <HashLink to="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}>Skills</HashLink>
//                 <HashLink to="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>Experience</HashLink>
//                 <li><HashLink smooth to="#project" className="">Projects</HashLink></li>
//                 <li><HashLink smooth to="#post" className="">Posts</HashLink></li>
//                 <li><HashLink smooth to="#contact" className="">Contact</HashLink></li>
//                 <a href="/admin" className={activeNav === '#admin' ? 'active' : ''}>Profile</a>
//             </nav>
//         </div>
//     );
// }
