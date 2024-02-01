/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, m as maybeRenderHead, s as spreadAttributes, f as renderSlot, g as renderComponent, h as renderHead, u as unescapeHTML, A as AstroError, i as UnknownContentCollectionError, j as renderUniqueStylesheet, k as renderScriptElement, l as createHeadAndContent } from './astro_xFUflSn8.mjs';
/* empty css                         */
/* empty css                          */
/* empty css                            */
/* empty css                            */
import qs from 'qs';
import rss from '@astrojs/rss';
import { p as prependForwardSlash } from './astro/assets-service_ThUXqMvN.mjs';

const SITE_TITLE = "Astro Blog";
const SITE_DESCRIPTION = "Welcome to my website!";

const $$Astro$k = createAstro("https://emgui.de");
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = "/blog-placeholder-1.jpg" } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}>`;
}, "/Users/revnandi/Documents/Repos/em-site/src/components/BaseHead.astro", void 0);

const $$Astro$j = createAstro("https://emgui.de");
const $$HeaderLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { href, class: className, ...props } = Astro2.props;
  const { pathname } = Astro2.url;
  const isActive = href === pathname || href === pathname.replace(/\/$/, "");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([className, "w-fit h-fit text-white lg:text-dark -ml-3 px-3 py-2 text-3xl lg:text-base lg:leading-3 font-semibold lg:hover:text-accent", { "border-white lg:border-accent border-3 rounded-menu": isActive }], "class:list")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/Users/revnandi/Documents/Repos/em-site/src/components/HeaderLink.astro", void 0);

const $$Astro$i = createAstro("https://emgui.de");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="fixed z-20 flex w-full mx-auto bg-white lg:container lg:relative lg:bg-transparent"> <nav class="flex items-center justify-between w-full px-4 py-8"> <!-- <h2><a href="/">{SITE_TITLE}</a></h2> --> <a href="/"> <svg class="w-32 h-auto lg:w-40" viewBox="0 0 160 53" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M160 0H141.007C138.126 2.5075 139.887 5.70856 142.394 5.70856H146.342L125.322 26.7289L98.5929 0L71.864 26.7289L45.1351 0L5.70858 39.4265V33.7713C3.20107 30.8903 0 32.6509 0 35.1584V52.8176H18.993C21.874 50.3101 20.1134 47.109 17.6059 47.109H13.6045L34.6249 26.0887L61.3538 52.8176L67.1691 47.0023L88.0827 26.0887L114.812 52.8176L154.291 13.3378V19.0463C156.799 21.9273 160 20.1667 160 17.6592V0Z" fill="#FF6EB7"></path> </svg> </a> <button id="em_navigation_button" class="relative z-20 w-8 h-8 lg:hidden"> <span class="sr-only">Open main menu</span> <div class="block w-8"> <span aria-hidden="true" class="block absolute h-0.5 w-8 bg-dark transform transition duration-500 ease-in-out -translate-y-1.5"></span> <span aria-hidden="true" class="block absolute h-0.5 w-8 bg-dark transform transition duration-500 ease-in-out"></span> <span aria-hidden="true" class="block absolute h-0.5 w-8 bg-dark transform transition duration-500 ease-in-out translate-y-1.5"></span> </div> </button> <div id="em_navigation" class="fixed top-0 left-0 flex flex-col w-full h-full gap-4 pt-8 pl-4 pr-4 transition-opacity ease-in-out opacity-0 pointer-events-none lg:opacity-100 -z-10 lg:z-0 lg:flex-row lg:w-auto lg:p-0 bg-accent lg:bg-transparent lg:static lg:flex lg:gap-menu lg:items-center font-display lg:pointer-events-auto"> <svg class="w-32 h-auto mb-4 lg:w-40 lg:hidden" viewBox="0 0 160 53" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M160 0H141.007C138.126 2.5075 139.887 5.70856 142.394 5.70856H146.342L125.322 26.7289L98.5929 0L71.864 26.7289L45.1351 0L5.70858 39.4265V33.7713C3.20107 30.8903 0 32.6509 0 35.1584V52.8176H18.993C21.874 50.3101 20.1134 47.109 17.6059 47.109H13.6045L34.6249 26.0887L61.3538 52.8176L67.1691 47.0023L88.0827 26.0887L114.812 52.8176L154.291 13.3378V19.0463C156.799 21.9273 160 20.1667 160 17.6592V0Z" fill="#FFF"></path> </svg> ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/about-us" }, { "default": ($$result2) => renderTemplate`about us` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/network" }, { "default": ($$result2) => renderTemplate`network` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/news" }, { "default": ($$result2) => renderTemplate`news` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/publications" }, { "default": ($$result2) => renderTemplate`publications` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/workshops" }, { "default": ($$result2) => renderTemplate`workshops` })} </div> </nav> </header>`;
}, "/Users/revnandi/Documents/Repos/em-site/src/components/Header.astro", void 0);

const $$Astro$h = createAstro("https://emgui.de");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer> <div class="bg-dark"> <div class="container mx-auto px-4 pt-12 pb-32"> <p class="text-xs max-w-md text-white">Funded by the European Union. Views and opinions expressed are however
				those of the author(s) only and do not necessarily reflect those of the
				European Union or the European Education and Culture Executive Agency (EACEA). Neither the European Union nor EACEA can be held responsible
				for them.</p> </div> </div> </footer>`;
}, "/Users/revnandi/Documents/Repos/em-site/src/components/Footer.astro", void 0);

const $$Astro$g = createAstro("https://emgui.de");
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main class="flex-grow px-8 lg:py-8 pt-28"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})}  </body></html>`;
}, "/Users/revnandi/Documents/Repos/em-site/src/layouts/BaseLayout.astro", void 0);

async function fetchApi({
  endpoint,
  query,
  wrappedByKey,
  wrappedByList
}) {
  if (endpoint.startsWith("/")) {
    endpoint = endpoint.slice(1);
  }
  let url = new URL(`${"http://localhost:1337"}/api/${endpoint}`);
  if (query) {
    const params = qs.stringify(query);
    url = new URL(url.toString() + "?" + params);
  }
  const res = await fetch(url.toString());
  console.log(url.toString());
  let data = await res.json();
  if (wrappedByKey) {
    data = data[wrappedByKey];
  }
  if (wrappedByList) {
    data = data[0];
  }
  return data;
}

const $$Astro$f = createAstro("https://emgui.de");
const $$ReadMoreButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$ReadMoreButton;
  const { label, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="bg-gray-medium px-4 py-2.5 rounded-10 font-display inline-block mt-8"${addAttribute(url, "href")}>${label}</a>`;
}, "/Users/revnandi/Documents/Repos/em-site/src/components/ReadMoreButton.astro", void 0);

const $$Astro$e = createAstro("https://emgui.de");
const $$FeaturedContent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$FeaturedContent;
  const { title, description, image, button } = Astro2.props;
  console.log(image);
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-1 gap-6 lg:gap-20 lg:grid-cols-2"> <div class="aspect-square"> <svg class="w-full h-auto" viewBox="0 0 508 508" preserveAspectRatio="xMinYMin slice"> <defs> <mask id="mask"> <path d="M506 2V435.629C506 496.865 427.502 539.831 365.636 469.397V328.592L188.165 506H2L2 309.881L169.454 142.427H72.371C11.135 142.364 -31.831 63.929 38.666 2L506 2Z" fill="#FFFFFF"></path> </mask> </defs> <image class="absolute top-0 left-0 w-full h-full" mask="url(#mask)" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://picsum.photos/seed/grilll/900/1000" x="0" y="0" width="100%" height="100%" preserveAspectRatio="xMidYMid slice"></image> <g class="frame-border" stroke="#FF6EB7" stroke-width="4" fill="none"> <path d="M506 2V435.629C506 496.865 427.502 539.831 365.636 469.397V328.592L188.165 506H2L2 309.881L169.454 142.427H72.371C11.135 142.364 -31.831 63.929 38.666 2L506 2Z" stroke-linecap="round"></path> </g> </svg> </div> <div> <h3 class="mb-8 text-2xl font-bold lg:text-4xl font-display">${title}</h3> <div class="text-xl">${unescapeHTML(description)}</div> ${button && renderTemplate`${renderComponent($$result, "ReadMoreButton", $$ReadMoreButton, { "label": button.label, "url": button.url })}`} </div> </div>`;
}, "/Users/revnandi/Documents/Repos/em-site/src/components/FeaturedContent.astro", void 0);

const $$Astro$d = createAstro("https://emgui.de");
const $$FeaturedTag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$FeaturedTag;
  const { label } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<label class="inline-block px-3 py-2 text-xs text-white rounded-lg bg-accent font-display">${label}</label>`;
}, "/Users/revnandi/Documents/Repos/em-site/src/components/FeaturedTag.astro", void 0);

const $$Astro$c = createAstro("https://emgui.de");
const $$ContentPreview = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$ContentPreview;
  const { title, featuredTag } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> ${featuredTag && renderTemplate`<div class="mb-5"> ${renderComponent($$result, "FeaturedTag", $$FeaturedTag, { "label": featuredTag.title })} </div>`} <h3 class="max-w-screen-sm font-display textl-xl lg:text-2xl">${title}</h3> </div>`;
}, "/Users/revnandi/Documents/Repos/em-site/src/components/ContentPreview.astro", void 0);

const $$Astro$b = createAstro("https://emgui.de");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Index$1;
  const networkMembers = await fetchApi({
    endpoint: "network-members",
    wrappedByKey: "data",
    query: {
      populate: "*",
      // @ts-expect-error
      pagination: {
        pageSize: 100
      }
    }
  });
  const homePageData = await fetchApi({
    endpoint: "home-page",
    wrappedByKey: "data",
    query: {
      // @ts-ignore
      populate: [
        "slide",
        "slide.image",
        "featuredContent",
        "featuredContent.image",
        "featuredContent.button"
      ]
    }
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate`${// @ts-expect-error
  homePageData.attributes.slide && // @ts-expect-error
  homePageData.attributes.slide.length > 0 && renderTemplate`${maybeRenderHead()}<section class="relative bg-no-repeat bg-cover lg:bg-contain pt-14 pb-28 mb-28 bg-carousel-background bg-[-50%] lg:bg-[160%] xl:bg-[120%]"> <div id="image-carousel" class="container relative mx-auto splide" aria-label="Beautiful Images"> <div class="absolute bottom-0 z-10 flex justify-between w-full px-6 pt-2 translate-y-full lg:pt-0 lg:-translate-y-1/2 splide__arrows lg:top-1/2"> <button class="w-16 splide__arrow splide__arrow--prev"> <svg class="h-fit" width="98" height="95" viewBox="0 0 98 95" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M2.99999 47.4705L42.4006 7.10655C47.9646 1.40645 59.0012 4.71391 58.2227 17.0289L45.4288 30.1356L77.6739 30.1415L94.5894 47.4705L76.7695 65.7261L46.3389 65.7261L55.1601 74.763C60.7185 80.4689 57.4957 91.7694 45.4631 90.9719L2.99999 47.4705Z" class="text-accent sm:text-white" stroke="currentColor" stroke-width="4" stroke-miterlimit="10"></path> </svg> </button> <button class="w-16 splide__arrow splide__arrow--next"> <svg class="h-fit" width="98" height="92" viewBox="0 0 98 92" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M94.5894 46.4706L55.1888 86.8345C49.6247 92.5346 38.5882 89.2272 39.3667 76.9121L52.1606 63.8054L19.9154 63.7996L2.99999 46.4706L20.8198 28.215L51.2504 28.215L42.4292 19.1781C36.8709 13.4721 40.0937 2.17163 52.1262 2.96917L94.5894 46.4706Z" class="text-white" stroke="currentColor" stroke-width="4" stroke-miterlimit="10"></path> </svg> </button> </div> <ul class="z-10 absolute w-full bottom-8 splide__pagination [&>li]:flex [&>li>button]:border [&>li>button]:lg:border-2 [&>li>button]:border-white [&>li>button]:w-4 [&>li>button]:lg:w-6 [&>li>button]:h-1 [&>li]:h-1 [&>li>button]:lg:h-2 [&>li]:lg:h-2 [&>li>button.is-active]:bg-white [&>li:first-child>button]:rounded-l-2xl [&>li:last-child>button]:rounded-r-2xl"></ul> <div class="splide__track"> <ul class="bg-white splide__list"> <li class="relative splide__slide"> <img loading="lazy" src="https://picsum.photos/200/300" alt="" class="w-full h-auto object-cover aspect-[5/4] lg:aspect-[9/4]"> <a href="#" class="absolute inline-block px-10 bottom-14 lg:px-28 group" aria-label="Link to slide"></a> <div class="absolute inline-block px-10 bottom-14 lg:px-28"> <h4 class="text-2xl leading-normal text-white lg:text-4xl font-display">
tatatkasngkas kasngnk asnkg
</h4> </div> </li> <li class="relative splide__slide"> <img loading="lazy" src="https://picsum.photos/seed/lol/600/700" alt="" class="w-full h-auto object-cover aspect-[5/4] lg:aspect-[9/4]"> </li> <li class="relative splide__slide"> <img loading="lazy" src="https://picsum.photos/seed/rofl/600/900" alt="" class="w-full h-auto object-cover aspect-[5/4] lg:aspect-[9/4]"> <a href="#" class="absolute inline-block px-10 bottom-14 lg:px-28 group" aria-label="Link to slide"> <h4 class="text-2xl leading-normal text-white transition-colors group-hover:text-accent lg:text-4xl font-display">
sadkgjsa ijagija nagn a
</h4> </a> </li> </ul> </div> </div> </section>`}${// @ts-expect-error
  homePageData.attributes.featuredContent && renderTemplate`<section class="container px-4 mx-auto mb-20"> ${renderComponent($$result2, "FeaturedContent", $$FeaturedContent, { "title": (
    // @ts-expect-error
    homePageData.attributes.featuredContent.title
  ), "description": (
    // @ts-expect-error
    homePageData.attributes.featuredContent.description
  ), "image": (
    // @ts-expect-error
    homePageData.attributes.featuredContent.image.data[0]
  ), "button": (
    // @ts-expect-error
    homePageData.attributes.featuredContent.button
  ) })} </section>`}<section class="container px-4 mx-auto mb-20"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6 lg:gap-y-14"> ${renderComponent($$result2, "ContentPreview", $$ContentPreview, { "title": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con", "featuredTag": { title: "time & money" } })} ${renderComponent($$result2, "ContentPreview", $$ContentPreview, { "title": "Ut viverra sem id egestas porttitor. Vivamus molestie turpis eu eros interdum, sed ultrices massa gravida. Suspendisse at ", "featuredTag": { title: "health & environment" } })} ${renderComponent($$result2, "ContentPreview", $$ContentPreview, { "title": "Donec ultricies enim eget luctus pellentesque. In et dui at est convallis finibus ac vitae eros. In viverra convallis quam nec imperdiet", "featuredTag": { title: "algorithms & tech" } })} ${renderComponent($$result2, "ContentPreview", $$ContentPreview, { "title": "Ectus a, eleifend fermentum arcu. Nullam et vehicula elit aliquam ", "featuredTag": { title: "time & money" } })} </div> </section> <section class="container px-4 mx-auto mb-20"> <h2 class="mb-6 text-2xl font-bold text-center md:mb-10 lg:mb-20 md:text-3xl lg:text-4xl font-display">
Network
</h2> <div class="grid flex-col items-center justify-center flex-grow grid-cols-2 gap-6 lg:gap-8 xl:gap-12 lg:flex lg:flex-row lg:flex-wrap sm:flex-row"> ${networkMembers.map((member) => {
    return renderTemplate`<div class="flex-col items-center justify-center lg:flex lg:w-[calc(25%_-_3rem)] grow-0 lg:self-end"> <div class="flex justify-center lg:mb-5 sm:inline-block aspect-[8/3]"> ${member.attributes.logo.data && renderTemplate`<img loading="lazy"${addAttribute(`${"http://localhost:1337"}${member.attributes.logo.data.attributes.url}`, "src")} alt="" class="w-auto h-auto">`} </div> <div> <h3 class="mt-auto text-xl font-normal text-center lg:text-2xl font-display"> ${member.attributes.name} </h3> </div> </div>`;
  })} </div> </section> ` })} `;
}, "/Users/revnandi/Documents/Repos/em-site/src/pages/index.astro", void 0);
const $$file$7 = "/Users/revnandi/Documents/Repos/em-site/src/pages/index.astro";
const $$url$7 = "";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$1,
	file: $$file$7,
	url: $$url$7
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$a = createAstro("https://emgui.de");
const $$AboutUs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$AboutUs;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="container px-4 mx-auto"> <!-- <div
      class="[&>p]:mb-4 [&>h3]:mb-4 [&>h3]:font-display [&>h3]:font-bold [&>h3]:text-xl"
      set:html={publication.attributes.content}
    /> --> <!-- @ts-expect-error --> ${renderComponent($$result2, "FeaturedContent", $$FeaturedContent, { "title": "Ut viverra sem id egestas porttitor. Vivamus molestie turpis eu eros interdum, sed ultrices massa gravida.", "description": "Etiam ornare, lectus sed blandit pulvinar, nisl elit efficitur augue, vel aliquam sapien mi et tortor. Vestibulum lacinia pellentesque orci non tempor. Sed auctor imperdiet tempus. Fusce a purus nisl. Morbi tristique congue luctus. Quisque quis scelerisque tellus, sagittis auctor nulla. ", "image": "https://picsum.photos/seed/picsum/200/300" })} <br> <br> <div class="[&>p]:mb-4 [&>h3]:mb-4 [&>h3]:font-display [&>h3]:font-bold [&>h3]:text-xl [&>p]:lg:text-xl"> <p>
Etiam ornare, lectus sed blandit pulvinar, nisl elit efficitur augue,
        vel aliquam sapien mi et tortor. Vestibulum lacinia pellentesque orci
        non tempor. Sed auctor imperdiet tempus. Fusce a purus nisl. Morbi
        tristique congue luctus. Quisque quis scelerisque tellus, sagittis
        auctor nulla. Aenean luctus posuere odio non placerat. Nullam eleifend
        maximus urna eu vestibulum. Quisque id sollicitudin turpis. Donec
        ullamcorper elementum interdum. Nam sagittis id felis id luctus.
</p><p>
Morbi semper urna vitae augue varius, a semper elit interdum. Donec
        auctor risus quam, ut volutpat enim semper ut. Mauris euismod auctor
        arcu, blandit posuere risus commodo ac. Nulla sit amet commodo sapien.
        Nullam urna lacus, vehicula vitae neque sit amet, mattis molestie enim.
        Sed rhoncus sodales porttitor. In laoreet volutpat arcu a accumsan.
        Curabitur vulputate lectus tortor, ac feugiat eros interdum sed. Nulla
        fringilla nunc vel nisi cursus, ut laoreet justo bibendum. Etiam vel
        interdum magna. Curabitur commodo, mauris non eleifend maximus, elit
        augue commodo augue, ac feugiat massa sapien eu turpis
</p><p>
Nulla at quam non odio venenatis commodo. Sed rutrum orci vel diam
        eleifend fringilla. Etiam vitae lacinia massa. Vestibulum est libero,
        gravida a ex id, lacinia sollicitudin ex. Phasellus eu imperdiet odio,
        sed semper libero. Curabitur sed ligula lobortis, fermentum justo nec,
        consectetur felis. Pellentesque nulla ante, hendrerit vitae massa non,
        egestas porttitor orci. Morbi dignissim feugiat ornare. Mauris tristique
        sed diam quis facilisis. Quisque nibh mauris, pellentesque vitae lectus
        ac, elementum lacinia arcu. Nam non auctor neque, vitae aliquet sem.
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean
        vitae cursus magna. Aliquam erat volutpat. Sed volutpat, nulla sit amet
        lobortis hendrerit, magna nisl hendrerit quam, ut imperdiet turpis
        mauris a nunc. Mauris eget dignissim erat, vel dictum tellus.
</p> <p></p> <div class="flex gap-8 [&>*]:basis-full my-8"> <img src="https://picsum.pho	tos/544/346" alt="" class="inline-block mb-8"> <div> <blockquote class="px-2 py-2.5 bg-accent font-display text-xl mb-4"> <p>Nulla at quam non odio venenatis</p> </blockquote> <p class="text-xl">
commodo. Sed rutrum orci vel diam eleifend fringilla. Etiam vitae
            lacinia massa. Vestibulum est libero, gravida a ex id, lacinia
            sollicitudin ex. Phasellus eu imperdiet odio, sed semper libero.
            Curabitur sed ligula lobortis, fermentum justo nec, consectetur
            felis. Pellentesque nulla ante, hendrerit vitae massa non, egestas
            porttitor orci. Morbi dignissim feugiat ornare. Mauris tristique sed
            diam quis facilisis. Quisque nibh mauris, pellentesque vitae
</p> </div> </div> <h3>
Etiam ornare, lectus sed blandit pulvinar, nisl elit efficitur augue,
        vel aliquam sapien mi et tortor?
</h3><p> <strong><em>Vestibulum:</em></strong><em>
Lacinia pellentesque orci non tempor. Sed auctor imperdiet tempus.
          Fusce a purus nisl. Morbi tristique congue luctus. Quisque quis
          scelerisque tellus, sagittis auctor nulla. Aenean luctus posuere odio
          non placerat. Nullam eleifend maximus urna eu vestibulum. Quisque id
          sollicitudin turpis. Donec ullamcorper elementum interdum. Nam
          sagittis id felis id luctus.
</em> </p><p> <strong><em>Morbi semper:</em></strong><em>
urna vitae augue varius, a semper elit interdum. Donec auctor risus
          quam, ut volutpat enim semper ut.</em> </p><p>
Mauris euismod auctor arcu, blandit posuere risus commodo ac. Nulla sit
        amet commodo sapien. Nullam urna lacus, vehicula vitae neque sit amet,
        mattis molestie enim. Sed rhoncus sodales porttitor. In laoreet volutpat
        arcu a accumsan. Curabitur vulputate lectus tortor, ac feugiat eros
        interdum sed. Nulla fringilla nunc vel nisi cursus, ut laoreet justo
        bibendum. Etiam vel interdum magna. Curabitur commodo, mauris non
        eleifend maximus, elit augue commodo augue, ac feugiat massa sapien eu
        turpis.
</p><h3>
Nulla at quam non odio venenatis commodo. Sed rutrum orci vel diam
        eleifend fringilla. Etiam vitae lacinia massa?
</h3><p> <strong><em>Vestibulum:</em></strong><em>
est libero, gravida a ex id, lacinia sollicitudin ex. Phasellus eu
          imperdiet odio, sed semper libero. Curabitur sed ligula lobortis,
          fermentum justo nec, consectetur felis. Pellentesque nulla ante,
          hendrerit vitae massa non, egestas porttitor orci. Morbi dignissim
          feugiat ornare. Mauris tristique sed diam quis facilisis. Quisque nibh
          mauris, pellentesque vitae lectus ac, elementum lacinia arcu. Nam non
          auctor neque, vitae aliquet sem. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Aenean vitae cursus magna. Aliquam erat
          volutpat. Sed volutpat, nulla sit amet lobortis hendrerit, magna nisl
          hendrerit quam, ut imperdiet turpis mauris a nunc. Mauris eget
          dignissim erat, vel dictum tellus.</em> </p><p>
Donec eu purus malesuada, vulputate neque vestibulum, iaculis nunc.
        Aenean gravida nibh nisi, at rhoncus libero rhoncus in. Mauris a gravida
        elit. Vivamus non sollicitudin metus. Proin interdum, neque vel
        sollicitudin sagittis, ipsum leo tincidunt nibh, eget sagittis tellus
        ante tempor leo. Morbi et malesuada felis.
</p><p></p> </div> </section> ` })}`;
}, "/Users/revnandi/Documents/Repos/em-site/src/pages/about-us.astro", void 0);

const $$file$6 = "/Users/revnandi/Documents/Repos/em-site/src/pages/about-us.astro";
const $$url$6 = "/about-us";

const aboutUs = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$AboutUs,
	file: $$file$6,
	url: $$url$6
}, Symbol.toStringTag, { value: 'Module' }));

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection **${collection}** does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return;
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"PUBLIC_ASSET_URL": "http://localhost:1337", "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://emgui.de", "ASSETS_PREFIX": undefined}, {})?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/first-post.md": () => import('./first-post_phd-pqHe.mjs'),"/src/content/blog/markdown-style-guide.md": () => import('./markdown-style-guide_RlPJSfcD.mjs'),"/src/content/blog/second-post.md": () => import('./second-post_LtJ8JT0H.mjs'),"/src/content/blog/third-post.md": () => import('./third-post_jN78cXQL.mjs'),"/src/content/blog/using-mdx.mdx": () => import('./using-mdx_50_hQ-Qm.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"blog":{"type":"content","entries":{"first-post":"/src/content/blog/first-post.md","markdown-style-guide":"/src/content/blog/markdown-style-guide.md","second-post":"/src/content/blog/second-post.md","third-post":"/src/content/blog/third-post.md","using-mdx":"/src/content/blog/using-mdx.mdx"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/first-post.md": () => import('./first-post_rXAEvtbH.mjs'),"/src/content/blog/markdown-style-guide.md": () => import('./markdown-style-guide_6GGqRxmL.mjs'),"/src/content/blog/second-post.md": () => import('./second-post_9vhOt6ly.mjs'),"/src/content/blog/third-post.md": () => import('./third-post_uC_TaFm2.mjs'),"/src/content/blog/using-mdx.mdx": () => import('./using-mdx_WZJq95Ni.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro$9 = createAstro("https://emgui.de");
const $$FormattedDate = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}> ${date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })} </time>`;
}, "/Users/revnandi/Documents/Repos/em-site/src/components/FormattedDate.astro", void 0);

const $$Astro$8 = createAstro("https://emgui.de");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = (await getCollection("blog")).sort(
    (a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf()
  );
  return renderTemplate`<html lang="en" data-astro-cid-5tznm7mj> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-5tznm7mj": true })}${renderHead()}</head> <body data-astro-cid-5tznm7mj> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-5tznm7mj": true })} <main data-astro-cid-5tznm7mj> <section data-astro-cid-5tznm7mj> <ul data-astro-cid-5tznm7mj> ${posts.map((post) => renderTemplate`<li data-astro-cid-5tznm7mj> <a${addAttribute(`/blog/${post.slug}/`, "href")} data-astro-cid-5tznm7mj> <img${addAttribute(720, "width")}${addAttribute(360, "height")}${addAttribute(post.data.heroImage, "src")} alt="" data-astro-cid-5tznm7mj> <h4 class="title" data-astro-cid-5tznm7mj>${post.data.title}</h4> <p class="date" data-astro-cid-5tznm7mj> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate, "data-astro-cid-5tznm7mj": true })} </p> </a> </li>`)} </ul> </section> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-5tznm7mj": true })} </body></html>`;
}, "/Users/revnandi/Documents/Repos/em-site/src/pages/blog/index.astro", void 0);

const $$file$5 = "/Users/revnandi/Documents/Repos/em-site/src/pages/blog/index.astro";
const $$url$5 = "/blog";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file$5,
	url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$7 = createAstro("https://emgui.de");
const $$BlogPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, description, pubDate, updatedDate, heroImage } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-bvzihdzo> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "data-astro-cid-bvzihdzo": true })}${renderHead()}</head> <body data-astro-cid-bvzihdzo> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-bvzihdzo": true })} <main data-astro-cid-bvzihdzo> <article data-astro-cid-bvzihdzo> <div class="hero-image" data-astro-cid-bvzihdzo> ${heroImage && renderTemplate`<img${addAttribute(1020, "width")}${addAttribute(510, "height")}${addAttribute(heroImage, "src")} alt="" data-astro-cid-bvzihdzo>`} </div> <div class="prose" data-astro-cid-bvzihdzo> <div class="title" data-astro-cid-bvzihdzo> <div class="date" data-astro-cid-bvzihdzo> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": pubDate, "data-astro-cid-bvzihdzo": true })} ${updatedDate && renderTemplate`<div class="last-updated-on" data-astro-cid-bvzihdzo>
Last updated on ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": updatedDate, "data-astro-cid-bvzihdzo": true })} </div>`} </div> <h1 data-astro-cid-bvzihdzo>${title}</h1> <hr data-astro-cid-bvzihdzo> </div> ${renderSlot($$result, $$slots["default"])} </div> </article> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-bvzihdzo": true })} </body></html>`;
}, "/Users/revnandi/Documents/Repos/em-site/src/layouts/BlogPost.astro", void 0);

const $$Astro$6 = createAstro("https://emgui.de");
async function getStaticPaths$2() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$;
  const post = Astro2.props;
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { ...post.data }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/Users/revnandi/Documents/Repos/em-site/src/pages/blog/[...slug].astro", void 0);

const $$file$4 = "/Users/revnandi/Documents/Repos/em-site/src/pages/blog/[...slug].astro";
const $$url$4 = "/blog/[...slug]";

const ____slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file$4,
	getStaticPaths: getStaticPaths$2,
	url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$5 = createAstro("https://emgui.de");
const $$Network = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Network;
  const networkMembers = await fetchApi({
    endpoint: "network-members",
    wrappedByKey: "data",
    query: {
      // @ts-ignore
      populate: ["*"],
      // @ts-ignore
      pagination: {
        pageSize: 100
      }
    }
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="space-y-20"> ${networkMembers.map((member) => {
    return renderTemplate`<section class="flex flex-col lg:flex-row sm:flex-row sm:space-x-4 lg:space-x-8"> <div class="flex justify-center flex-shrink-0 mb-6 sm:inline-block sm:mb-0"> ${member.attributes.logo.data && renderTemplate`<img loading="lazy"${addAttribute(`${"http://localhost:1337"}${member.attributes.logo.data.attributes.url}`, "src")} alt="" class="w-40 h-auto">`} </div> <div> <h1 class="text-xl font-normal lg:text-2xl font-display"> ${member.attributes.name} </h1> <div class="mt-5 lg:mt-7 [&>p]:mb-4"> <p>
Etiam ornare, lectus sed blandit pulvinar, nisl elit efficitur
                  augue, vel aliquam sapien mi et tortor. Vestibulum lacinia
                  pellentesque orci non tempor. Sed auctor imperdiet tempus.
                  Fusce a purus nisl. Morbi tristique congue luctus. Quisque
                  quis scelerisque tellus, sagittis auctor nulla.
</p> <p>
Nam sagittis id felis id luctus. Morbi semper urna vitae augue
                  varius, a semper elit interdum. Donec auctor risus quam, ut
                  volutpat enim semper ut.Mauris euismod auctor arcu, blandit
                  posuere risus commodo ac. Nulla sit amet commodo sapien.
                  Nullam urna lacus, vehicula vitae neque sit amet, mattis
                  molestie enim. Sed rhoncus sodales porttitor. In laoreet
                  volutpat arcu a accumsan. Curabitur vulputate lectus tortor,
                  ac feugiat eros interdum sed. Nulla fringilla nunc vel nisi
                  cursus, ut laoreet justo bibendum. Etiam vel interdum magna.
</p> </div> </div> </section>`;
  })} </div> ` })}`;
}, "/Users/revnandi/Documents/Repos/em-site/src/pages/network.astro", void 0);
const $$file$3 = "/Users/revnandi/Documents/Repos/em-site/src/pages/network.astro";
const $$url$3 = "/network";

const network = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Network,
	file: $$file$3,
	url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$4 = createAstro("https://emgui.de");
const $$Tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Tag;
  const { label } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="inline-block border border-dark text-xs text-dark rounded-[19px] px-2 py-1">#${label}</div>`;
}, "/Users/revnandi/Documents/Repos/em-site/src/components/Tag.astro", void 0);

const $$Astro$3 = createAstro("https://emgui.de");
async function getStaticPaths$1() {
  const tags = await fetchApi({
    endpoint: "tags",
    wrappedByKey: "data",
    query: {
      // @ts-expect-error
      populate: ["publications", "publications.featuredImage", "publications.tags"],
      // @ts-expect-error
      pagination: {
        pageSize: 9999
      }
    }
  });
  return tags.map((tag) => ({
    params: { slug: tag.attributes.slug },
    props: tag
  }));
}
const $$slug$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$slug$1;
  const tag = Astro2.props;
  console.log(tag.attributes.publications);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2 class="mb-6 text-2xl font-bold text-center md:mb-10 lg:mb-20 md:text-3xl lg:text-4xl font-display">
#${tag.attributes.title} </h2> <section class="container px-4 mx-auto"> <ul class="space-y-14 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8"> ${tag.attributes.publications.data.map((publication) => renderTemplate`<li class="leading-none"> <a${addAttribute(`/publications/${publication.attributes.slug}/`, "href")} class="inline-block aspect-[9/7] mb-5 lg:mb-4"> <img class="object-cover w-full h-full text-xl font-display"${addAttribute(
    publication.attributes.featuredImage.data.attributes.caption ?? "image",
    "alt"
  )}${addAttribute(
    "http://localhost:1337" + publication.attributes.featuredImage.data.attributes.url,
    "src"
  )} loading="lazy"> </a> <a${addAttribute(`/publications/${publication.attributes.slug}/`, "href")} class="block"> <h2 class="text-xl font-display"> ${publication.attributes.title} </h2> </a> ${publication.attributes.tags.data && publication.attributes.tags.data.length > 0 && renderTemplate`<ul class="flex flex-wrap gap-4 mt-5 lg:mt-4"> ${publication.attributes.tags.data.map((tag2) => renderTemplate`<li> ${renderComponent($$result2, "TagComponent", $$Tag, { "label": tag2.attributes.title })} </li>`)} </ul>`} </li>`)} </ul> </section> ` })}`;
}, "/Users/revnandi/Documents/Repos/em-site/src/pages/publications/tag/[slug].astro", void 0);
const $$file$2 = "/Users/revnandi/Documents/Repos/em-site/src/pages/publications/tag/[slug].astro";
const $$url$2 = "/publications/tag/[slug]";

const _slug_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$slug$1,
	file: $$file$2,
	getStaticPaths: getStaticPaths$1,
	url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro("https://emgui.de");
const $$Filter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Filter;
  const { label, value } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="inline-block px-3 py-2 text-xs text-white rounded-lg bg-accent font-display"${addAttribute(value, "href")}>${label}</a>`;
}, "/Users/revnandi/Documents/Repos/em-site/src/components/Filter.astro", void 0);

const $$Astro$1 = createAstro("https://emgui.de");
const $$Publications = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Publications;
  const filters = [
    { label: "caveo", value: "/publications/tag/Caveo-70227b9d-777e-42b8-b6ab-360d5fbd4b2d" },
    { label: "caveo", value: "/publications/tag/Caveo-70227b9d-777e-42b8-b6ab-360d5fbd4b2d" },
    { label: "caveo", value: "/publications/tag/Caveo-70227b9d-777e-42b8-b6ab-360d5fbd4b2d" },
    { label: "caveo", value: "/publications/tag/Caveo-70227b9d-777e-42b8-b6ab-360d5fbd4b2d" }
  ];
  const publications = await fetchApi({
    endpoint: "publications",
    // the content type to fetch
    wrappedByKey: "data",
    // the key to unwrap the response
    query: {
      // @ts-ignore
      populate: ["featuredImage", "tags"],
      // @ts-ignore
      pagination: {
        pageSize: 100
      }
    }
    // any query params to include
  });
  console.log(publications);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="container px-4 mx-auto"> <ul class="flex flex-wrap gap-3 mb-14"> ${filters.map((data) => renderTemplate`<li> ${renderComponent($$result2, "Filter", $$Filter, { "label": data.label, "value": data.value })} </li>`)} </ul> <ul class="space-y-14 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8"> ${publications.map((publication) => renderTemplate`<li class="leading-none"> <a${addAttribute(`/publications/${publication.attributes.slug}/`, "href")} class="inline-block aspect-[9/7] mb-5 lg:mb-4"> <img class="object-cover w-full h-full text-xl font-display"${addAttribute(
    publication.attributes.featuredImage.data.attributes.caption ?? "image",
    "alt"
  )}${addAttribute(
    "http://localhost:1337" + publication.attributes.featuredImage.data.attributes.url,
    "src"
  )} loading="lazy"> </a> <a${addAttribute(`/publications/${publication.attributes.slug}/`, "href")} class="block"> <h2 class="text-xl font-display"> ${publication.attributes.title} </h2> </a> ${publication.attributes.tags.data && publication.attributes.tags.data.length > 0 && renderTemplate`<ul class="flex flex-wrap gap-4 mt-5 lg:mt-4"> ${publication.attributes.tags.data.map((tag) => renderTemplate`<li> ${renderComponent($$result2, "Tag", $$Tag, { "label": tag.attributes.title })} </li>`)} </ul>`} </li>`)} </ul> </section> ` })}`;
}, "/Users/revnandi/Documents/Repos/em-site/src/pages/publications.astro", void 0);
const $$file$1 = "/Users/revnandi/Documents/Repos/em-site/src/pages/publications.astro";
const $$url$1 = "/publications";

const publications = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Publications,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://emgui.de");
async function getStaticPaths() {
  const publications = await fetchApi({
    endpoint: "publications",
    wrappedByKey: "data"
  });
  return publications.map((publication) => ({
    params: { slug: publication.attributes.slug },
    props: publication
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const publication = Astro2.props;
  console.log(publication);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="container px-4 mx-auto"> <h1 class="mb-8 text-2xl font-bold font-display lg:text-4xl"> ${publication.attributes.title} </h1> <div class="flex flex-wrap gap-x-5 gap-y-2.5 mb-8"> ${renderComponent($$result2, "Tag", $$Tag, { "label": "cool" })} ${renderComponent($$result2, "Tag", $$Tag, { "label": "random" })} ${renderComponent($$result2, "Tag", $$Tag, { "label": "some tag" })} ${renderComponent($$result2, "Tag", $$Tag, { "label": "super" })} ${renderComponent($$result2, "Tag", $$Tag, { "label": "something" })} </div> <div class="relative aspect-[358/280] mb-14"> <img class="absolute top-0 left-0 inline-block object-cover w-full h-full" src="https://picsum.photos/900/300" alt=""> <svg class="absolute object-cover w-full h-full text-accent" viewBox="0 0 358 280" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M358 239.543C358 274.769 313.048 299.45 277.61 258.94V178L176 280H358V239.543Z" fill="currentColor"></path> <path d="M20.9975 0H0V176L96 80.2498H40.3633C5.24268 80.2498 -19.3658 35.4028 20.9975 0Z" fill="currentColor"></path> </svg> </div> <!-- <div
      class="[&>p]:mb-4 [&>h3]:mb-4 [&>h3]:font-display [&>h3]:font-bold [&>h3]:text-xl"
      set:html={publication.attributes.content}
    /> --> <div class="[&>p]:mb-4 [&>h3]:mb-4 [&>h3]:font-display [&>h3]:font-bold [&>h3]:text-xl"> <p>
Etiam ornare, lectus sed blandit pulvinar, nisl elit efficitur augue,
        vel aliquam sapien mi et tortor. Vestibulum lacinia pellentesque orci
        non tempor. Sed auctor imperdiet tempus. Fusce a purus nisl. Morbi
        tristique congue luctus. Quisque quis scelerisque tellus, sagittis
        auctor nulla. Aenean luctus posuere odio non placerat. Nullam eleifend
        maximus urna eu vestibulum. Quisque id sollicitudin turpis. Donec
        ullamcorper elementum interdum. Nam sagittis id felis id luctus.
</p><p>
Morbi semper urna vitae augue varius, a semper elit interdum. Donec
        auctor risus quam, ut volutpat enim semper ut. Mauris euismod auctor
        arcu, blandit posuere risus commodo ac. Nulla sit amet commodo sapien.
        Nullam urna lacus, vehicula vitae neque sit amet, mattis molestie enim.
        Sed rhoncus sodales porttitor. In laoreet volutpat arcu a accumsan.
        Curabitur vulputate lectus tortor, ac feugiat eros interdum sed. Nulla
        fringilla nunc vel nisi cursus, ut laoreet justo bibendum. Etiam vel
        interdum magna. Curabitur commodo, mauris non eleifend maximus, elit
        augue commodo augue, ac feugiat massa sapien eu turpis
</p><p>
Nulla at quam non odio venenatis commodo. Sed rutrum orci vel diam
        eleifend fringilla. Etiam vitae lacinia massa. Vestibulum est libero,
        gravida a ex id, lacinia sollicitudin ex. Phasellus eu imperdiet odio,
        sed semper libero. Curabitur sed ligula lobortis, fermentum justo nec,
        consectetur felis. Pellentesque nulla ante, hendrerit vitae massa non,
        egestas porttitor orci. Morbi dignissim feugiat ornare. Mauris tristique
        sed diam quis facilisis. Quisque nibh mauris, pellentesque vitae lectus
        ac, elementum lacinia arcu. Nam non auctor neque, vitae aliquet sem.
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean
        vitae cursus magna. Aliquam erat volutpat. Sed volutpat, nulla sit amet
        lobortis hendrerit, magna nisl hendrerit quam, ut imperdiet turpis
        mauris a nunc. Mauris eget dignissim erat, vel dictum tellus.
</p> <p></p> <img src="https://picsum.photos/544/346" alt="" class="inline-block mb-8"> <p></p> <blockquote class="px-2 py-2.5 bg-accent font-display text-xl mb-4"><p>Nulla at quam non odio venenatis </p></blockquote> <h3>
Etiam ornare, lectus sed blandit pulvinar, nisl elit efficitur augue,
        vel aliquam sapien mi et tortor?
</h3><p> <strong><em>Vestibulum:</em></strong><em>
Lacinia pellentesque orci non tempor. Sed auctor imperdiet tempus.
          Fusce a purus nisl. Morbi tristique congue luctus. Quisque quis
          scelerisque tellus, sagittis auctor nulla. Aenean luctus posuere odio
          non placerat. Nullam eleifend maximus urna eu vestibulum. Quisque id
          sollicitudin turpis. Donec ullamcorper elementum interdum. Nam
          sagittis id felis id luctus.
</em> </p><p> <strong><em>Morbi semper:</em></strong><em>
urna vitae augue varius, a semper elit interdum. Donec auctor risus
          quam, ut volutpat enim semper ut.</em> </p><p>
Mauris euismod auctor arcu, blandit posuere risus commodo ac. Nulla sit
        amet commodo sapien. Nullam urna lacus, vehicula vitae neque sit amet,
        mattis molestie enim. Sed rhoncus sodales porttitor. In laoreet volutpat
        arcu a accumsan. Curabitur vulputate lectus tortor, ac feugiat eros
        interdum sed. Nulla fringilla nunc vel nisi cursus, ut laoreet justo
        bibendum. Etiam vel interdum magna. Curabitur commodo, mauris non
        eleifend maximus, elit augue commodo augue, ac feugiat massa sapien eu
        turpis.
</p><h3>
Nulla at quam non odio venenatis commodo. Sed rutrum orci vel diam
        eleifend fringilla. Etiam vitae lacinia massa?
</h3><p> <strong><em>Vestibulum:</em></strong><em>
est libero, gravida a ex id, lacinia sollicitudin ex. Phasellus eu
          imperdiet odio, sed semper libero. Curabitur sed ligula lobortis,
          fermentum justo nec, consectetur felis. Pellentesque nulla ante,
          hendrerit vitae massa non, egestas porttitor orci. Morbi dignissim
          feugiat ornare. Mauris tristique sed diam quis facilisis. Quisque nibh
          mauris, pellentesque vitae lectus ac, elementum lacinia arcu. Nam non
          auctor neque, vitae aliquet sem. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Aenean vitae cursus magna. Aliquam erat
          volutpat. Sed volutpat, nulla sit amet lobortis hendrerit, magna nisl
          hendrerit quam, ut imperdiet turpis mauris a nunc. Mauris eget
          dignissim erat, vel dictum tellus.</em> </p><p>
Donec eu purus malesuada, vulputate neque vestibulum, iaculis nunc.
        Aenean gravida nibh nisi, at rhoncus libero rhoncus in. Mauris a gravida
        elit. Vivamus non sollicitudin metus. Proin interdum, neque vel
        sollicitudin sagittis, ipsum leo tincidunt nibh, eget sagittis tellus
        ante tempor leo. Morbi et malesuada felis.
</p><p></p> </div> </section> ` })}`;
}, "/Users/revnandi/Documents/Repos/em-site/src/pages/publications/[slug].astro", void 0);

const $$file = "/Users/revnandi/Documents/Repos/em-site/src/pages/publications/[slug].astro";
const $$url = "/publications/[slug]";

const _slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$slug,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/blog/${post.slug}/`,
		})),
	});
}

const rss_xml = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET
}, Symbol.toStringTag, { value: 'Module' }));

export { $$HeaderLink as $, ____slug_ as _, aboutUs as a, index as b, _slug_$1 as c, _slug_ as d, index$1 as i, network as n, publications as p, rss_xml as r };
