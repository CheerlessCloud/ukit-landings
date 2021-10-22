import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import { Text, Hr, Section } from "@quarkly/widgets";
import Mymenu from "./Mymenu";
const defaultProps = {
	"min-height": "100vh"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"font": "--headline3",
			"children": "Ready-Made Solutions"
		}
	},
	"hr": {
		"kind": "Hr",
		"props": {
			"width": "100%",
			"display": "flex",
			"color": "--grey",
			"border-color": "--color-grey"
		}
	},
	"mymenu": {
		"kind": "Mymenu",
		"props": {}
	}
};

const SitemapPageContent = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override slot="SectionContent" max-width="1056px" />
		<Text {...override("text")} />
		<Hr {...override("hr")} />
		<Mymenu {...override("mymenu")} />
		{children}
	</Section>;
};

Object.assign(SitemapPageContent, { ...Section,
	defaultProps,
	overrides
});
export default SitemapPageContent;