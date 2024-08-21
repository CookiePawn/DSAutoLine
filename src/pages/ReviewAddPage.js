import React, { useState } from "react";
import GNB from "../components/GNB";
import Footer from "../components/Footer";
import FastFAQSticky from '../components/FastFAQSticky'
import '../styles/ReviewAddPage.css'
import { StarIcon } from "../components/Icons";
import { ReviewAddPagePopUp } from "../components/PopUp";
import { reviewAddAxios } from "../services/Request";





const ReviewAddPage = () => {
    const [popupStat, setPopupStat] = useState(false)

    //insert
    const [name, setName] = useState('')
    const [car, setCar] = useState('')
    const [enter, setEnter] = useState('기아')
    const [starStat, setStarStat] = useState(0)
    const [img, setImg] = useState('K5')
    const [comment, setComment] = useState('')


    const clickFunction = async () => {
        await reviewAddAxios({
            car_name: car,
            enter: enter,
            name: name,
            img: img,
            star: starStat,
            comment: comment,
        })
        setPopupStat(true);
        document.body.style.overflowY = 'hidden'
    }





    const [imagePreviewUrl, setImagePreviewUrl] = useState('');

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const img = new Image();
        img.src = URL.createObjectURL(file);

        img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            // Set the desired aspect ratio
            const aspectRatio = 4 / 3;
            let newWidth, newHeight;

            if (img.width / img.height > aspectRatio) {
                // Wider than desired aspect ratio
                newWidth = img.height * aspectRatio;
                newHeight = img.height;
            } else {
                // Taller or equal to desired aspect ratio
                newWidth = img.width;
                newHeight = img.width / aspectRatio;
            }

            // Set canvas size to the new dimensions
            canvas.width = newWidth;
            canvas.height = newHeight;

            // Draw the image on the canvas with the new size
            ctx.drawImage(img, 0, 0, newWidth, newHeight);

            // Convert the canvas to a PNG data URL
            const pngUrl = canvas.toDataURL('image/png');
            setImagePreviewUrl(pngUrl);

            // Send the PNG data URL to the server to save the image
            uploadImageToServer(pngUrl);
        };
    };

    const uploadImageToServer = async (pngUrl) => {
        // Convert data URL to Blob
        const response = await fetch(pngUrl);
        const blob = await response.blob();

        // Create a FormData object to send the image data
        const formData = new FormData();
        formData.append('file', blob, 'uploaded_image.png');

        // Use fetch or axios to send the image to the server
        fetch('/upload', {
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
    };


















    return (
        <>
            {popupStat &&
                <ReviewAddPagePopUp />
            }
            <GNB page={'고객 리뷰'} />
            <FastFAQSticky height={450} />
            <section className="reviewAdd_inputSection">
                <h1>리뷰 작성</h1>
                <p>서비스가 어떠셨나요?? 리뷰로 알려주세요</p>
                <span>
                    <h3>이름</h3>
                    <input value={name} onChange={(e) => setName(e.target.value)} />
                </span>
                <span>
                    <h3>차량명</h3>
                    <input value={car} onChange={(e) => setCar(e.target.value)} />
                </span>
                <span>
                    <h3>별점</h3>
                    {Array.from({ length: 5 }, (_, index) => (
                        <span onClick={() => setStarStat(index + 1)}>
                            <StarIcon
                                key={index}
                                size={31}
                                color={index < starStat ? '#FBDA03' : '#9FA5AB'}
                            />
                        </span>
                    ))}
                </span>
                <span>
                    <h3>사진</h3>
                    <img
                        src={require('../assets/img/popup/imageUpload.png')}
                        alt="이미지 업로드 이미지"
                        onClick={() => document.getElementById('fileInput').click()}
                    />
                    <input
                        id="fileInput"
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={handleImageUpload}
                    />
                </span>
                <span>
                    <h3>내용</h3>
                    <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
                </span>
                <button onClick={clickFunction}>작성 완료</button>
            </section>
            <Footer />
        </>
    )
}


export default ReviewAddPage