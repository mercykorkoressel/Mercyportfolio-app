import React, { useState } from 'react';
import "./admin.css";
import avatar from "../assets/apo.jpg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { TfiWrite } from "react-icons/tfi";
import { MdManageAccounts } from "react-icons/md";
import { SiManageiq } from "react-icons/si";
import { MdManageHistory } from "react-icons/md";
import NewPostForm from "./addposts.js";
import NewAchievementForm from "./addachievement.js";
import NewExperienceForm from "./addexperience.js";
import { MdHome } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function Admin() {
    const [activeForm, setActiveForm] = useState(null);
    const [successMessage, setSuccessMessage] = useState("");

    const handleAddAchievement = () => {
        setSuccessMessage("Achievement added successfully!");
        setTimeout(() => {
            setSuccessMessage("");
        }, 3000);
    };

    const handleAddExperience = () => {
        setSuccessMessage("Experience added successfully!");
        setTimeout(() => {
            setSuccessMessage("");
        }, 3000);
    };

    const handleAddNewPost = () => {
        setSuccessMessage("Post added successfully!");
        setTimeout(() => {
            setSuccessMessage("");
        }, 3000);
    };

    return (
        <>
            <div className="fixed-header">
                <div className="header-content">
                    <div className="brand">Admin<span className="panel">Panel</span></div>
                    <div className="header-icons">
                        <button className="material-icons-outlined header-icon home-btn" onClick={() => { /* Handle navigation to home page */ }}>home</button>
                        <span className="material-icons-outlined header-icon">search</span>
                        <span className="material-icons-outlined header-icon"> <IoMdNotificationsOutline /></span>
                        <img className="avatar" src={avatar} alt="avatar"></img>
                    </div>
                </div>
            </div>
            <section className="dashboard">
                <div className="container dashboard_container">
                    <aside>
                        <ul>
                            <li>
                                <button onClick={() => setActiveForm('managePosts')} className={activeForm === 'managePosts' ? 'active' : ''}>
                                    <TfiWrite />
                                    <h5>Manage posts</h5>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setActiveForm('newPost')}>
                                    <MdManageAccounts />
                                    <h5>Add posts</h5>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setActiveForm('newAchievement')}>
                                    <SiManageiq />
                                    <h5>Add New Achievement</h5>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setActiveForm('newExperience')}>
                                    <MdManageHistory />
                                    <h5>Add New Experiences</h5>
                                </button>
                            </li>

                            <Link to="/" className="text-lg cursor-pointer flex items-center">
                                <MdHome className="mr-1" />
                                HOME
                            </Link>
                        </ul>
                    </aside>
                    <main>
                        <div className="form-container">
                            {activeForm === 'managePosts' && (
                                <div className="manage-posts-form">
                                    {/* Add your manage posts form UI here */}
                                </div>
                            )}
                            {activeForm === 'newPost' && <NewPostForm onAddNewPost={handleAddNewPost} />}
                            {activeForm === 'newAchievement' && <NewAchievementForm onAddAchievement={handleAddAchievement} />}
                            {activeForm === 'newExperience' && <NewExperienceForm onAddExperience={handleAddExperience} />}
                        </div>
                        <div className="board">
                            <div className="flex flex-row">
                                <div className="card bg-red-200 w-7/12 mr-2">
                                    <div className="card-content p-6">
                                        <p className="text-5xl text-indigo-900">Welcome <br /><strong>Lorem Ipsum</strong></p>
                                        <span className="badge bg-red-300 text-xl text-white mt-12"><strong>01:51</strong></span>
                                    </div>
                                </div>
                                <div className="card bg-orange-200 w-5/12 ml-2">
                                    <div className="card-content p-6">
                                        <p className="text-5xl text-indigo-900">Inbox <br /><strong>23</strong></p>
                                        <a href="" className="badge bg-orange-300 text-xl text-white underline hover:no-underline mt-12"><strong>See messages</strong></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </section>
            {successMessage && (
                <div className="success-message">
                    {successMessage}
                </div>
            )}
        </>
    );
}
