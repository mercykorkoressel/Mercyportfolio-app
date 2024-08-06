import { useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import  "./contact.css";

export default function Contact() {
    const [test, SetTest] = useState('');

    const handleOnClick = () => {
        // speck ({text:text})
    };

    return (
        <>
            <section id="contact" className="ml-5"> {/* Apply ml-5 class for 5% left margin */}
                <h3 className="text-center">Get In Touch</h3>
                <h1 className="text-center font-bold text-3xl text-sky-300">Contact Me</h1>

                <html>
  <head>
  
  <script src="https://cdn.tailwindcss.com"></script>
</head>
  <body>
<div class="my-6">
            <div className="contact grid sm:grid-cols-2 items-center  gap-16 p-8 mx-auto max-w-4xl  shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md text-black-950 font-[sans-serif]">
                <div>
                    <h1 class="text-3xl text-black-500 font-extrabold">Let's Talk</h1>
                    <p class="text-sm text-gray-400 mt-3">Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project  and provide help.</p>
                    <div class="mt-12">
                        <h2 class="text-lg font-extrabold">Email</h2>
                        <ul class="mt-3">
                            <li class="flex items-center">
                                <div class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff'
                                        viewBox="0 0 479.058 479.058">
                                        <path
                                            d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                            data-original="#000000" />
                                    </svg>
                                </div>
                                <a target="blank" onClick={() => window.location = 'mailto:yourmail@domain.com'} class="text-[#007bff] text-sm ml-3">
                                    <small class="block">Mail</small>
                                    <strong>Email Me</strong>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="mt-12">
                        <h2 class="text-lg font-extrabold">Socials</h2>
                        <ul class="flex mt-3 space-x-4">
                            <li class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href="https://facebook.com">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff'
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75zm.75-3.999h2.518a.75.75 0 0 0 .75-.75V6.037c0-2.883 1.545-4.536 4.24-4.536.878 0 1.686.043 2.242.087v2.149c-.402.205-3.976-.884-3.976 2.697v2.755c0 .414.336.75.75.75h2.786l-.312 2.5h-2.474a.75.75 0 0 0-.75.75V22.5h-2.505v-9.312a.75.75 0 0 0-.75-.75H7.562z"
                                            data-original="#000000" />
                                    </svg>
                                </a>
                            </li>
                            <li class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href="javascript:void(0)">
                                   <FaWhatsapp className='text-green-700 h-7 w-7' />
                                        
                                    
                                </a>
                            </li>
                            <li class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href="javascript:void(0)">
                                   
                                <FaLinkedin className='text-blue-600 h-7 w-7' />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
              
                <form  action='https://formspree.io/f/mqkrwvrr' class="ml-auo space-y-4">
                    <input type='text' placeholder='Name'
                        class="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" />
                    <input type='email' placeholder='Email'
                        class="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" />
                    <input type='text' placeholder='Subject'
                        class="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" />
                    <textarea placeholder='Message' rows="6"
                        class="w-full rounded-md px-4 border text-sm pt-2.5 outline-[#007bff]"></textarea>
                    <button type='button'
                        class="text-white bg-[#007bff] hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-2.5 w-full">Send</button>
                </form>
            </div>
        </div>
    
  </body>
</html>
            </section>
        </>
    );
}
