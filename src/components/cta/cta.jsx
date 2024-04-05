import CV from "../../assets/cv1.pdf"

import { Link } from "react-router-dom";

export default function Cta(){
    return(
        <>
        <div className="flex gap-2 text-center justify-center mt-5">
            {/* then import it here */}
            <a href={CV} download className="text-center text-sky-300 btn ">Download cv</a>
            <a href='#contact' className='btn btn-primary text-black'>Let's Talk</a>
        </div>
        </>
    )
}