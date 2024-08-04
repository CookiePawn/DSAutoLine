import '../styles/PopUp.css'

export const OptionPagePopUp = (props) => {
    return (
        <>
            <div className="popupDimmed">
                <div className="popupDiv">
                    <img src={require('../assets/img/popup/popupIcon.png')}/>
                    <h2>사용해주셔서 감사합니다</h2>
                    <p>카카오톡으로 연락드리겠습니다</p>
                    <span onClick={() => window.location.href = '/'}>닫기</span>
                </div>
            </div>

        </>

    )
}

export const ReviewPagePopUp = (props) => {
    return (
        <>
        </>
    )
}