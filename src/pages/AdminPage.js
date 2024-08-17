import React from 'react';
import Sidebar from '../components/Admin_Sidebar';
import Notice from '../components/Admin_Notice';
import '../styles/AdminPage.css'
import { NoticeIcon } from '../components/Icons';

const AdminPage = () => {
    return (
        <>
            <div className='admin_headerSection'>
                <div className='admin_header'>
                    <img src={require('../assets/img/dsautoline/dsautoline_white.png')} onClick={() => window.location.href='/'}/>
                    <span><NoticeIcon size={30} color={'white'} /></span>
                </div>
            </div>
            <div className="admin_app-container">
                <Sidebar />
                <div className="main-content">
                    <Notice />
                </div>
            </div>
        </>

    )
}


export default AdminPage