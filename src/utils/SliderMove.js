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
            ? -window.innerWidth - (window.innerWidth * 0.025)
            : window.innerWidth - (window.innerWidth * 0.025);

        if (direction === 'left') {
            if (currentIndex > 0) {
                setCurrentIndex(currentIndex - 1);
            }
        } else {
            setCurrentIndex(currentIndex + 1);
        }

        let result = offset + newOffset
        console.log(list.length/num)
        console.log(currentIndex+1)

        // 새로운 오프셋이 0보다 작으면 0으로 설정
        if (result < 0) result = 0;
        if (list.length/num <= currentIndex+1) {
            setCurrentIndex(0);
            result=0;
        }
        return result
    });
};