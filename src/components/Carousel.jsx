import { useState } from "react"
import { slideStyles, sliderStyles, leftArrowStyles, rightArrowStyles, numberPictures } from "../styles/Carousel/carousel";

function Carousel({ pictures }) {

    const [currentIndex, setCurrentIndex] = useState(0);

    // Fonction pour la flèche "précédent"
     const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? pictures.length -1 : currentIndex -1;
        setCurrentIndex(newIndex);
     }

     // Fonction pour la flèche "suivant"
     const goToNext = () => {
        const isLastIndex =  currentIndex === pictures.length - 1;
        const newIndex = isLastIndex ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);

     }

     // Je reprends le style on injectant une valeur dynamique
     const slideStylesWithBackground = {
        ...slideStyles,
        backgroundImage: `url(${pictures[currentIndex]}`
     }

     // Je prends le style des flèches en vérifiant si l'index est le premier / dernier pour enlever la flèche correspondante
     const verifyRightArrow = {
        ...rightArrowStyles,
        display: currentIndex === pictures.length - 1 ? "none" : "flex"
     }

     const verifyLeftArrow = {
        ...leftArrowStyles,
        display: currentIndex === 0 ? "none" : "flex"
     }

    return (
        <div style={ sliderStyles }>
            <div style={ numberPictures } className="carousel__counter">{`${currentIndex + 1}/${pictures.length}`}</div>
            <div style={ verifyLeftArrow } onClick={goToPrevious}>
                <svg width="48" height="50" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
                </svg>

            </div>
            <div style={ verifyRightArrow } onClick={goToNext}>
                <svg width="48" height="50" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/>
                </svg>
            </div>
            <div style={ slideStylesWithBackground }></div>
        </div>
        
    )
}


export default Carousel