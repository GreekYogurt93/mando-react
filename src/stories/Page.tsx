import React from 'react';

import './page.css';
import { Header } from './header/Header';
import logo from '../stories/assets/cips-logo.svg'
import { BreadCrumbs } from './breadcrumbs/BreadCrumbs';
import { PageTitle } from './PageTitle/PageTitle';

import image from '../../public/clouds2.jpg'
import { RelatedContent } from './RelatedContent/RelatedContent';



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
