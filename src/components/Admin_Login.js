import React from 'react';
import '../styles/Admin_Content.css'



const Admin_Login = (props) => {
    return (
        <div className="admin_content">
            <div className='admin_content_loginSection'>
                <div className='admin_content_loginDiv' style={{width: props.width, height: props.height}}>
                    <h2>로그인</h2>
                    <h3>아이디</h3>
                    <input />
                    <h3>비밀번호</h3>
                    <input />
                    <button
                        onClick={() => {
                            if (props.width === '90%') {
                                props.setLogin(1)
                            } else {
                                props.setLogin(7.2)
                            }
                        }}
                    >로그인</button>
                </div>
            </div>
        </div>
    );
}

export default Admin_Login;