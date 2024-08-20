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
 * 리뷰 페이지
 * @returns 
 */
export const reviewAxios = async () => {
    try {
        const response = await axios.get(`${dbServerUrl}/review`)
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


/**
 * 리뷰 작성 페이지
 * @returns 
 */
export const reviewAddAxios = async (data) => {
    try {
        await axios.post(`${dbServerUrl}/reviewInsert`, data)
    } catch (error) {
        console.log(error)
    }
}





/**
 * 빠른 간편 문의 페이지
 * @returns 
 */
export const quickFAQAxios = async (entry, enter, category) => {
    let response;
    try {
        if (entry === null && enter === null && category === null) {
            response = await axios.get(`${dbServerUrl}/quickFAQ?entry=&enter=${'현대'}&category=`)
        } else if (category === '전체' && enter === 'all') {
            response = await axios.get(`${dbServerUrl}/quickFAQ?entry=${entry}&enter=&category=`)
        } else if (category === '전체') {
            response = await axios.get(`${dbServerUrl}/quickFAQ?entry=${entry}&enter=${enter}&category=`)
        } else if (enter === 'all') {
            response = await axios.get(`${dbServerUrl}/quickFAQ?entry=${entry}&enter=&category=${category}`)
        } else {
            response = await axios.get(`${dbServerUrl}/quickFAQ?entry=${entry}&enter=${enter}&category=${category}`)
        }
        return response.data
    } catch (error) {
        console.log(error)
    }
}



/**
 * 이벤트 페이지
 * @returns 
 */
export const eventAxios = async (stat) => {
    try {
        const response = await axios.get(`${dbServerUrl}/event?type=${stat}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}


/**
 * 이벤트 상세 페이지
 * @returns 
 */
export const eventInfoAxios = async (id) => {
    try {
        const response = await axios.get(`${dbServerUrl}/event/${id}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}



/**
 * 빠른 간편 상담
 * @returns 
 */
export const fastFAQAxios = async (data) => {
    try {
        await axios.post(`${dbServerUrl}/counseling`, data)
    } catch (error) {
        console.log(error)
    }
}




/**
 * 즉시 출고 - 견적서
 * @returns 
 */
export const estimatedAxios = async (id) => {
    try {
        const response = await axios.get(`${dbServerUrl}/estimate/${id}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}