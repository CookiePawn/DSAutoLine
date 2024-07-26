import React, { useState } from 'react';
import Footer from "../components/Footer";
import GNB from "../components/GNB";
import '../styles/EventPage.css';
import {EventCard} from '../components/Cards';

const EventPage = (props) => {
    const [selectedButton, setSelectedButton] = useState(0);
    const [list, setList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
    const [eventStart, setEventStart] = useState(0);
    const [eventEnd, setEventEnd] = useState(10);

    return (
        <>
            <GNB stat={true} />
            <div className="container">
                <div className="titleSection">
                    <h1>이벤트/프로모션</h1>
                    <p>더 많은 혜택과 함께 하세요</p>
                </div>
                <div className="eventSection">
                    <div className="eventButtons">
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
                    <div className='eventList'>
                        {list.slice(eventStart, eventEnd).map((item, idx) => (
                            <EventCard key={idx} item={item} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default EventPage;
