import React, { useState } from 'react'
import '../styles/PopUp.css'
import { StarIcon } from './Icons'
import imageUpload from '../assets/img/popup/imageUpload.png'
import nonClick from '../assets/optionPage_nonSelectBox.png'
import onClick from '../assets/optionPage_SelectBox.png'



export const OptionPagePopUp = (props) => {
    return (
        <>
            <div className="popupDimmed">
                <div className="popupDiv">
                    <img src={require('../assets/img/popup/popupIcon.png')} />
                    <h2>사용해주셔서 감사합니다</h2>
                    <p>카카오톡으로 연락드리겠습니다</p>
                    <span onClick={() => window.location.href = '/'}>닫기</span>
                </div>
            </div>

        </>

    )
}

export const ReviewPagePopUp = (props) => {
    const [starStat, setStarStat] = useState(0)

    return (
        <>
            <div className="reviewPopupDimmed">
                <div className="reviewPopupDiv">
                    <div>
                        <h1>리뷰 작성 시<br />확인해주세요!!</h1>
                        <p>리뷰 확인 후 필터링 또는 삭제 조치 될 수도 있습니다</p>
                        <span>
                            <h3>1</h3>
                            <p>사진 필수 포함<br /><span>차량 사진을 업로드해주세요</span></p>
                        </span>
                        <span>
                            <h3>2</h3>
                            <p>욕설 금지<br /><span>내용에 욕설을 사용하지 마세요</span></p>
                        </span>
                        <span>
                            <h3>3</h3>
                            <p>상업적 게시물 금지<br /><span>상업적인 게시물은 삭제됩니다</span></p>
                        </span>
                    </div>
                    <div>
                        <span>
                            <span>
                                <p>이름</p>
                                <input />
                            </span>
                            <span>
                                <p>차량명</p>
                                <input placeholder='ex) 기아 K3' />
                            </span>
                        </span>
                        <span>
                            <span>
                                <p>별점</p>
                                {Array.from({ length: 5 }, (_, index) => (
                                    <span onClick={() => setStarStat(index + 1)}>
                                        <StarIcon
                                            key={index}
                                            size={31}
                                            color={index < starStat ? '#FBDA03' : '#9FA5AB'}
                                        />
                                    </span>
                                ))}
                            </span>
                            <span>
                                <p style={{ width: 273 }}>사진</p>
                                <img src={imageUpload} />
                            </span>
                        </span>
                        <h2>내용</h2>
                        <textarea />
                        <span>
                            <p onClick={() => { props.setPopupStat(false); document.body.style.overflow = 'auto'; }}>작성 취소</p>
                            <p onClick={() => { document.body.style.overflow = 'auto'; window.location.href = '/'; }}>작성 완료</p>
                        </span>

                    </div>
                </div>
            </div>
        </>
    )
}




export const CarmentoPopUp = (props) => {
    return (
        <>
            <div className='carmentoDimmed'>
                <div>
                    <div>
                        <span>
                            <img src={require('../assets/img/carmento/carmento1.jpg')} />
                        </span>
                        <span>
                            <h2>이주빈 팀장</h2>
                            <p>고객님들이 항상 만족하실 수 있도록 <br/>최선을 다하겠습니다.</p>
                        </span>
                    </div>
                    <div>
                        <h2>우수 카멘토에게 상담 받아보세요</h2>
                        <span>
                            <h4>이름</h4>
                            <input/>
                        </span>
                        <span>
                            <h4>연락처</h4>
                            <input type='number'/>
                        </span>
                        <span>
                            <img src={nonClick}/>
                            <p>개인정보 수집 · 이용 · 제공 동의 <span>(보기)</span></p>
                        </span>
                        <span>
                            <img src={nonClick}/>
                            <p>개인정보 제 3자 제공 동의 <span>(보기)</span></p>
                        </span>
                        <span>
                            <span onClick={() => { props.setCarmentoPopup(false); document.body.style.overflow = 'auto' }}>취소</span>
                            <span onClick={() => { props.setCheckPopup(true); props.setCarmentoPopup(false); }}>상담 신청하기</span>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}