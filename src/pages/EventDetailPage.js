import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from "../components/Footer";
import GNB from "../components/GNB";
import '../styles/EventDetailPage.css';
import FastFAQSticky from '../components/FastFAQSticky';
import { eventInfoAxios } from '../services/Request';


const carImageError = (img) => {
    let imageSrc;

    try {
        imageSrc = require(`../assets/img/banner/${img}.png`);  // 동적으로 이미지 로드
    } catch (error) {
        imageSrc = require('../assets/img/dsautoline/DSAUTOLINE_car.png');  // 이미지가 없을 경우 대체 이미지 사용
    }

    return imageSrc
}




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
        return null
    }
    return (
        <>
            <GNB stat={true} page={'이벤트/프로모션'} />
            <FastFAQSticky height={600}/>
            <div className='edcontainer'>
                <div className='DetailTitleSection'>
                    <h1>{content.title}</h1>
                    <p>{content.start_date} ~ {content.end_date}</p>
                </div>
                <div className='OptionSection'>
                    {/* 여기에 옵션 관련 내용 추가 가능 */}
                </div>
                <div className='ScriptSection'>
                    <img src={carImageError(content.img)} alt='이벤트 이미지'/>
                </div>
                <div className='ButtonSection'>
                    <button className="backButton" onClick={() => window.location.href='/event'}>목록으로</button>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default EventDetailPage;
