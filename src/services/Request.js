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
            response = await axios.get(`${dbServerUrl}/quickFAQ?entry=&enter=&category=`)
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

/**
 * 즉시 출고 - 견적서 추가
 * @returns 
 */
export const estimatedAddAxios = async (data) => {
    try {
        const response = await axios.post(`${dbServerUrl}/estimateInsert`, data)
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}




/**
 * 리뷰 작성 페이지 - 차량 이름과 기업 이름 로드
 * @returns 
 */
export const carEnterListAxios = async () => {
    try {
        const response = await axios.get(`${dbServerUrl}/reviewSelect`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}




/**
 * 이미지 업로드
 * @returns 
 */
export const imageUploadAxios = async (pngUrl, imgName) => {
    // Convert data URL to Blob
    const response = await fetch(pngUrl);
    const blob = await response.blob();

    // Create a FormData object to send the image data
    const formData = new FormData();
    formData.append('file', blob, `${imgName}.png`);

    // Use fetch or axios to send the image to the server
    fetch(`${process.env.REACT_APP_DB_SERVER_URL}/image`, {
        method: 'POST',
        body: formData,
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Image uploaded successfully:', data);
        })
        .catch((error) => {
            console.error('Error uploading image:', error);
        });
}