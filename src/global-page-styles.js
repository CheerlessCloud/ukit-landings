import React from "react";
import { transformVar } from "@quarkly/atomize";
import { createGlobalStyle } from "styled-components";

const pageStyles = {
    "404": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "index": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/ru": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/ru/sozdat-sait-vizitku-online": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/ru/sozdat-odnostranichnyj-sajt-lending": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/ru/sozdat-sajt-agentstva-nedvizhimosti": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/ru/sozdat-sajt-stomatologii": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/ru/sozdat-sajt-stroitelnoj-kompanii": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/ru/sozdat-sajt-dezajnera-interjerov": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/ru/sozdat-sajt-yurista": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/ru/sozdat-sajt-uchitelja": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/ru/sozdat-sajt-obrazovatelnogo-uchrezhdeniya": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/ru/sozdat-sajt-repetitora": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/ru/sozdat-sajt-advokata": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/ru/sozdat-sajt-dlya-prodazhi-onlajn-kursov": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/ru/sozdat-sajt-portfolio-razrabotchika": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/ru/sozdat-sajt-portfolio-hudozhnika": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/ru/skolko-stoit-sdelat-sayt": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/ru/sayt-pod-klyuch": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/ru/hosting-s-konstruktorom-saytov": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/ru/programma-dlya-sozdaniya-saytov": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/ru/sozdat-sayt-salona-krasoty": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/ru/sozdat-sayt-kafe-ili-restorana": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/ru/sozdat-sayt-psikhologa-ili-psikhoterapevta": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/ru/sozdat-sayt-gostinitsy-ili-otelya": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/ru/sozdat-sayt-avtoservisa": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/ru/sozdat-sayt-vracha": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/ru/konstruktor-odnostranichnyh-sajtov": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/ru/konstruktor-sajtov-vizitok": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/ru/konstruktor-lendingov": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/ru/konstruktor-sajtov-portfolio": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/en": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/en/create-a-promo-website-for-your-business": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/en/create-a-landing-page": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/en/create-a-dental-clinic-website": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/en/create-an-interior-design-portfolio": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/en/create-an-educational-facility-website": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/en/create-a-teacher-website": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/en/create-a-tutor-website": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/en/create-a-lawyer-website": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/en/create-a-legal-advisor-website": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/en/create-a-real-estate-development-company-website": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/en/create-a-real-estate-agency-website": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/en/request-deletion-of-personal-data": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/en/create-a-developer-portfolio": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/en/create-a-healthcare-professional-website": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/en/create-an-automobile-repair-shop-website": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/en/create-an-artist-portfolio": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/en/hosting-with-a-website-builder": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/en/create-an-online-courses-website": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/en/create-a-psychologist-or-psychotherapist-website": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/en/create-a-hotel-website": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/en/create-a-cafe-or-restaurant-website": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/en/how-much-does-it-cost-to-create-a-site": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/en/website-builder-software": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/en/portfolio-website-builder": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/en/web-page-builder": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/en/landing-page-builder": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/en/create-a-beauty-studio-website": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/en/promo-site-builder": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/ro": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/ro/creati-un-website-pentru-o-clinica-dentara": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/ro/creati-o-pagina-de-prezentare": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/ro/creati-un-site-pentru-avocat": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/ro/creati-un-site-de-promovare-pentru-afacerea-dvs": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/ro/creati-un-website-pentru-un-consilier-juridic": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/ro/creati-un-website-pentru-agentie-imobiliara": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/ro/creati-un-website-pentru-un-dezvoltator-imobiliar": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/ro/creati-un-website-pentru-un-profesor": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/ro/creati-un-website-pentru-meditator": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/ro/creati-un-website-pentru-un-centru-educational": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/ro/creati-un-portofoliu-de-design-interior": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/ro/creati-un-website-pentru-un-salon-de-infrumusetare": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/ro/creati-website-ul-unei-cafenele-sau-a-unui-restaurant": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/ro/creati-portofoliul-unui-developer": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/ro/creati-un-website-pentru-profesionisti-din-domeniul-sanatatii": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/ro/creati-website-ul-unui-hotel": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/ro/host-cu-un-constructor-de-website": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/ro/creati-website-ului-unui-psiholog-sau-psihoterapeut": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/ro/creati-portofoliul-unui-artist": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/ro/creati-website-ul-unui-service-auto": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/ro/creati-un-website-pentru-cursuri-online": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/ro/constructor-de-site-uri-promotionale": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/ro/creator-de-portofoliu": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/ro/constructor-de-pagini-web": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/ro/software-pentru-creare-de-website-uri": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/ro/stworz-strone-internetowa-z-kursami-online": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/ro/cat-costa-sa-creati-un-website": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/ro/creator-de-pagini-de-destinatie": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/pl": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/pl/stworz-portfolio-projektanta-wnetrz": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/pl/stworz-strone-internetowa-agencji-nieruchomosci": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/pl/stworz-strone-internetowa-kliniki-stomatologicznej": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/pl/stworz-strone-internetowa-placowki-edukacyjnej": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/pl/stworz-strone-promocyjna-dla-swojej-firmy": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/pl/utworz-strone-docelowa": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/pl/utworz-strone-internetowa-dla-prawnika": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/pl/utworz-strone-internetowa-firmy-deweloperskiej": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/pl/utworz-strone-internetowa-radcy-prawnego": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/pl/utworz-witryne-korepetytora": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/pl/utworz-witryne-nauczyciela": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/pl/stworz-strone-studia-urody": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/pl/utworz-strone-internetowa-hotelu": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/pl/utworz-portfolio-deweloperskie": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/pl/stworz-witryne-kawiarni-lub-restauracji": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/pl/utworz-witryne-internetowa-dla-pracownikow-ochrony-zdrowia": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/pl/utworz-strone-internetowa-psychologa-lub-psychoterapeuty": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/pl/utworz-portfolio-artysty": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/pl/utworz-witryne-warsztatu-samochodowego": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/pl/hosting-z-kreatorem-stron": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/pl/ile-kosztuje-utworzenie-witryny": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/pl/kreator-stron-promocyjnych": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/pl/kreator-portfolio": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/pl/kreator-strony-promocyjnej": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/pl/kreator-stron-internetowych": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/pl/oprogramowanie-do-tworzenia-stron-internetowych": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/nl": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/nl/creeer-een-landingspagina": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/nl/creeer-een-website-voor-uw-tandheelkundige-kliniek": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/nl/creeer-een-website-voor-uw-advocatenbureau": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/nl/creeer-een-website-voor-juridische-adviseurs": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/nl/creeer-een-promo-website-voor-uw-bedrijf": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/nl/creeer-een-website-voor-makelaars": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/nl/creeer-een-website-voor-vastgoedontwikkelaars": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/nl/creeer-een-portfolio-voor-interieurontwerp": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/nl/creeer-een-website-voor-docenten": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/nl/creeer-een-website-voor-tutors": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/nl/creeer-een-website-voor-online-cursussen": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/nl/creeer-een-website-voor-onderwijsinstellingen": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/nl/hosting-met-een-websitebouwer": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/nl/creeer-een-website-voor-een-auto-reparatiebedrijf": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/nl/creeer-een-kunstenaarsportfolio": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/nl/creeer-een-website-voor-psychologen-of-psychotherapeuten": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/nl/creeer-een-website-voor-een-schoonheidsstudio": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/nl/creeer-een-website-voor-hotels": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/nl/creeer-een-website-voor-een-cafe-of-restaurant": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/nl/websitebouwer-software": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/nl/creeer-een-ontwikkelaarsportefeuille": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/nl/creeer-een-professionele-website-voor-de-gezondheidszorg": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/nl/webpaginabouwer": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/nl/portfoliobouwer": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/nl/promotiewebsitebouwer": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/nl/bouwer-voor-landingspaginas": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "lp/nl/hoeveel-kost-het-om-een-website-te-maken": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "pt-br": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "experiments": {
        "font": "--headline1",
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": ""
    }
};

const PageStyles = createGlobalStyle`
    body {
        ${({ styles }) =>
            Object.entries(styles || {}).map(
                ([prop, value]) => `${prop}: ${transformVar(prop, value)};`
            )}
    }
`;
export const GlobalQuarklyPageStyles = ({ pageUrl }) => <PageStyles styles={pageStyles[pageUrl]} />
