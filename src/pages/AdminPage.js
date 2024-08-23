import React, { useState } from 'react';
import Admin_Sidebar from '../components/Admin_Sidebar';
import Admin_Notice from '../components/Admin_Notice';
import Admin_Option from '../components/Admin_Option';
import { Admin_HotdealAdd, Admin_HotdealEdit} from '../components/Admin_Hotdeal';
import { Admin_QuickFAQAdd, Admin_QuickFAQEdit } from '../components/Admin_QuickFAQ';
import { Admin_QuickDealAdd, Admin_QuickDealEdit } from '../components/Admin_QuickDeal';
import { Admin_EventAdd, Admin_EventEdit } from '../components/Admin_Event';
import { Admin_UserCompletedList, Admin_UserIncompleteList } from '../components/Admin_UserList';
import Admin_Review from '../components/Admin_Review';
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
                    {pageStat === 2.1 && <Admin_HotdealAdd/>}
                    {pageStat === 2.2 && <Admin_HotdealEdit/>}
                    {pageStat === 3.1 && <Admin_QuickDealAdd />}
                    {pageStat === 3.2 && <Admin_QuickDealEdit />}
                    {pageStat === 4.1 && <Admin_EventAdd />}
                    {pageStat === 4.2 && <Admin_EventEdit />}
                    {pageStat === 5 && <Admin_Review />}
                    {pageStat === 6 && <Admin_Option />}
                    {pageStat === 7.1 && <Admin_UserCompletedList />}
                    {pageStat === 7.2 && <Admin_UserIncompleteList />}
                </div>
            </div>
        </>

    )
}


export default AdminPage