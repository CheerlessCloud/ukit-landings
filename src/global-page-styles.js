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
    "subpath-test": {
        "overflow-x": "hidden",
        "overflow-y": "visible",
        "height": "",
        "min-height": "",
        "width": "",
        "font": "--headline1"
    },
    "index1": {
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
