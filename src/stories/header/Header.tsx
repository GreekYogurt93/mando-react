import { useState, type FC } from "react"
import './header.css'

interface Link {
    LinkLabel: string,
    LinkUrl: string,
}

interface HeaderProps {
    Link1: Link
    Link2: Link
    SiteLogo: string,
    SiteLogoAlt: string,
    SiteLogoUrl: string,
    SiteLogoScreenReadText: string,
    MobileMenuLabel: string

}

export const Header: FC<HeaderProps> = (props) => {
    const [mobileToggle, setMobileToggle] = useState<boolean>(false)


    return (
        <>
            <header className="header">
                <a href="/" aria-label="homepage">
                    <img className="header__logo" alt={props.SiteLogoScreenReadText} src={props.SiteLogoUrl}></img>
                </a>
                <nav className="header__links-container">

                    <a className="header__link" href={props.Link1.LinkUrl}>{props.Link1.LinkLabel}</a>
                    <a className="header__link" href={props.Link2.LinkUrl}>{props.Link2.LinkLabel}</a>
                </nav>

                <div className="header__mobile-menu"
                    onClick={() => {
                        setMobileToggle(!mobileToggle)
                    }
                    }
                >
                    <span className="mobile-header-label">Menu</span>
                    <button className="header__hamburger" name="mobile menu" aria-label="open mobile menu">
                        <span className={["header__hamburger-line"," header__hamburger-line",mobileToggle?"--rotate45d":null].join("")}></span>
                        <span className={["header__hamburger-line",mobileToggle?"--hidden":null].join("")}></span>
                        <span className={["header__hamburger-line"," header__hamburger-line",mobileToggle?"--rotatem45d":null].join("")}></span>
                    </button>
                </div>


            </header>
            <div className={["header__links-container-mobile", mobileToggle ? "-active" : ""].join("")}>
                <a className="header__link" href={props.Link1.LinkUrl}>{props.Link1.LinkLabel}</a>
                <a className="header__link" href={props.Link2.LinkUrl}>{props.Link2.LinkLabel}</a>

            </div>
        </>
    )
}