/**
 * 슬라이더 이벤트 구현
 * @param {*} direction 
 * @param {*} currentIndex
 * @param {*} setOffset 
 * @param {*} setCurrentIndex 
 */

export const sliderMove = (direction, list, num, offset, currentIndex, setOffset, setCurrentIndex) => {
    setOffset(() => {
        // 새 오프셋 계산
        let newOffset = direction === 'left'
            ? -(document.body.clientWidth * 0.95 + 30)
            : document.body.clientWidth * 0.95 + 30;

        if (direction === 'left') {
            if (currentIndex > 0) {
                setCurrentIndex(currentIndex - 1);
            }
        } else {
            setCurrentIndex(currentIndex + 1);
        }

        let result = offset + newOffset

        // 새로운 오프셋이 0보다 작으면 0으로 설정
        if (result < 0) result = 0;
        if (list.length / num <= currentIndex + 1) {
            if (direction === 'right') {
                setCurrentIndex(0);
                result = 0;
            }
        }
        return result
    });
};