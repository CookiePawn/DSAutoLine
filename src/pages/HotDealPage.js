import '../styles/HotDealPage.css'
import GNB from '../components/GNB'
import Footer from '../components/Footer'
import { HotDealCarCard } from '../components/Cards'


const HotDealPage = (props) => {
    return (
        <>
            <GNB stat={true}  page={'한정 특가'}/>
            <div className='bannerSection'>
                <p>한정 특가 이벤트 배너</p>
            </div>
            <div className='titleSection'>
                <h1>한정 특가</h1>
                <p>특별 할인이 들어간 가격의 차량을 확인하세요</p>
            </div>
            <div className='carListSection'>
                <div>
                    {Array.from({ length: 15 }, (_, index) => (
                        <HotDealCarCard/>
                    ))}

                </div>
            </div>
            <Footer />
        </>
    )
}



export default HotDealPage