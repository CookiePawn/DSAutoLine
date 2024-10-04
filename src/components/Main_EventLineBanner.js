import React, { useEffect, useState, useRef } from "react";
import '../styles/Main_EventBanner.css';
import Loading from '../components/Loading';
import { eventAxios } from '../services/Request';

const Main_EventLineBanner = (props) => {
    const [eventList, setEventList] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await eventAxios(0, 0);
            setEventList(response);
        };
        fetchData();
    }, []);

    const handleNext = () => {
        if (eventList && currentIndex == eventList.length - 3) {
            setCurrentIndex(0);
        } else if (eventList && currentIndex < eventList.length - 3) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (eventList && currentIndex == 0) {
            setCurrentIndex(eventList.length - 3);
        } else if (eventList && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    if (!eventList) {
        return <Loading />;
    }

    return (
        <>
            <section className="eventLineBannerSection">
                <video muted autoPlay loop>
                    <source src={require('../assets/img/event/event_line001.mp4')} type="video/mp4" />
                </video>
                <button onClick={handlePrev}></button>
                <button onClick={handleNext}></button>
                <span>
                    <span
                        ref={containerRef}
                        style={{
                            transform: `translateX(-${currentIndex * 350}px)`,
                            transition: "transform 0.5s ease-in-out",
                        }}
                    >
                        {eventList.map((item, idx) => (
                            <img
                                key={idx}
                                src={`${process.env.REACT_APP_IMG_URL}/${item.img}.png`}
                                onClick={() => (window.location.href = `/event/${item.event_num}`)}
                                alt={`Event ${idx}`}
                            />
                        ))}
                    </span>
                </span>
            </section>
        </>
    );
};

export default Main_EventLineBanner;
