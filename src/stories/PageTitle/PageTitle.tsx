import type { FC } from "react"
import "./PageTitle.css"

interface PageTitleProps {
    title: string,
    description: string,
    image: string,
    imageAlt: string
}

export const PageTitle: FC<PageTitleProps> = (props) => {



    return (
        <section className="page-title">
            <div className="page-title__content">
                <h1 className="page-title__heading">{props.title}</h1>
                <p className="page-title__content-para">{props.description} </p>
            </div>
            <div className="page-title__image-holder">
                <img className="page-title__image" alt={props.imageAlt} src={props.image} />
            </div>

        </section>
    )
}