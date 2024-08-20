import React, { useState } from 'react';
import Admin_Sidebar from '../components/Admin_Sidebar';
import Admin_Notice from '../components/Admin_Notice';
import Admin_Option from '../components/Admin_Option';
import Admin_Hotdeal from '../components/Admin_Hotdeal';
import '../styles/AdminPage.css'
import { NoticeIcon } from '../components/Icons';

const AdminPage = () => {
    const [pageStat, setPageStat] = useState(0)
    const [subPage, setSubPage] = useState(null);

    const setPage = (page, subPage = null) => {
        setPageStat(page);
        setSubPage(subPage);
    };

    return (
        <>
            <div className='admin_headerSection'>
                <div className='admin_header'>
                    <img src={require('../assets/img/dsautoline/dsautoline_white.png')} onClick={() => window.location.href='/'}/>
                    <span onClick={() => setPageStat(0)}><NoticeIcon size={30} color={'white'} /></span>
                </div>
            </div>
            <div className="admin_app-container">
                <Admin_Sidebar setPage={setPage}/>
                <div className="main-content">
                    {pageStat === 0 && <Admin_Notice />}
                    {pageStat === 2 && subPage === 'add' && <Admin_Hotdeal action="add" />}
                    {pageStat === 2 && subPage === 'editDelete' && <Admin_Hotdeal action="editDelete" />}
                    {pageStat === 6 && <Admin_Option />}
                    
                </div>
            </div>
        </>

    )
}


export default AdminPage