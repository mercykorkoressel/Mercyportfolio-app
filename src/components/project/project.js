import { Link } from "react-router-dom"
import pro from '../../assets/portfolio1.jpg'


export default function Projects (){
    return(
<>
<section id="project">
<h1 className="text-center font-bold text-2xl">Projects</h1>

<div className="grid grid-cols-1 md:grid-cols-3 p-10 text-center gap-10">
    <div className="shadow-2xl bg-slate-950 p-10">
        <img src={pro} className="w-32" />
        <h2>Name of project</h2>
        <button className="bg-transparent text-sky-300 border-solid border-2 border-sky-200 rounded p-1"><Link to="https://github.com/lyril-sly/Landing-page.git" target="_blank">Github</Link></button>
        <button className="bg-sky-300 text-black p-1"><Link to="">Live Demo</Link></button>
    </div>
    <div className="shadow-2xl text-center bg-slate-950 p-10">
        <img src={pro} className="w-32 text-center"/>
        <h2>Name of Project</h2>
        <button className="bg-transparent text-sky-300 border-solid border-2 border-sky-200 rounded p-1"><Link to="" target="_blank">Github</Link></button>
        <button className="bg-sky-300 text-black p-1"><Link to="">Live Demo</Link></button>
    </div>
    <div className="shadow-2xl bg-slate-950 p-10">
    <img src={pro} className="w-32" />
        <h2>Name of Project</h2>
        <button className="bg-transparent text-sky-300 border-solid border-2 border-sky-200 rounded p-1"><Link to="" target="_blank">Github</Link></button>
        <button className="bg-sky-300 text-black p-1"> <Link to="">Live Demo</Link></button>
    </div >
    <div className="shadow-2xl p-10 bg-slate-950"> 
    <img src={pro} className="w-32" />
        <h2>Name of Project</h2>
        <button className="bg-transparent text-sky-300 border-solid border-2 border-sky-200 rounded p-1"><Link to="" target="_blank">Github</Link></button>
        <button className="bg-sky-300 text-black p-1"><Link to="">Live Demo</Link></button>
    </div>
    <div className="shadow-2xl p-10 bg-slate-950">
    <img src={pro} className="w-32" />
        <h2>Name of Project</h2>
        <div className="p-1 text-center">
        <button className="bg-transparent text-sky-300 border-solid border-2 border-sky-200 rounded p-1"><Link to="" target="_blank">Github</Link></button>
        <button className="bg-sky-300 text-black p-1"><Link to="">Live Demo</Link></button>
        </div>
    </div>
    <div className="shadow-2xl p-10 bg-slate-950">
    <img src={pro} className="w-32" />
        <h2>Name of Project</h2>
        <button className="bg-transparent text-sky-300 border-solid border-2 border-sky-200 rounded p-1"><Link to="" target="_blank">Github</Link></button>
        <button className="bg-sky-300 text-black p-1"><Link to="">Live Demo</Link></button>
    </div>
</div>
</section>

</>

    )
}