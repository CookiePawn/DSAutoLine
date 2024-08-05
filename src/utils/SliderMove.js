/**
 * 슬라이더 이벤트 구현
 * @param {*} direction 
 * @param {*} currentIndex
 * @param {*} setOffset 
 * @param {*} setCurrentIndex 
 */
export const sliderMove = (direction, offset, currentIndex, setOffset, setCurrentIndex) => {
    setOffset(() => {
        let newOffset = direction === 'left'
            ? -(document.body.clientWidth * 0.95 + 30)
            : document.body.clientWidth * 0.95 + 30;

        let result = offset + newOffset;

        if (direction === 'left') {
            if (currentIndex > 0) {
                setCurrentIndex(currentIndex - 1);
                result = offset + newOffset;
            } else {
                result = offset; // left에서 처음 페이지면 offset을 변경하지 않음
            }
        } else {
            if (currentIndex < 1) { // 두 번째 페이지까지만
                setCurrentIndex(currentIndex + 1);
                result = offset + newOffset;
            } else {
                setCurrentIndex(0); // 처음으로 돌아가기
                result = 0;
            }
        }

        return result;
    });
};