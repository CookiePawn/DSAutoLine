import React, { useState } from 'react';
import Admin_Sidebar from '../components/Admin_Sidebar';
import Admin_Notice from '../components/Admin_Notice';
import Admin_Option from '../components/Admin_Option';
import Admin_Hotdeal from '../components/Admin_Hotdeal';
import { Admin_QuickFAQAdd, Admin_QuickFAQEdit } from '../components/Admin_QuickFAQ';
import { Admin_QuickDealAdd, Admin_QuickDealEdit } from '../components/Admin_QuickDeal';
import '../styles/AdminPage.css'
import { NoticeIcon } from '../components/Icons';

const AdminPage = () => {
    const [pageStat, setPageStat] = useState(0)

    return (
        <>
            <div className='admin_headerSection'>
                <div className='admin_header'>
                    <img src={require('../assets/img/dsautoline/dsautoline_white.png')} onClick={() => window.location.href='/'}/>
                    <span onClick={() => setPageStat(0)}><NoticeIcon size={30} color={'white'} /></span>
                </div>
            </div>
            <div className="admin_app-container">
                <Admin_Sidebar setPageStat={setPageStat} pageStat={pageStat}/>
                <div className="main-content">
                    {pageStat === 0 && <Admin_Notice />}
                    {pageStat === 1.1 && <Admin_QuickFAQAdd />}
                    {pageStat === 1.2 && <Admin_QuickFAQEdit />}
                    {pageStat === 2.1 && <Admin_Hotdeal action="add" />}
                    {pageStat === 2.2 && <Admin_Hotdeal action="editDelete" />}
                    {pageStat === 3.1 && <Admin_QuickDealAdd />}
                    {pageStat === 3.2 && <Admin_QuickDealEdit />}
                    {pageStat === 6 && <Admin_Option />}
                    
                </div>
            </div>
        </>

    )
}


export default AdminPage