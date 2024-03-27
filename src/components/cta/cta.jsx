// will import the resume in pdf

import { Link } from "react-router-dom";

export default function Cta(){
    return(
        <>
        <div className="flex gap-2 text-center justify-center mt-5">
            {/* then import it here */}
            <button className="" ><Link to="" download className="text-center text-sky-300 bg-gray-500 px-3 py-2 rounded-2xl ">Download Cv</Link></button>
            <button className="text-center text-black bg-sky-300 px-2 py-1 rounded-2xl"><Link to="/contact">Let's Talk</Link></button>
        </div>
        </>
    )
}