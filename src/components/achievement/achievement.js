import AVTR1 from "../../assets/mercy5.jpeg";
import "./achievement.css";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
   
    {
        avatar: AVTR1,
        time: '10 minutes ago',
        title: 'Virtual Internship with coreXtreme',
        post: 'During my virtual internship with Corextreme, I collaborated with a dynamic team on the development of the admin portal for the Padi App, a promotion and discount showcasing application'
    },
    {
        avatar: AVTR1,
        time: '10 minutes ago',
        title: 'Kumasi Hive Hackathon Success',
        post: 'In 2019, I had the privilege of participating in the Kumasi Hive Hackathon, where I showcased my skills and expertise alongside nine other talented teams. It was a highly competitive event, but Im proud to say that our team emerged as the Second Runner-up, demonstrating our dedication, creativity, and ability to collaborate effectively under pressure'
    },
    
];

const Achievement = () => {
    return (
        <section id='achievements'>
            <h5>WORK EXPERIENCE</h5>
            <h2>professional experience</h2>
            <Swiper
                className='container-achievement'
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {data.map(({ avatar, title, post, time }, index) => {
                    return (
                        <SwiperSlide key={index} className='Achievement'>
                            <div className='achievement-img'>
                                <img src={avatar} alt={`Avatar ${index}`} />
                            </div>
                            <h5 className='achievement-title'>{title}</h5>
                            <small className='achievement-note'>{post}</small>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
}

export default Achievement;
