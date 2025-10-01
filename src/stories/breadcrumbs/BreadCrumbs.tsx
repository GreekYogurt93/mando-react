import type { FC } from "react";
import './breadcrumbs.css'


interface ParentPageItem {
    link: string,
    label: string
}

interface BreadCrumbProps {
    pages: ParentPageItem[],
    homePageLink: string,
    homePageScreenReaderText: string,
    currentPageLabel: string

}


export const BreadCrumbs: FC<BreadCrumbProps> = (props) => {

    function renderCrumbs() {
        let pages: ParentPageItem[] = props.pages;

        if (props.pages.length > 2) {
            pages = props.pages.slice(-2)

        }

        return pages.map((item, index) => {
            return (<>
                <li key={index}><a className="breadcrumbs__link" href={item.link}>{item.label}</a></li>
                <li>{">"}</li>
            </>
            )
        })
    }

    return (
        <nav className="breadcrumbs" aria-label="Breadcrumb">
            <ul className="breadcrumbs__list">
                <li><a className="breadcrumbs__link" href={props.homePageLink} title={props.homePageScreenReaderText}><svg width="15px" height="15px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z" fill="#ffffff"></path> </g></svg></a></li>
                <li className="breadcrumbs__seperator sm-hidden">{">"}</li>
                
                    <li className="breadcrumbs__seperator sm-show">....</li>
                    <li className="breadcrumbs__seperator sm-show">{">"}</li>
                
                <div className="breadcrumbs__list sm-hidden " >
                    {renderCrumbs()}
                </div>
                

                <li><a className="breadcrumbs__link-current" href="">{props.currentPageLabel}</a></li>
            </ul>


        </nav>
    )
}