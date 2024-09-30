import React, { useEffect, useState, useRef } from "react";
import '../styles/Main_EventBanner.css';
import Loading from '../components/Loading';



const Main_EventLineBanner = (props) => {
    if(props.list) {
        return (
            <Loading />
        )
    }
    return (
        <>
            <section>

            </section>
        </>
    )
}


export default Main_EventLineBanner