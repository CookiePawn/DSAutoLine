import React from 'react';
import '../styles/Admin_Content.css'



function Admin_Notice() {
    const items = [
        { id: 1, text: '새로운 고객님이 추가되었습니다.' },
        { id: 2, text: '새로운 리뷰가 추가되었습니다.' },
        { id: 1, text: '새로운 고객님이 추가되었습니다.' },
        { id: 2, text: '새로운 리뷰가 추가되었습니다.' },
        { id: 1, text: '새로운 고객님이 추가되었습니다.' },
        { id: 2, text: '새로운 리뷰가 추가되었습니다.' },
        { id: 1, text: '새로운 고객님이 추가되었습니다.' },
        { id: 2, text: '새로운 리뷰가 추가되었습니다.' },
        { id: 1, text: '새로운 고객님이 추가되었습니다.' },
        { id: 2, text: '새로운 리뷰가 추가되었습니다.' },
        { id: 1, text: '새로운 고객님이 추가되었습니다.' },
        { id: 2, text: '새로운 리뷰가 추가되었습니다.' },
        { id: 1, text: '새로운 고객님이 추가되었습니다.' },
    ];

    return (
        <div className="admin_content">
            <h2>알림 <span>{items.length}건</span></h2>
            <div className="header-row">
                {/* <input type="checkbox" /> */}
            </div>
            {items.map(item => (
                <div className="notification" key={item.id}>
                    {/* <input type="checkbox" /> */}
                    <div className="notification-text">
                        <span className="icon">!</span>
                        <span>{item.text}</span>
                    </div>
                    <button className="delete-button">삭제</button>
                </div>
            ))}
        </div>
    );
}

export default Admin_Notice;