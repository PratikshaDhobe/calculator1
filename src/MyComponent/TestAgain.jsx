import React, { useState } from 'react'
import image1 from './images/image1.jpg'
import image2 from './images/images2.jpg'
import image3 from './images/image3.jpg'
import image4 from './images/images4.jpg'
import image5 from './images/image5.jpg'

const TestAgain = () => {
    const imgArray = [image1, image2, image3, image4, image5];
    const [currentImage, setCurrentImage] = useState(0);

    const displayNextImage = () => {
        if (currentImage == imgArray.lenght -1) {
            setCurrentImage(0);
        } else {
            setCurrentImage(currentImage + 1)
        }
    }
    const displayPrevImage = () => {
        if (currentImage == 0) {
            setCurrentImage(imgArray.lenght - 1);
        } else {
            setCurrentImage(currentImage - 1)
        }
    }

    return (
         <div className='vw-100 vh-50 d-flex justify-content-center align-items-center'>
            <div className='button'>
                <button className='btn btn-primary btn-lg' onClick={() => displayPrevImage()}>Prev</button>
            </div>

            <div className='image-container w-75'>
                <img src={imgArray[currentImage]} alt="image1" height="450px" width="90%" />
            </div>

            <div className='button'>
                <button className='btn btn-primary btn-lg' onClick={() => displayNextImage()}>Next</button>
            </div>

         </div>
    )
}

export default TestAgain
