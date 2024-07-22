/**
 * 슬라이더 이벤트 구현
 * @param {*} direction 
 * @param {*} list 
 * @param {*} cardWidth 
 * @param {*} cardMargin 
 * @param {*} paddingRight 
 * @param {*} visibleCards 
 * @param {*} containerWidth 
 * @param {*} setOffset 
 * @param {*} setCurrentIndex 
 */

export const sliderMove = (direction, list, cardWidth, cardMargin, paddingRight, visibleCards, containerWidth, setOffset, setCurrentIndex) => {
    setOffset((prevOffset) => {
        const totalWidth = (list.length * (cardWidth + cardMargin)) - cardMargin;
        const maxOffset = totalWidth - (containerWidth + paddingRight); // 최대로 이동할 수 있는 오프셋

        // 새 오프셋 계산
        let newOffset = direction === 'left'
            ? prevOffset - (cardWidth + cardMargin)
            : prevOffset + (cardWidth + cardMargin);

        // 새로운 오프셋이 0보다 작으면 0으로 설정
        if (newOffset < 0) newOffset = 0;

        // 새로운 오프셋이 최대 오프셋보다 크면 최대 오프셋으로 설정
        if (newOffset > maxOffset) newOffset = maxOffset;

        // 현재 인덱스 업데이트
        const newIndex = Math.min(
            Math.floor(newOffset / (cardWidth + cardMargin)),
            list.length - visibleCards
        );
        setCurrentIndex(newIndex);

        return newOffset;
    });
};