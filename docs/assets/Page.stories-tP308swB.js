import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-Dgxn9h8j.js";import{H as m,l as i}from"./cips-logo-BTsTFvM1.js";import{B as u}from"./BreadCrumbs-BYZ5pGZn.js";import{P as d}from"./PageTitle-D3zZvjl7.js";import{R as g}from"./RelatedContent-CG4fOIds.js";import"./preload-helper-PPVm8Dsz.js";import"./RelatedContentItem-BSzyd6nW.js";const t=""+new URL("clouds2-Cv58y48G.jpg",import.meta.url).href,l=()=>e.jsxs("div",{className:"wrapper",children:[e.jsx(m,{Link1:{LinkLabel:"About us",LinkUrl:"/aboutus"},Link2:{LinkLabel:"Contact",LinkUrl:"/contact"},SiteLogo:i,SiteLogoAlt:"CIP Logo",SiteLogoUrl:i,SiteLogoScreenReadText:"CIP Logo",MobileMenuLabel:"Menu"}),e.jsx(u,{pages:[{label:"About us",link:"/About-Us"},{label:"Meet the team",link:"/team"},{label:"Leadership",link:"/leadership"}],homePageLink:"/",homePageScreenReaderText:"Home Page",currentPageLabel:"Weekly forecast"}),e.jsx(d,{title:"Page Title",description:"HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects such as interactive forms may be embedded into the rendered page. ",image:t,imageAlt:"some clouds"}),e.jsx(g,{title:"HTML elements are the building blocks of HTML pages",callToActionText:"CTA BUTTON",callToActionLink:"/",cards:[{date:"01/12/2026",title:"Lorem ipsum dolor sit amet consectet",description:"This is what this should look like when the card is hovered. We would remove the ellipsis and show the tags.",image:t,imageAlt:"A calm sky",tags:["forecast","rain","meteo"]},{date:"01/12/2026",title:"Lorem ipsum dolor sit amet consectet",description:"This is what this should look like when the card is hovered. We would remove the ellipsis and show the tags.",image:t,imageAlt:"A calm sky",tags:["forecast","rain","meteo"]},{date:"01/12/2026",title:"Lorem ipsum dolor sit amet consectet",description:"This is what this should look like when the card is hovered. We would remove the ellipsis and show the tags.",image:t,imageAlt:"A calm sky",tags:["forecast","rain","meteo"]}]})]});l.__docgenInfo={description:"",methods:[],displayName:"Page"};const{expect:n,userEvent:h,within:p}=__STORYBOOK_MODULE_TEST__,x={title:"Example/Page",component:l,parameters:{layout:"fullscreen"}},o={play:async({canvasElement:r})=>{const s=p(r),a=s.getByRole("button",{name:/Log in/i});await n(a).toBeInTheDocument(),await h.click(a),await n(a).not.toBeInTheDocument();const c=s.getByRole("button",{name:/Log out/i});await n(c).toBeInTheDocument()}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole('button', {
      name: /Log in/i
    });
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
    await expect(loginButton).not.toBeInTheDocument();
    const logoutButton = canvas.getByRole('button', {
      name: /Log out/i
    });
    await expect(logoutButton).toBeInTheDocument();
  }
}`,...o.parameters?.docs?.source}}};const y=["Default"];export{o as Default,y as __namedExportsOrder,x as default};
