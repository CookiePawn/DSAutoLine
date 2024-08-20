import React, { useState } from 'react';
import Footer from "../components/Footer";
import GNB from "../components/GNB";
import '../styles/EventPage.css';
import { EventCardlist } from '../components/Cards';
import FastFAQSticky from '../components/FastFAQSticky';






export const nowEvent = [
    { id:1, name: '이벤트 1', period: '2024.07.01 ~ 2024.07.31', imgSrc: '/path/to/image1.jpg' },
    { id:2, name: '이벤트 2', period: '2024.08.01 ~ 2024.08.15', imgSrc: '/path/to/image2.jpg' },
    { id:3, name: '이벤트 3', period: '2024.09.01 ~ 2024.09.15', imgSrc: '/path/to/image2.jpg' },
    { id:4, name: '이벤트 4', period: '2024.10.01 ~ 2024.10.15', imgSrc: '/path/to/image2.jpg' },
    { id:5, name: '이벤트 5', period: '2024.11.01 ~ 2024.11.15', imgSrc: '/path/to/image2.jpg' },
    { id:6, name: '이벤트 6', period: '2024.12.01 ~ 2024.12.15', imgSrc: '/path/to/image2.jpg' },
    { id:7, name: '이벤트 7', period: '2025.01.01 ~ 2025.01.15', imgSrc: '/path/to/image2.jpg' },
    { id:8, name: '이벤트 8', period: '2025.02.01 ~ 2025.02.15', imgSrc: '/path/to/image2.jpg' },
    { id:9, name: '이벤트 9', period: '2025.03.01 ~ 2025.03.15', imgSrc: '/path/to/image2.jpg' },
    { id:10, name: '이벤트 10', period: '2025.04.01 ~ 2025.04.15', imgSrc: '/path/to/image2.jpg' },
    { id:11, name: '이벤트 11', period: '2025.05.01 ~ 2025.05.15', imgSrc: '/path/to/image2.jpg' },
    { id:12, name: '이벤트 12', period: '2025.06.01 ~ 2025.06.15', imgSrc: '/path/to/image2.jpg' },
    { id:13, name: '이벤트 13', period: '2025.07.01 ~ 2025.07.15', imgSrc: '/path/to/image2.jpg' },
];

export const endedEvents = [
    { id:'end1', name: '(종)이벤트 1', period: '2024.07.01 ~ 2024.07.31', imgSrc: '/path/to/image1.jpg' },
    { id:'end2', name: '(종)이벤트 2', period: '2024.08.01 ~ 2024.08.15', imgSrc: '/path/to/image2.jpg' },
    { id:'end3', name: '(종)이벤트 3', period: '2024.09.01 ~ 2024.09.15', imgSrc: '/path/to/image2.jpg' },
    { id:'end4', name: '(종)이벤트 4', period: '2024.10.01 ~ 2024.10.15', imgSrc: '/path/to/image2.jpg' },
    { id:'end5', name: '(종)이벤트 5', period: '2024.11.01 ~ 2024.11.15', imgSrc: '/path/to/image2.jpg' },
];
const EventPage = (props) => {
    const [selectedButton, setSelectedButton] = useState(0);

    const getEvents = () => {
        return selectedButton === 0 ? nowEvent : endedEvents;
    };

    const handleButtonClick = (buttonIndex) => {
        setSelectedButton(buttonIndex);
    };

    return (
        <>
            <div className='event_container'>
                <GNB stat={true} page={'이벤트/프로모션'} />
                <FastFAQSticky height={600}/>
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
                            <EventCardlist key={idx} item={item} isEnded={selectedButton === 1} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default EventPage;
