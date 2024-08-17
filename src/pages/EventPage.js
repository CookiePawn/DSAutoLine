import React, { useState } from 'react';
import Footer from "../components/Footer";
import GNB from "../components/GNB";
import '../styles/EventPage.css';
import { EventCardlist } from '../components/Cards';
import FastFAQSticky from '../components/FastFAQSticky';

const script = `DSAutoLine이 고객님께 특별한 주말을 선사합니다! 차량을 소유하지 않아도, 이제 DSAutoLine을 통해 편리하게 고급 자동차를 이용할 수 있습니다. 이번 이벤트는 여러분이 꿈꾸던 드라이빙 경험과 자연 속에서의 편안한 휴식을 동시에 제공하기 위해 마련되었습니다.

DSAutoLine은 고급 자동차 렌탈 및 시승 예약 서비스를 통해, 고객님께 최상의 이동 수단을 제공합니다. 그리고 이번에는 특별히, DSAutoLine을 통해 차량을 렌탈하거나 시승 예약을 하신 모든 고객님께 고급 펜션에서의 1박 숙박권을 증정합니다. 이 제휴된 펜션은 탁월한 자연경관과 함께 완벽한 휴식을 제공하며, 고객님께 잊지 못할 주말을 선사할 것입니다.

이벤트 기간 동안 DSAutoLine을 통해 예약하시면, 펜션에서의 특별한 혜택도 함께 누리실 수 있습니다. 숙박과 더불어 바비큐 파티, 스파 이용권 등 다양한 추가 혜택을 통해 더 여유롭고 즐거운 시간을 보내세요. 이 모든 혜택은 여러분의 드라이빙 경험을 더욱 완벽하게 만들어 줄 것입니다.

DSAutoLine은 고객님의 라이프스타일을 지원하기 위해, 언제 어디서나 편리하게 차량을 이용할 수 있는 솔루션을 제공합니다. 또한, 이번 이벤트를 통해 고객님께 한층 더 높은 만족감을 드리고자 합니다. 지금 DSAutoLine 홈페이지를 방문하시고, 렌탈이나 시승 예약을 통해 편안한 드라이브와 함께 고급 펜션에서의 특별한 휴식을 누리세요.

DSAutoLine과 함께라면, 차를 소유하지 않아도 원하는 차량으로 떠나는 여행이 가능합니다. 지금 바로 예약하시고, 당신만의 특별한 주말을 계획해보세요! dla;ksjdflkasjdlkfjsadilhjaslujfgh ajlskdjf klsajflk;adsj filasdj filapsd filpasj filas jf ilejsfjasefl ajsifjasil;e fjas;liefjasl;iejfalsejfa;iles jilsa jfeilj flisajefl;ij 

DSAutoLine이 고객님께 특별한 주말을 선사합니다! 차량을 소유하지 않아도, 이제 DSAutoLine을 통해 편리하게 고급 자동차를 이용할 수 있습니다. 이번 이벤트는 여러분이 꿈꾸던 드라이빙 경험과 자연 속에서의 편안한 휴식을 동시에 제공하기 위해 마련되었습니다.

DSAutoLine은 고급 자동차 렌탈 및 시승 예약 서비스를 통해, 고객님께 최상의 이동 수단을 제공합니다. 그리고 이번에는 특별히, DSAutoLine을 통해 차량을 렌탈하거나 시승 예약을 하신 모든 고객님께 고급 펜션에서의 1박 숙박권을 증정합니다. 이 제휴된 펜션은 탁월한 자연경관과 함께 완벽한 휴식을 제공하며, 고객님께 잊지 못할 주말을 선사할 것입니다.

이벤트 기간 동안 DSAutoLine을 통해 예약하시면, 펜션에서의 특별한 혜택도 함께 누리실 수 있습니다. 숙박과 더불어 바비큐 파티, 스파 이용권 등 다양한 추가 혜택을 통해 더 여유롭고 즐거운 시간을 보내세요. 이 모든 혜택은 여러분의 드라이빙 경험을 더욱 완벽하게 만들어 줄 것입니다.

DSAutoLine은 고객님의 라이프스타일을 지원하기 위해, 언제 어디서나 편리하게 차량을 이용할 수 있는 솔루션을 제공합니다. 또한, 이번 이벤트를 통해 고객님께 한층 더 높은 만족감을 드리고자 합니다. 지금 DSAutoLine 홈페이지를 방문하시고, 렌탈이나 시승 예약을 통해 편안한 드라이브와 함께 고급 펜션에서의 특별한 휴식을 누리세요.

DSAutoLine과 함께라면, 차를 소유하지 않아도 원하는 차량으로 떠나는 여행이 가능합니다. 지금 바로 예약하시고, 당신만의 특별한 주말을 계획해보세요! dla;ksjdflkasjdlkfjsadilhjaslujfgh ajlskdjf klsajflk;adsj filasdj filapsd filpasj filas jf ilejsfjasefl ajsifjasil;e fjas;liefjasl;iejfalsejfa;iles jilsa jfeilj flisajefl;ij 

DSAutoLine이 고객님께 특별한 주말을 선사합니다! 차량을 소유하지 않아도, 이제 DSAutoLine을 통해 편리하게 고급 자동차를 이용할 수 있습니다. 이번 이벤트는 여러분이 꿈꾸던 드라이빙 경험과 자연 속에서의 편안한 휴식을 동시에 제공하기 위해 마련되었습니다.

DSAutoLine은 고급 자동차 렌탈 및 시승 예약 서비스를 통해, 고객님께 최상의 이동 수단을 제공합니다. 그리고 이번에는 특별히, DSAutoLine을 통해 차량을 렌탈하거나 시승 예약을 하신 모든 고객님께 고급 펜션에서의 1박 숙박권을 증정합니다. 이 제휴된 펜션은 탁월한 자연경관과 함께 완벽한 휴식을 제공하며, 고객님께 잊지 못할 주말을 선사할 것입니다.

이벤트 기간 동안 DSAutoLine을 통해 예약하시면, 펜션에서의 특별한 혜택도 함께 누리실 수 있습니다. 숙박과 더불어 바비큐 파티, 스파 이용권 등 다양한 추가 혜택을 통해 더 여유롭고 즐거운 시간을 보내세요. 이 모든 혜택은 여러분의 드라이빙 경험을 더욱 완벽하게 만들어 줄 것입니다.

DSAutoLine은 고객님의 라이프스타일을 지원하기 위해, 언제 어디서나 편리하게 차량을 이용할 수 있는 솔루션을 제공합니다. 또한, 이번 이벤트를 통해 고객님께 한층 더 높은 만족감을 드리고자 합니다. 지금 DSAutoLine 홈페이지를 방문하시고, 렌탈이나 시승 예약을 통해 편안한 드라이브와 함께 고급 펜션에서의 특별한 휴식을 누리세요.

DSAutoLine과 함께라면, 차를 소유하지 않아도 원하는 차량으로 떠나는 여행이 가능합니다. 지금 바로 예약하시고, 당신만의 특별한 주말을 계획해보세요! dla;ksjdflkasjdlkfjsadilhjaslujfgh ajlskdjf klsajflk;adsj filasdj filapsd filpasj filas jf ilejsfjasefl ajsifjasil;e fjas;liefjasl;iejfalsejfa;iles jilsa jfeilj flisajefl;ij `;





export const nowEvent = [
    { id:1, name: '이벤트 1', period: '2024.07.01 ~ 2024.07.31', imgSrc: '/path/to/image1.jpg', script: script },
    { id:2, name: '이벤트 2', period: '2024.08.01 ~ 2024.08.15', imgSrc: '/path/to/image2.jpg', script: script },
    { id:3, name: '이벤트 3', period: '2024.09.01 ~ 2024.09.15', imgSrc: '/path/to/image2.jpg', script: script },
    { id:4, name: '이벤트 4', period: '2024.10.01 ~ 2024.10.15', imgSrc: '/path/to/image2.jpg', script: script },
    { id:5, name: '이벤트 5', period: '2024.11.01 ~ 2024.11.15', imgSrc: '/path/to/image2.jpg', script: script },
    { id:6, name: '이벤트 6', period: '2024.12.01 ~ 2024.12.15', imgSrc: '/path/to/image2.jpg', script: script },
    { id:7, name: '이벤트 7', period: '2025.01.01 ~ 2025.01.15', imgSrc: '/path/to/image2.jpg', script: script },
    { id:8, name: '이벤트 8', period: '2025.02.01 ~ 2025.02.15', imgSrc: '/path/to/image2.jpg', script: script },
    { id:9, name: '이벤트 9', period: '2025.03.01 ~ 2025.03.15', imgSrc: '/path/to/image2.jpg', script: script },
    { id:10, name: '이벤트 10', period: '2025.04.01 ~ 2025.04.15', imgSrc: '/path/to/image2.jpg', script: script },
    { id:11, name: '이벤트 11', period: '2025.05.01 ~ 2025.05.15', imgSrc: '/path/to/image2.jpg', script: script },
    { id:12, name: '이벤트 12', period: '2025.06.01 ~ 2025.06.15', imgSrc: '/path/to/image2.jpg', script: script },
    { id:13, name: '이벤트 13', period: '2025.07.01 ~ 2025.07.15', imgSrc: '/path/to/image2.jpg', script: script },
];

export const endedEvents = [
    { id:'end1', name: '(종)이벤트 1', period: '2024.07.01 ~ 2024.07.31', imgSrc: '/path/to/image1.jpg', script: script },
    { id:'end2', name: '(종)이벤트 2', period: '2024.08.01 ~ 2024.08.15', imgSrc: '/path/to/image2.jpg', script: script },
    { id:'end3', name: '(종)이벤트 3', period: '2024.09.01 ~ 2024.09.15', imgSrc: '/path/to/image2.jpg', script: script },
    { id:'end4', name: '(종)이벤트 4', period: '2024.10.01 ~ 2024.10.15', imgSrc: '/path/to/image2.jpg', script: script },
    { id:'end5', name: '(종)이벤트 5', period: '2024.11.01 ~ 2024.11.15', imgSrc: '/path/to/image2.jpg', script: script },
    
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
