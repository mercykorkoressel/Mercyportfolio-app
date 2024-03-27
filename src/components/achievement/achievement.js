import AVTR1 from "../../assets/apo.jpg";
import "./achievement.css";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
    {
        avatar: AVTR1,
        title: "udemy certificate",
        time: '10 minutes ago',
        post: 'loremConsectetur excepteur non eu excepteur sunt voluptate ullamco duis ea. Officia esse occaecat dolore nostrud anim ad elit irure cupidatat mollit commodo enim. Laboris sint dolore ea anim qui nostrud culpa magna et excepteur quis. Do officia adipisicing non nostrud laborum id culpa sunt deserunt ea magna. Qui ut aliqua enim sunt officia. Consequat veniam consectetur et sint tempor commodo deserunt do aliquip velit. Nulla duis ut ea ad Lorem commodo ut laboris sit aliquip adipisicing Lorem.'
    },
    {
        avatar: AVTR1,
        time: '10 minutes ago',
        title: 'Second achievement',
        post: 'loremConsectetur excepteur non eu excepteur sunt voluptate ullamco duis ea. Officia esse occaecat dolore nostrud anim ad elit irure cupidatat mollit commodo enim. Laboris sint dolore ea anim qui nostrud culpa magna et excepteur quis. Do officia adipisicing non nostrud laborum id culpa sunt deserunt ea magna. Qui ut aliqua enim sunt officia. Consequat veniam consectetur et sint tempor commodo deserunt do aliquip velit. Nulla duis ut ea ad Lorem commodo ut laboris sit aliquip adipisicing Lorem'
    },
    {
        avatar: AVTR1,
        time: '10 minutes ago',
        title: 'Third achievement',
        post: 'loremConsectetur excepteur non eu excepteur sunt voluptate ullamco duis ea. Officia esse occaecat dolore nostrud anim ad elit irure cupidatat mollit commodo enim. Laboris sint dolore ea anim qui nostrud culpa magna et excepteur quis. Do officia adipisicing non nostrud laborum id culpa sunt deserunt ea magna. Qui ut aliqua enim sunt officia. Consequat veniam consectetur et sint tempor commodo deserunt do aliquip velit. Nulla duis ut ea ad Lorem commodo ut laboris sit aliquip adipisicing Lorem'
    },
    {
        avatar: AVTR1,
        time: '10 minutes ago',
        title: 'Fourth achievement',
        post: 'loremConsectetur excepteur non eu excepteur sunt voluptate ullamco duis ea. Officia esse occaecat dolore nostrud anim ad elit irure cupidatat mollit commodo enim. Laboris sint dolore ea anim qui nostrud culpa magna et excepteur quis. Do officia adipisicing non nostrud laborum id culpa sunt deserunt ea magna. Qui ut aliqua enim sunt officia. Consequat veniam consectetur et sint tempor commodo deserunt do aliquip velit. Nulla duis ut ea ad Lorem commodo ut laboris sit aliquip adipisicing Lorem'
    }
];

const Achievement = () => {
    return (
        <section id='achievements'>
            <h5>My Achievements</h5>
            <h2>Achievements</h2>
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
                            <small className='achievement-time'>{time}</small>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
}

export default Achievement;
