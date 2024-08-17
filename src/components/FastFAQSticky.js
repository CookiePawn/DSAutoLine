import React, { useState } from 'react'
import '../styles/FastFAQSticky.css'



const FastFAQSticky = (props) => {
    //간편 문의 변수
    const [infoSelect1, setInfoSelect1] = useState(false)
    const [infoSelect2, setInfoSelect2] = useState(false)

    return (
        <section className='mainPage_QuickFAQSection'>
            <span>
                <span style={{height:  document.body.clientHeight - props.height}}>
                    <div>
                        <span style={{ marginTop: 23, marginBottom: 25 }}>
                            <img src={require('../assets/img/popup/quickFAQIcon.png')} />
                            <h3>간편하게 문의해보세요</h3>
                        </span>
                        <span>
                            <h4>이름</h4>
                            <input />
                        </span>
                        <span>
                            <h4>연락처</h4>
                            <input />
                        </span>
                        <span>
                            <h4>차종</h4>
                            <input />
                        </span>
                        <span>
                            {
                                !infoSelect1
                                    ? <img style={{ width: 23, height: 23 }} src={require('../assets/img/functionIcon/optionPage_nonSelectBox.png')} onClick={() => setInfoSelect1(!infoSelect1)} />
                                    : <img style={{ width: 23, height: 23 }} src={require('../assets/img/functionIcon/optionPage_SelectBox.png')} onClick={() => setInfoSelect1(!infoSelect1)} />
                            }
                            <p>개인정보 수집·이용·제공 동의 <span>(보기)</span></p>
                        </span>
                        <span style={{ marginTop: 16 }}>
                            {
                                !infoSelect2
                                    ? <img style={{ width: 23, height: 23 }} src={require('../assets/img/functionIcon/optionPage_nonSelectBox.png')} onClick={() => setInfoSelect2(!infoSelect2)} />
                                    : <img style={{ width: 23, height: 23 }} src={require('../assets/img/functionIcon/optionPage_SelectBox.png')} onClick={() => setInfoSelect2(!infoSelect2)} />
                            }
                            <p>개인정보 제 3자 제공 동의 <span>(보기)</span></p>
                        </span>
                        <div>상담신청하기</div>
                    </div>
                </span>
            </span>
        </section>
    )
}


export default FastFAQSticky