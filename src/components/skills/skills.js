import React from 'react';
import { BiCheck } from 'react-icons/bi';


const Skills = () => {
    return (
        <section id='skills'>
        <div className="mt-4 mb-2">
        <h5 className="text-center   text-gray-400">My Recent Skills</h5>
<h2 className="text-center font-bold text-3xl text-sky-300">Skills</h2>
            <div className="grid grid-cols-2 gap-8 max-w-7xl mx-auto px-4 py-8">
                {/* Front-end Development */}
                <article className="bg-gray-900 rounded-lg border border-blue-500 transition duration-400 ease-in-out hover:bg-transparent hover:border-blue-400">
                    <div className="bg-blue-500 py-4 rounded-t-lg">
                        <h2 className="text-white text-lg font-semibold text-center">Front-end Development</h2>
                    </div>
                    <ul className="p-4">
                        <li className="flex items-start mb-4">
                            <BiCheck className="text-blue-500 mt-1 mr-2" />
                            <div>
                                <h3 className="text-white text-lg font-semibold">HTML5/CSS3</h3>
                                <p className="text-gray-300 text-sm">Proficient in creating well-structured, semantically correct HTML5 markup and styling with CSS3 for responsive and visually appealing web interfaces.</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <BiCheck className="text-blue-500 mt-1 mr-2" />
                            <div>
                                <h3 className="text-white text-lg font-semibold">JavaScript (ES6+)</h3>
                                <p className="text-gray-300 text-sm">Experienced in writing modular and efficient JavaScript code, utilizing ES6+ features for interactive web applications and enhancing user experience.</p>
                            </div>
                        </li>
                    </ul>
                </article>

                {/* Back-end Development */}
                <article className="bg-gray-900 rounded-lg border border-blue-500 transition duration-400 ease-in-out hover:bg-transparent hover:border-blue-400">
                    <div className="bg-blue-500 py-4 rounded-t-lg">
                        <h2 className="text-white text-lg font-semibold text-center">Back-end Development</h2>
                    </div>
                    <ul className="p-4">
                        <li className="flex items-start mb-4">
                            <BiCheck className="text-blue-500 mt-1 mr-2" />
                            <div>
                                <h3 className="text-white text-lg font-semibold">Node.js</h3>
                                <p className="text-gray-300 text-sm">Proficient in building scalable server-side applications using Node.js, with knowledge of frameworks such as Express.js.</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <BiCheck className="text-blue-500 mt-1 mr-2" />
                            <div>
                                <h3 className="text-white text-lg font-semibold">Database Management</h3>
                                <p className="text-gray-300 text-sm">Skilled in designing and optimizing databases using relational databases like MySQL and NoSQL databases like MongoDB.</p>
                            </div>
                        </li>
                    </ul>
                </article>

                {/* UI/UX Design */}
                <article className="bg-gray-900 rounded-lg border border-blue-500 transition duration-400 ease-in-out hover:bg-transparent hover:border-blue-400">
                    <div className="bg-blue-500 py-4 rounded-t-lg">
                        <h2 className="text-white text-lg font-semibold text-center">Digital Marketing</h2>
                    </div>
                    <ul className="p-4">
                        <li className="flex items-start mb-4">
                            <BiCheck className="text-blue-500 mt-1 mr-2" />
                            <div>
                                <h3 className="text-white text-lg font-semibold">Canva</h3>
                                <p className="text-gray-300 text-sm">Proficient in crafting visually stunning designs using Canva, I specialize in creating captivating graphics, presentations, and marketing materials.</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <BiCheck className="text-blue-500 mt-1 mr-2" />
                            <div>
                                <h3 className="text-white text-lg font-semibold">Responsive Design</h3>
                                <p className="text-gray-300 text-sm"> I excel in crafting strategic content and managing online presence across various social media platforms. </p>
                            </div>
                        </li>
                    </ul>
                </article>

                {/* DevOps */}
                <article className="bg-gray-900 rounded-lg border border-blue-500 transition duration-400 ease-in-out hover:bg-transparent hover:border-blue-400">
                    <div className="bg-blue-500 py-4 rounded-t-lg">
                        <h2 className="text-white text-lg font-semibold text-center">Soft Skills</h2>
                    </div>
                    <ul className="p-4">
                        <li className="flex items-start mb-4">
                            <BiCheck className="text-blue-500 mt-1 mr-2" />
                            <div>
                                <h3 className="text-white text-lg font-semibold">creativity</h3>
                                <p className="text-gray-300 text-sm"> I excel at brainstorming creative solutions, designing visually appealing content, and developing original concepts.</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <BiCheck className="text-blue-500 mt-1 mr-2" />
                            <div>
                                <h3 className="text-white text-lg font-semibold">collaboration</h3>
                                <p className="text-gray-300 text-sm"> I actively listen to others' ideas, value diverse perspectives, and communicate openly and respectfully. I enjoy working in team settings, leveraging each team member's strengths.</p>
                            </div>
                        </li>
                    </ul>
                </article>
            </div>
            </div>
        </section>
    );
}

export default Skills;

