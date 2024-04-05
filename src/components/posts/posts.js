import React from 'react';
import blog from "../../assets/tech.jpg";
import "./posts.css";



    
const Posts = () => {
    
    

    return (
        <section id='posts'>
            <h5>Posts</h5>
            <h2 className='text-center font-bold text-3xl text-sky-300'>Recent Blog Post</h2>
            <section className="featured">
                <div className="container featured_container">
                    <div className="post_thumbnail">
                        <img src={blog} alt="Featured Post Thumbnail" />
                    </div>

                    <div className="post_info">
                        <a href="#" className="category_btn">FEATURED</a>
                        <h2 className="post_title"><a href="post.html">WOMEN IN TECH</a></h2>
                        <small className="post_body">Efforts to promote diversity and inclusion in the tech industry continue to grow, with initiatives focusing on education, mentorship, and advocacy. These initiatives aim to empower women to pursue careers in technology, provide support and resources for their professional development, and address systemic issues such as bias and discrimination in the workplace.

Despite progress, there is still much work to be done to achieve gender equality in the tech sector. By championing diversity, fostering inclusive environments, and celebrating the achievements of women in tech, we can create a more equitable and innovative future for the industry..</small>
                       
                        <div className="post_author-info"></div>
                        <small>june 3rd 2022 -7-23</small>
                    </div>
                </div>
            </section>

           
        </section>
    );
}

export default Posts;
