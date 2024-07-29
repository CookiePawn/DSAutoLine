import React, { useState } from 'react';
import Footer from "../components/Footer";
import GNB from "../components/GNB";
import '../styles/EventPage.css';
import { EventCardlist } from '../components/Cards';

const EventPage = (props) => {
    const [selectedButton, setSelectedButton] = useState(0);
    const [list, setList] = useState([
        { name: '이벤트 1', period: '2024.07.01 ~ 2024.07.31' },
        { name: '이벤트 2', period: '2024.08.01 ~ 2024.08.15' },
        { name: '이벤트 3', period: '2024.09.01 ~ 2024.09.30' },
        { name: '이벤트 4', period: '2024.10.01 ~ 2024.10.31' },
        { name: '이벤트 5', period: '2024.11.01 ~ 2024.11.30' },
        { name: '이벤트 6', period: '2024.12.01 ~ 2024.12.31' },
        { name: '이벤트 7', period: '2025.01.01 ~ 2025.01.31' },
        { name: '이벤트 8', period: '2025.02.01 ~ 2025.02.28' },
        { name: '이벤트 9', period: '2025.03.01 ~ 2025.03.31' },
        { name: '이벤트 10', period: '2025.04.01 ~ 2025.04.30' },
        { name: '이벤트 11', period: '2025.05.01 ~ 2025.05.31' },
        { name: '이벤트 12', period: '2025.06.01 ~ 2025.06.30' },
        { name: '이벤트 13', period: '2025.07.01 ~ 2025.07.31' }
    ]);
    const [eventStart, setEventStart] = useState(0);
    const [eventEnd, setEventEnd] = useState(13);

    return (
        <>
<<<<<<< HEAD
            <GNB stat={true}  page={'이벤트/프로모션'}/>
            <div className="container">
                <div className="titleSection">
                    <h1>이벤트/프로모션</h1>
                    <p>더 많은 혜택과 함께 하세요</p>
                </div>
                <div className="eventButtonSection">
                    <button
                        onClick={() => setSelectedButton(0)}
                        className={`eventButton ${selectedButton === 0 ? 'selected' : ''}`}
                    >
                        진행중인 이벤트
                    </button>
                    <button
                        onClick={() => setSelectedButton(1)}
                        className={`eventButton ${selectedButton === 1 ? 'selected' : ''}`}
                    >
                        종료된 이벤트
                    </button>
                </div>
                <div className="eventSection">
                    <div className='eventList'>
                        {list.slice(eventStart, eventEnd).map((item, idx) => (
                            <EventCardlist key={idx} item={item} />
                        ))}
                    </div>
=======
            <GNB stat={true} />
            <div className="titleSection">
                <h1>이벤트/프로모션</h1>
                <p>더 많은 혜택과 함께 하세요</p>
            </div>
            <div className="eventButtonSection">
                <button
                    onClick={() => setSelectedButton(0)}
                    className={`eventButton ${selectedButton === 0 ? 'selected' : ''}`}
                >
                    진행중인 이벤트
                </button>
                <button
                    onClick={() => setSelectedButton(1)}
                    className={`eventButton ${selectedButton === 1 ? 'selected' : ''}`}
                >
                    종료된 이벤트
                </button>
            </div>
            <div className="eventpageSection">
                <div className='eventList'>
                    {list.slice(eventStart, eventEnd).map((item, idx) => (
                        <EventCardlist key={idx} item={item} />
                    ))}
>>>>>>> DSAL-13--EVENT
                </div>
            </div>
            <Footer />
        </>
    );
}

export default EventPage;
