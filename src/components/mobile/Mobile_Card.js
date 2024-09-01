import React, { useState, useEffect } from "react";
import { StarIcon } from '../../components/Icons'


export const Mobile_HotDealCard = (props) => {
    return (
        <div className="mobile_hotDealCard" onClick={() => window.location.href = `/Option/${props.item.car_code}`}>
            <img src={`${process.env.REACT_APP_IMG_URL}/${props.item.img}.png`} />
            <h4>{props.item.name}</h4>
            <p>{props.item.info}</p>
            <span>
                {props.item.lease_price >= props.item.rental_price
                    ? <><p>월</p><p><span>{props.item.rental_percent}%</span> · {props.item.rental_price.toLocaleString()}<span>원</span></p></>
                    : <><p>월</p><p><span>{props.item.lease_percent}%</span> · {props.item.lease_price.toLocaleString()}<span>원</span></p></>
                }
            </span>
            <span>
                <p>{props.item.payment}</p>
                <p>{props.item.deposit} 30%</p>
            </span>
        </div>
    )
}



export const Mobile_QuickDealCard = (props) => {
    return (
        <div className="mobile_quickDealCard">
            <img src={`${process.env.REACT_APP_IMG_URL}/${props.item.img}.png`} />
            <h4>{props.item.enter} {props.item.name}</h4>
            <p>{props.item.info}</p>
            <span>
                <p>외장</p><p><span></span><span>{props.item.out_color}</span></p>
            </span>
            <span>
                <p>내장</p><p><span></span><span>{props.item.in_color}</span></p>
            </span>
            <span>
                {props.item.option.length === 0 && <p>옵션</p>}
                {props.item.option.length === 1 && <><p>옵션</p><p><span></span><span>{props.item.option[0].name}</span></p></>}
                {props.item.option.length > 1 && <><p>옵션</p><p><span></span><span>{props.item.option[0].name}</span></p><p>외 {props.item.option.length - 1}건</p></>}
            </span>
            <span>
                <p>월</p><p><span></span>{props.item.month_price.toLocaleString()}<span>원</span></p>
            </span>
            <span>
                <p>{props.item.payment}</p>
                <p>{props.item.deposit} 30%</p>
            </span>
        </div>
    )
}



export const Mobile_PopularCard = (props) => {
    return (
        <div className="mobile_hotDealCard" style={{ height: 200 }}>
            <img src={`${process.env.REACT_APP_IMG_URL}/${props.item.img}.png`} />
            <h4>{props.item.name}</h4>
            <p>{props.item.info}</p>
            <span>
                <p>차량가</p>
                <p><span></span>{props.item.price.toLocaleString()}<span>원</span></p>

            </span>
        </div>
    )
}


export const Mobile_ReviewCard = (props) => {
    return (
        <div className="mobile_ReviewCard" onClick={() => window.location.href = `/ReviewMore/${props.item.seq}`}>
            <img src={`${process.env.REACT_APP_IMG_URL}/${props.item.img}.png`} />
            <h4>{props.item.enter} {props.item.car_name}</h4>
            <p>{props.item.comment}</p>
            <span>
                {Array.from({ length: props.item.star }, (_, index) => (
                    <StarIcon size={25} color={'#FBDA03'} />
                ))}
            </span>
        </div>
    )
}

export const Mobile_CarmentoCard = (props) => {
    return (
        <div className="mobile_CarmentoCard">
            <div>
                <span></span>
                <img src={require('../../assets/img/carmento/carmento1.jpg')} />
            </div>
            <h4>{props.name}</h4>
            <p>{props.name}에게 상담   〉</p>
        </div>
    )
}


export const Mobile_HotDealPageCard = (props) => {
    return (
        <div className="mobile_hotDealPageCard" onClick={() => window.location.href = `/Option/${props.item.car_code}`}>
            <img src={`${process.env.REACT_APP_IMG_URL}/${props.item.img}.png`} />
            <h4>{props.item.name}</h4>
            <p>{props.item.info}</p>
            <span>
                <p>렌트 (월)</p><p><span>{props.item.rental_percent}%</span> · {props.item.rental_price.toLocaleString()}<span>원</span></p>
            </span>
            <span>
                <p>리스 (월)</p><p><span>{props.item.lease_percent}%</span> · {props.item.lease_price.toLocaleString()}<span>원</span></p>
            </span>
            <span>
                <p>{props.item.payment}</p>
                <p>{props.item.deposit} 30%</p>
            </span>
        </div>
    )
}

export const Mobile_EventPageCard = (props) => {
    return (
        <div className="mobile_eventPageCard" onClick={() => { if (props.stat !== true) window.location.href = `/Event/${props.item.event_num}` }}>
            {props.stat === true
                ? <span>
                    <img src={`${process.env.REACT_APP_IMG_URL}/${props.item.img}.png`} />
                    <span><p>종료된 이벤트 입니다</p></span>
                </span>
                : <img src={`${process.env.REACT_APP_IMG_URL}/${props.item.img}.png`} />
            }

            <h4>{props.item.title}</h4>
            <p>{props.item.start_date} ~ {props.item.end_date}</p>
        </div>
    )
}

export const Mobile_ReviewPageCard = (props) => {
    return (
        <div className="mobile_reviewPageCard" onClick={() => window.location.href = `/ReviewMore/${props.item.seq}`}>
            <img src={`${process.env.REACT_APP_IMG_URL}/${props.item.img}.png`} />
            <h4>{props.item.enter} {props.item.car_name}</h4>
            <p>{props.item.comment}</p>
            <div></div>
            <span>
                <h3>{props.item.name[0]}*{props.item.name[2]} 님</h3>
                <p>{props.item.created_at.slice(0, 10)}</p>
            </span>
            <span>
                <h4>평점</h4>
                <span>
                    {Array.from({ length: props.item.star }, (_, index) => (
                        <StarIcon size={25} color={'#FBDA03'} />
                    ))}
                </span>
            </span>
        </div>
    )
}