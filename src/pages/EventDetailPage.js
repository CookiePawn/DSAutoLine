import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from "../components/Footer";
import GNB from "../components/GNB";
import '../styles/EventDetailPage.css';
import FastFAQSticky from '../components/FastFAQSticky';
import { eventInfoAxios } from '../services/Request';




const EventDetailPage = () => {
    const { id } = useParams();
    const [content, setContent] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const response = await eventInfoAxios(id)
            setContent(response)
        }
        fetchData()
    }, [id])


    if (!content) {
        return (
            <img
                src={`${process.env.REACT_APP_IMG_URL}/error.png`}
                style={{width: '100%', height: '100%'}}
            />
        )
    }
    return (
        <>
            <GNB stat={true} page={'이벤트/프로모션'} />
            <FastFAQSticky height={600} />
            <div className='edcontainer'>
                <div className='DetailTitleSection'>
                    <h1>{content.title}</h1>
                    <p>{content.start_date} ~ {content.end_date}</p>
                </div>
                <div className='OptionSection'>
                    {/* 여기에 옵션 관련 내용 추가 가능 */}
                </div>
                <div className='ScriptSection'>
                    <img
                        src={`${process.env.REACT_APP_IMG_URL}/${content.img}.png`}
                        alt='이벤트 이미지'
                        onError={(e) => {
                            e.target.onerror = null; // 무한 루프 방지
                            e.target.src = `${process.env.REACT_APP_IMG_URL}/error.png`;
                        }}
                    />
                </div>
                <div className='ButtonSection'>
                    <button className="backButton" onClick={() => window.location.href = '/event'}>목록으로</button>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default EventDetailPage;
