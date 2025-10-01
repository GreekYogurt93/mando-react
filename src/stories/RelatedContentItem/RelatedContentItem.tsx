import { useState, type FC } from "react";

import "./RelatedContentItem.css"


export interface RelatedContentItemProps {
    date: string,
    title: string,
    description: string,
    image: string,
    imageAlt: string,
    tags: string[]
}


export const RelatedContentItem: FC<RelatedContentItemProps> = (props) => {
    const [expand,setExpand]=useState<boolean>(false)

    const truncateText=()=>
    {
        if (props.description.length > 100 && !expand) {
            return props.description.slice(0, 100) + "..."

        }
        else
            return props.description
    }



    return (
        <div className="related-item-container"
        onMouseEnter={()=>setExpand(true)} onMouseLeave={()=>setExpand(false)}
        >
            <div className={["related-item-container__image"].join("")}>
                <img src={props.image} alt={props.imageAlt} />

            </div>
            <div className={["related-item-container__Info",expand?"related-item-container__Info--expanded":null].join(" ")} >
                <span className="related-item-container__date">{props.date}</span>
                <hr className="related-item-container__divider"></hr>
                <h3 className="related-item-container__heading">{props.title}</h3>
                <hr className="related-item-container__divider"></hr>
                <div className="related-item-container__info-container">
                <p className="related-item-container__desc">{truncateText()}</p>
                <div className={["related-item-container__tags",expand==true?"--visible":""].join("")}>
                    {props.tags.map((item, index) => {
                        return <span key={index} className="related-item-container__tag">{item}</span>
                    })}
                </div>
                </div>
            </div>

        </div>
    )
}