import React, { useState, useEffect } from "react";
import '../../styles/mobile/Mobile_Admin.css'
import { Mobile_Admin_UserCompletedList, Mobile_Admin_UserIncompleteList} from '../../components/mobile/Mobile_Admin_Content'




const Mobile_Admin = (props) => {
    const [listStat, setListStat] = useState(0)

    return (
        <div className="mobile_container">
            <section className="mobile_admin_listSection">
                <button onClick={() => setListStat(0)} className={listStat === 0 && 'selected'}>미완료 고객</button>
                <button onClick={() => setListStat(1)} className={listStat === 1 && 'selected'}>완료 고객</button>
                {listStat === 0 && <Mobile_Admin_UserIncompleteList /> }
                {listStat === 1 && <Mobile_Admin_UserCompletedList /> }
            </section>
        </div>
    )
}

export default Mobile_Admin