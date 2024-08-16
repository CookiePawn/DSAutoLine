import GNB from "../components/GNB"
import Footer from "../components/Footer";
import '../styles/EnterPage.css';
import DSAutoLine from '../assets/img/dsautoline/DSAUTOLINE.png'

const EnterPage = (props) => {
    return (
        <>
            <GNB stat={true} page={'회사소개'}/>
            <div className="EnterbannerSection">
                <h1>고객님의 <span className="Point">‘마음’</span>을 움직입니다.</h1>
                <p>저희 DS 오토라인은 신뢰와 믿음을 바탕으로 고객님의 마음을 움직이겠습니다.</p>
            </div>
            <div className="EnterTitleSection">
                <img src={DSAutoLine} className="titlelogo" alt="이미지 로딩이 실패하였습니다"/>
                <p>렌트/리스 분야에서 여러 경험과 노하우, 신뢰와 믿음을 바탕으로 고객님들의 마음을 움직이는</p>
                <p>컨설팅을 진행해 드리는 자동차 금융서비스 전문 기업입니다.</p>
                <p>다양한 파트너 사와 직,간접적인 업무 진행을 통해 유통 마진을 줄이고 고객 최우선적 1대1 심</p>
                <p>층상담을 통해 보다 합리적이고 어디에서 쉽게 볼 수 없는 견적서를 드리겠습니다.</p>
            </div>
            <div className="advantageSection">
                <div className="advantage-column">
                    <h1>장기렌트 장점</h1>
                    <ul className="centered">
                        <li>1. ~~~</li>
                        <li>1. ~~~</li>
                        <li>1. ~~~</li>
                        <li>1. ~~~</li>
                    </ul>
                </div>
                
            </div>
            <Footer />
        
        </>
    )
}

export default EnterPage;