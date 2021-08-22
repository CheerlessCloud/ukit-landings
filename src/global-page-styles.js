import React from "react";
import { transformVar } from "@quarkly/atomize";
import { createGlobalStyle } from "styled-components";

const pageStyles = {
    "404": {
        "overflow-x": "",
        "overflow-y": "hidden",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "dlp": {
        "overflow-x": "",
        "overflow-y": "hidden",
        "height": "",
        "min-height": "",
        "width": ""
    },
    "index": {
        "overflow-x": "",
        "overflow-y": "hidden",
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
