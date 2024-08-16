import axios from 'axios';


const dbServerUrl = process.env.REACT_APP_DB_SERVER_URL;



/**
 * 한정 특가 페이지 데이터 요청
 * @returns 
 */
export const hotDealAxios = async () => {
    try {
        const response = await axios.get(`${dbServerUrl}/hotDeal`)
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
            response = await axios.get(`${dbServerUrl}/quickDeal?entry=&enter=&category=`)
        } else if (category === '전체' && enter === 'all') {
            response = await axios.get(`${dbServerUrl}/quickDeal?entry=${entry}&enter=&category=`)
        } else if (category === '전체') {
            response = await axios.get(`${dbServerUrl}/quickDeal?entry=${entry}&enter=${enter}&category=`)
        } else if (enter === 'all') {
            response = await axios.get(`${dbServerUrl}/quickDeal?entry=${entry}&enter=&category=${category}`)
        } else {
            response = await axios.get(`${dbServerUrl}/quickDeal?entry=${entry}&enter=${enter}&category=${category}`)
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
        const response = await axios.get(`${dbServerUrl}/review/${nid}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}




