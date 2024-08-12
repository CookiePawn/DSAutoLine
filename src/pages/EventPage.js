import React, { useState } from 'react';
import Footer from "../components/Footer";
import GNB from "../components/GNB";
import '../styles/EventPage.css';
import { EventCardlist } from '../components/Cards';

const EventPage = (props) => {
    const [selectedButton, setSelectedButton] = useState(0);

    const nowEvent = [
        { name: '이벤트 1', period: '2024.07.01 ~ 2024.07.31', imgSrc: '/path/to/image1.jpg' },
        { name: '이벤트 2', period: '2024.08.01 ~ 2024.08.15', imgSrc: '/path/to/image2.jpg' },
        { name: '이벤트 3', period: '2024.08.01 ~ 2024.08.15', imgSrc: '/path/to/image2.jpg' },
        { name: '이벤트 4', period: '2024.08.01 ~ 2024.08.15', imgSrc: '/path/to/image2.jpg' },
        { name: '이벤트 5', period: '2024.08.01 ~ 2024.08.15', imgSrc: '/path/to/image2.jpg' },
        { name: '이벤트 6', period: '2024.08.01 ~ 2024.08.15', imgSrc: '/path/to/image2.jpg' },
        { name: '이벤트 7', period: '2024.08.01 ~ 2024.08.15', imgSrc: '/path/to/image2.jpg' },
        { name: '이벤트 8', period: '2024.08.01 ~ 2024.08.15', imgSrc: '/path/to/image2.jpg' },
        { name: '이벤트 9', period: '2024.08.01 ~ 2024.08.15', imgSrc: '/path/to/image2.jpg' },
        { name: '이벤트 10', period: '2024.08.01 ~ 2024.08.15', imgSrc: '/path/to/image2.jpg' },
        { name: '이벤트 11', period: '2024.08.01 ~ 2024.08.15', imgSrc: '/path/to/image2.jpg' },
        { name: '이벤트 12', period: '2024.08.01 ~ 2024.08.15', imgSrc: '/path/to/image2.jpg' },
        { name: '이벤트 13', period: '2024.08.01 ~ 2024.08.15', imgSrc: '/path/to/image2.jpg' },
    ];

    const endedEvents = [
        { name: '(종)이벤트 1', period: '2024.07.01 ~ 2024.07.31', imgSrc: '/path/to/image1.jpg' },
        { name: '(종)이벤트 2', period: '2024.08.01 ~ 2024.08.15', imgSrc: '/path/to/image2.jpg' },
        { name: '(종)이벤트 3', period: '2024.08.01 ~ 2024.08.15', imgSrc: '/path/to/image2.jpg' },
        { name: '(종)이벤트 4', period: '2024.08.01 ~ 2024.08.15', imgSrc: '/path/to/image2.jpg' },
        { name: '(종)이벤트 5', period: '2024.08.01 ~ 2024.08.15', imgSrc: '/path/to/image2.jpg' },
        
    ];

    const getEvents = () => {
        return selectedButton === 0 ? nowEvent : endedEvents;
    };

    const handleButtonClick = (buttonIndex) => {
        setSelectedButton(buttonIndex);
    };

    return (
        <>
            <GNB stat={true} page={'이벤트/프로모션'} />
            <div className="eventTitleSection">
                <h1>이벤트/프로모션</h1>
                <p>더 많은 혜택과 함께 하세요</p>
            </div>
            <div className="eventButtonSection">
                <button
                    onClick={() => handleButtonClick(0)}
                    className={`eventButton ${selectedButton === 0 ? 'selected' : ''}`}
                >
                    진행중인 이벤트
                </button>
                <button
                    onClick={() => handleButtonClick(1)}
                    className={`eventButton ${selectedButton === 1 ? 'selected' : ''}`}
                >
                    종료된 이벤트
                </button>
            </div>
            <div className="eventpageSection">
                <div className='eventList'>
                    {getEvents().map((item, idx) => (
                        <EventCardlist key={idx} item={item} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default EventPage;
