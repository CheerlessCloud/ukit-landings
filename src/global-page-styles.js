import React from "react";
import { transformVar } from "@quarkly/atomize";
import { createGlobalStyle } from "styled-components";

const pageStyles = {
    "404": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "index": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/ru": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/ru/sozdat-sait-vizitku-online": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/ru/sozdat-odnostranichnyj-sajt-lending": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/ru/sozdat-sajt-agentstva-nedvizhimosti": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/ru/sozdat-sajt-stomatologii": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/ru/sozdat-sajt-stroitelnoj-kompanii": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/ru/sozdat-sajt-dezajnera-interjerov": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/ru/sozdat-sajt-yurista": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/ru/sozdat-sajt-uchitelja": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/ru/sozdat-sajt-obrazovatelnogo-uchrezhdeniya": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/ru/sozdat-sajt-repetitora": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/ru/sozdat-sajt-advokata": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/ru/sozdat-sajt-dlya-prodazhi-onlajn-kursov": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/ru/sozdat-sajt-portfolio-razrabotchika": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/ru/sozdat-sajt-portfolio-hudozhnika": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/ru/skolko-stoit-sdelat-sayt": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/ru/sayt-pod-klyuch": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/ru/hosting-s-konstruktorom-saytov": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/ru/programma-dlya-sozdaniya-saytov": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/ru/sozdat-sayt-salona-krasoty": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/ru/sozdat-sayt-kafe-ili-restorana": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/ru/sozdat-sayt-gostinitsy-ili-otelya": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/ru/sozdat-sayt-psikhologa-ili-psikhoterapevta": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/ru/sozdat-sayt-avtoservisa": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/ru/sozdat-sayt-vracha": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/ru/konstruktor-odnostranichnyh-sajtov": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/ru/konstruktor-sajtov-vizitok": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/ru/konstruktor-lendingov": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/ru/konstruktor-sajtov-portfolio": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/en": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/en/create-a-promo-website-for-your-business": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/en/create-a-landing-page": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/en/create-a-dental-clinic-website": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/en/create-an-interior-design-portfolio": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/en/create-an-educational-facility-website": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/en/create-a-teacher-website": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/en/create-a-tutor-website": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/en/create-a-lawyer-website": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/en/create-a-legal-advisor-website": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/en/create-a-real-estate-development-company-website": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/en/create-a-real-estate-agency-website": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/en/request-deletion-of-personal-data": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/en/create-a-developer-portfolio": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/en/create-a-healthcare-professional-website": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/en/create-an-automobile-repair-shop-website": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/en/create-an-artist-portfolio": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/en/hosting-with-a-website-builder": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/en/create-an-online-courses-website": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/en/create-a-psychologist-or-psychotherapist-website": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/en/create-a-hotel-website": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/en/create-a-cafe-or-restaurant-website": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/en/create-a-beauty-studio-website": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/ro": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/ro/creati-un-website-pentru-o-clinica-dentara": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/ro/creati-o-pagina-de-prezentare": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/ro/creati-un-site-pentru-avocat": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/ro/creati-un-website-pentru-un-consilier-juridic": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/ro/creati-un-site-de-promovare-pentru-afacerea-dvs": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/ro/creati-un-website-pentru-agentie-imobiliara": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/ro/creati-un-website-pentru-un-dezvoltator-imobiliar": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/pl": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "lp/nl": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "experiments": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
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
