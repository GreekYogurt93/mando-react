import React from 'react';

import './page.css';
import { Header } from './header/Header';
import logo from '../stories/assets/cips-logo.svg'
import { BreadCrumbs } from './breadcrumbs/BreadCrumbs';
import { PageTitle } from './PageTitle/PageTitle';

import image from '../../public/clouds2.jpg'
import { RelatedContent } from './RelatedContent/RelatedContent';
import { Carousel } from './Carousel/Carousel';
import carousel1 from "../stories/assets/carousel1.jpg"
import carousel2 from "../stories/assets/carousel2.jpg"
import carousel3 from "../stories/assets/carousel3.jpg"



export const Page: React.FC = () => {

  return (

    <div className='wrapper' >
      <Header Link1={{
        "LinkLabel": "About us",
        "LinkUrl": "/aboutus"
      }}
        Link2={{
          "LinkLabel": "Contact",
          "LinkUrl": "/contact"
        }} SiteLogo={logo} SiteLogoAlt={'CIP Logo'} SiteLogoUrl={logo} SiteLogoScreenReadText={'CIP Logo'} MobileMenuLabel={'Menu'}>

      </Header>
      <BreadCrumbs pages={[{label:"About us",link:"/About-Us"},{label:"Meet the team",link:"/team"},{label:"Leadership",link:"/leadership"}]} homePageLink={'/'} homePageScreenReaderText={'Home Page'} currentPageLabel={'Weekly forecast'}      
      />
      <PageTitle title={'Page Title'} description={'HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects such as interactive forms may be embedded into the rendered page. '} image={image} imageAlt={'some clouds'}           
      />

      <Carousel title={"Page title"}
        desc={"HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects such as interactive forms may be embedded into the rendered page. "}
        slides={[{
            image: carousel1,
            altText: ""
        },{
            image: carousel2,
            altText: ""
        },{
            image: carousel3,
            altText: ""
        },{
            image: carousel3,
            altText: ""
        },{
            image: carousel3,
            altText: ""
        }]} />

      <RelatedContent title={'HTML elements are the building blocks of HTML pages'} callToActionText={'CTA BUTTON'} callToActionLink={'/'} cards={[ {
        date:"01/12/2026",
        title:"Lorem ipsum dolor sit amet consectet",
        description:"This is what this should look like when the card is hovered. We would remove the ellipsis and show the tags.",
        image:image,
        imageAlt:"A calm sky",
        tags:["forecast","rain","meteo"]
      }, {
        date:"01/12/2026",
        title:"Lorem ipsum dolor sit amet consectet",
        description:"This is what this should look like when the card is hovered. We would remove the ellipsis and show the tags.",
        image:image,
        imageAlt:"A calm sky",
        tags:["forecast","rain","meteo"]
      }, {
        date:"01/12/2026",
        title:"Lorem ipsum dolor sit amet consectet",
        description:"This is what this should look like when the card is hovered. We would remove the ellipsis and show the tags.",
        image:image,
        imageAlt:"A calm sky",
        tags:["forecast","rain","meteo"]
      }]}

      />


    </div>
  );
};
