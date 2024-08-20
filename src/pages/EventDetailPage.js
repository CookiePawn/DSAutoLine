import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Footer from "../components/Footer";
import GNB from "../components/GNB";
import '../styles/EventDetailPage.css';
import { nowEvent, endedEvents } from './EventPage';
import FastFAQSticky from '../components/FastFAQSticky';

const EventDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const allEvents = [...nowEvent, ...endedEvents];
    const eventData = allEvents.find(event => event.id.toString() === id);

    if (!eventData) {
        return <div>이벤트를 찾을 수 없습니다.</div>;
    }

    return (
        <>
            <GNB stat={true} page={'이벤트/프로모션'} />
            <FastFAQSticky height={600}/>
            <div className='edcontainer'>
                <div className='DetailTitleSection'>
                    <h1>{eventData.name}</h1>
                    <p>{eventData.period}</p>
                </div>
                <div className='OptionSection'>
                    {/* 여기에 옵션 관련 내용 추가 가능 */}
                </div>
                <div className='ScriptSection'>
                    <img src={require('../assets/eventimage.png')}/>
                </div>
                <div className='ButtonSection'>
                    <button className="backButton" onClick={() => navigate(-1)}>목록으로</button>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default EventDetailPage;