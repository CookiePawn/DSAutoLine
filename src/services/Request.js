import React, { useEffect, useState } from 'react';
import axios from 'axios';



/**
 * 한정 특가 페이지 데이터 요청
 * @returns 
 */
export const hotDealAxios = async () => {
    try {
        const response = await axios.get('http://15.165.235.73:3000/hotDeal')
        return response.data
    } catch (error) {
        console.log(error)
    }
}





/**
 * 즉시 출고 페이지 데이터 요청
 * @returns 
 */
export const quickDealAxios = async (entry, enter, category) => {
    let response;
    try {
        if (entry === null && enter === null && category === null) {
            response = await axios.get('http://15.165.235.73:3000/quickDeal?entry=&enter=&category=')
        } else if (category === '전체' && enter === 'all') {
            response = await axios.get(`http://15.165.235.73:3000/quickDeal?entry=${entry}&enter=&category=`)
        } else if (category === '전체') {
            response = await axios.get(`http://15.165.235.73:3000/quickDeal?entry=${entry}&enter=${enter}&category=`)
        } else if (enter === 'all') {
            response = await axios.get(`http://15.165.235.73:3000/quickDeal?entry=${entry}&enter=&category=${category}`)
        } else {
            response = await axios.get(`http://15.165.235.73:3000/quickDeal?entry=${entry}&enter=${enter}&category=${category}`)
        }
        return response.data
    } catch (error) {
        console.log(error)
    }
}





/**
 * 리뷰 상세 페이지
 * @returns 
 */
export const reviewInfoAxios = async (nid) => {
    try {
        const response = await axios.get(`http://15.165.235.73:3000/review/${nid}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}




