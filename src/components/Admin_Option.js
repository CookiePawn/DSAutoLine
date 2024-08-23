import React, { useState } from 'react';
import '../styles/Admin_Content.css'
import picture from '../assets/picture.png'



export function Admin_ColorOption() {
    const [searchValue, setSearchValue] = useState('');
    const [colorName, setColorName] = useState('');
    const [colorRGB, setColorRGB] = useState('');

    const [items, setItems] = useState([
        { name: '블랙', rgb: '#111' },
        { name: '쥐색', rgb: '#bbb' },
        { name: '화이트 실버', rgb: '#ededed' },
        { name: '은갈치 에디션', rgb: '#dedede' },
        { name: '라이트 실버', rgb: '#dbdbdb' },
        { name: '프로덕트 레드', rgb: '#ff0000' },
        { name: 'DS AutoLine 에디션', rgb: '#0064FF' },
        { name: '스노우 화이트 펄 (SWP)', rgb: '#ffffff' },
    ])


    // 검색어를 포함하는 항목 필터링
    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    const handleAddColor = () => {
        if (colorName && colorRGB.slice(0,1) === '#' && (colorRGB.length === 7 || colorRGB.length === 4)) {
            setItems([...items, { name: colorName, rgb: colorRGB }]);
            setColorName(''); // 입력 필드 초기화
            setColorRGB(''); // 입력 필드 초기화
        }
    };

    return (
        <>
            <section className='admin_content_colorAddSection'>
                <div>
                    <h1>외장 색상</h1>
                    <input
                        placeholder='색상을 검색해주세요'
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <div className='admin_content_colorCard title'>
                        <p>색상</p>
                        <p>색상명</p>
                        <p>생상 코드</p>
                    </div>
                    <span></span>
                    <div className='admin_content_colorCardList'>
                        {filteredItems.map((item, idx) => (
                            <div className='admin_content_colorCard'>
                                <span style={{ backgroundColor: item.rgb }}></span>
                                <p>{item.name}</p>
                                <p>{item.rgb}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h3>색상명</h3>
                    <input
                        placeholder='ex) 아이스 블루'
                        value={colorName}
                        onChange={(e) => setColorName(e.target.value)}
                    />
                    <h3>색상 코드</h3>
                    <input
                        placeholder='ex) #ededed'
                        value={colorRGB}
                        onChange={(e) => setColorRGB(e.target.value)}
                    />
                    <button onClick={handleAddColor}>추가하기</button>
                </div>
            </section>
        </>
    );
}



export function Admin_Option() {
    const [searchValue, setSearchValue] = useState('');
    const [colorName, setColorName] = useState('');
    const [colorRGB, setColorRGB] = useState('');

    const [items, setItems] = useState([
        { name: '블랙', rgb: '#111' },
        { name: '쥐색', rgb: '#bbb' },
        { name: '스노우 화이트 펄 (SWP)', rgb: '#ffffff' },
    ])


    // 검색어를 포함하는 항목 필터링
    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    const handleAddColor = () => {
            setItems([...items, { name: colorName, rgb: colorRGB }]);
            setColorName(''); // 입력 필드 초기화
            setColorRGB(''); // 입력 필드 초기화
    };

    return (
        <>
            <section className='admin_content_colorAddSection'>
                <div>
                    <h1>옵션</h1>
                    <input
                        placeholder='옵션을 검색해주세요'
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <div className='admin_content_colorCard title'>
                        <p>이미지</p>
                        <p>옵션명</p>
                        <p>금액</p>
                    </div>
                    <span></span>
                    <div className='admin_content_colorCardList'>
                        {filteredItems.map((item, idx) => (
                            <div className='admin_content_colorCard'>
                                <span style={{ backgroundColor: item.rgb }}></span>
                                <p>{item.name}</p>
                                <p>{item.rgb}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h3>이미지</h3>
                    <img src={picture} alt="배너 미리보기" style={{width:'38px', height:'38px', padding:'0 20px'}} />
                    <div className="admin_content_option_preview_img"></div>
                    <h3>옵션명</h3>
                    <input
                        placeholder='ex) 파노라마 선루프'
                        value={colorRGB}
                        onChange={(e) => setColorRGB(e.target.value)}
                    />
                    <h3>금액</h3>
                    <input
                        placeholder='ex) 3256만원'
                        value={colorRGB}
                        onChange={(e) => setColorRGB(e.target.value)}
                    />
                    <button onClick={handleAddColor}>추가하기</button>
                </div>
            </section>
        </>
    );
}