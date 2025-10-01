import type { FC } from "react";
import { RelatedContentItem, type RelatedContentItemProps } from "../RelatedContentItem/RelatedContentItem";
import '../RelatedContent/RelatedContent.css'



interface RelatedContentProps {
    title: string,
    callToActionText: string,
    callToActionLink: string,
    cards: RelatedContentItemProps[]
}

export const RelatedContent: FC<RelatedContentProps> = (props) => {

const renderCards=()=>
{
    return props.cards.map((card)=>
        {
            return (<RelatedContentItem date={card.date} title={card.title} description={card.description} image={card.image} imageAlt={card.imageAlt} tags={card.tags}   />)
        })
}

    return (

        <div className="related-content">

            <div className="related-content__header">
                <h3 className="related-content__title">{props.title}</h3>
                    <a className="related-content__button" href={props.callToActionLink}>{props.callToActionText}</a>
            </div>
            <hr className="related-content__divider"></hr>
            <div className="related-content__cards">
                {renderCards() }
            </div>
            
        </div>

    )
}