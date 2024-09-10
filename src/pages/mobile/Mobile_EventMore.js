import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import '../../styles/mobile/Mobile_Event.css'
import Mobile_GNB from "../../components/mobile/Mobile_GNB";
import Mobile_Footer from "../../components/mobile/Mobile_Footer";
import { eventInfoAxios } from '../../services/Request';
import Loading from "../../components/Loading";



const Mobile_EventMore = (props) => {
    const { id } = useParams();
    const [content, setContent] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const response = await eventInfoAxios(id)
            setContent(response)
        }
        fetchData()
    }, [id])


    if (!content) {
        return (
            <Loading />
        )
    }
    return (
        <div className="mobile_container">
            <Mobile_GNB page={'이벤트/프로모션'} />
            <section className="mobile_eventMore_contentSection">
                <h3>{content.title}</h3>
                <p>{content.start_date} ~ {content.end_date}</p>
                <span>
                    <img src={`${process.env.REACT_APP_IMG_URL}/${content.img}.png`} />
                </span>
            </section>
            <Mobile_Footer />
        </div>
    )
}

export default Mobile_EventMore