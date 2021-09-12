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
    "ru1": {
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
