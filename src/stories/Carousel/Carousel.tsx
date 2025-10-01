import { useState, type FC } from "react";
import "./Carousel.css"


export interface GallerySlideImageItem {
    image: string,
    altText: string
}

export interface CarouselProps {
    title: string,
    desc: string,
    slides: GallerySlideImageItem[]
}

export const Carousel: FC<CarouselProps> = (props) => {
    const slides = props.slides;
    const [currentIndex, setIndex] = useState<number>(0)

    const getVisibleSlides = () => {
        const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
        const nextIndex = (currentIndex + 1) % slides.length;

        return [
            { ...slides[prevIndex], position: "" },
            { ...slides[currentIndex], position: "spotlight" },
            { ...slides[nextIndex], position: "" }
        ]
    }

    const showNext = () => {

        setIndex((previous) => (previous + 1) % slides.length)
    }

    const showPrev = () => {
        setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };


    return (
        <div className="carousel">
            <div className="carousel__info">
                <h2 className="carousel__header">{props.title}</h2>
                <p className="carousel__para">{props.desc}</p>
                <div className="carousel__nav">
                    <button className="carousel__nav-button" onClick={() => showPrev()}><svg width="24px" height="24px" viewBox="-19.04 0 75.803 75.803" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Group_64" data-name="Group 64" transform="translate(-624.082 -383.588)"> <path id="Path_56" data-name="Path 56" d="M660.313,383.588a1.5,1.5,0,0,1,1.06,2.561l-33.556,33.56a2.528,2.528,0,0,0,0,3.564l33.556,33.558a1.5,1.5,0,0,1-2.121,2.121L625.7,425.394a5.527,5.527,0,0,1,0-7.807l33.556-33.559A1.5,1.5,0,0,1,660.313,383.588Z" fill="#ffffff"></path> </g> </g></svg></button>
                    <button className="carousel__nav-button" onClick={() => showNext()}><svg width="24px" height="24px" viewBox="-19.04 0 75.804 75.804" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Group_65" data-name="Group 65" transform="translate(-831.568 -384.448)"> <path id="Path_57" data-name="Path 57" d="M833.068,460.252a1.5,1.5,0,0,1-1.061-2.561l33.557-33.56a2.53,2.53,0,0,0,0-3.564l-33.557-33.558a1.5,1.5,0,0,1,2.122-2.121l33.556,33.558a5.53,5.53,0,0,1,0,7.807l-33.557,33.56A1.5,1.5,0,0,1,833.068,460.252Z" fill="#ffffff"></path> </g> </g></svg></button>
                </div>
            </div>
            <div className="carousel-wheel" >
                {
                    getVisibleSlides().map((slide, index) => (
                        <div key={index} className={"carousel-image carousel-image__" + slide.position}>
                            {slide.position == "spotlight" ? <div className="carousel-image__nav">

                                {slides.map((_, item) => {
                                    return (<span className={"carousel-image__index " + (item == currentIndex ? "carousel-image__index--selected" : null)}></span>)
                                })}
                            </div> : null}
                            <img src={slide.image} />


                        </div>))}
            </div>
            <div className="carousel__nav--small-mobile">
                <button className="carousel__nav-button" onClick={() => showPrev()}><svg width="24px" height="24px" viewBox="-19.04 0 75.803 75.803" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Group_64" data-name="Group 64" transform="translate(-624.082 -383.588)"> <path id="Path_56" data-name="Path 56" d="M660.313,383.588a1.5,1.5,0,0,1,1.06,2.561l-33.556,33.56a2.528,2.528,0,0,0,0,3.564l33.556,33.558a1.5,1.5,0,0,1-2.121,2.121L625.7,425.394a5.527,5.527,0,0,1,0-7.807l33.556-33.559A1.5,1.5,0,0,1,660.313,383.588Z" fill="#ffffff"></path> </g> </g></svg></button>
                <button className="carousel__nav-button" onClick={() => showNext()}><svg width="24px" height="24px" viewBox="-19.04 0 75.804 75.804" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Group_65" data-name="Group 65" transform="translate(-831.568 -384.448)"> <path id="Path_57" data-name="Path 57" d="M833.068,460.252a1.5,1.5,0,0,1-1.061-2.561l33.557-33.56a2.53,2.53,0,0,0,0-3.564l-33.557-33.558a1.5,1.5,0,0,1,2.122-2.121l33.556,33.558a5.53,5.53,0,0,1,0,7.807l-33.557,33.56A1.5,1.5,0,0,1,833.068,460.252Z" fill="#ffffff"></path> </g> </g></svg></button>
            </div>
        </div>
    )
}