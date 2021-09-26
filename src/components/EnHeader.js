import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import { Image, Link, Box, Section } from "@quarkly/widgets";
const defaultProps = {
	"padding": "34px 0 24px 0",
	"lazy-load": true
};
const overrides = {
	"link": {
		"kind": "Link",
		"props": {
			"href": "https://ukit.com/"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"src": "https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/logo.svg?v=2021-08-19T11:29:12.664Z",
			"width": "80px",
			"height": "34px"
		}
	},
	"box": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"align-items": "center",
			"padding": "0px 0px 0px 0px"
		}
	},
	"link1": {
		"kind": "Link",
		"props": {
			"href": "https://ukit.com/whyus",
			"color": "--dark",
			"text-decoration-line": "initial",
			"font": "--menu",
			"hover-color": "--primary",
			"padding": "5px 7px 5px 7px",
			"transition": "color 0.3s --transitionTimingFunction-easeInOut 0s",
			"margin": "0px 7px 0px 7px",
			"md-display": "none",
			"children": "Why Choose Us?"
		}
	},
	"link2": {
		"kind": "Link",
		"props": {
			"href": "https://ukit.com/pricing",
			"color": "--dark",
			"text-decoration-line": "initial",
			"font": "--menu",
			"hover-color": "--primary",
			"padding": "5px 7px 5px 7px",
			"transition": "color 0.3s --transitionTimingFunction-easeInOut 0s",
			"margin": "0px 7px 0px 7px",
			"md-display": "none",
			"children": "Pricing"
		}
	},
	"link3": {
		"kind": "Link",
		"props": {
			"href": "https://ukit.com/signin",
			"color": "--dark",
			"text-decoration-line": "initial",
			"font": "--menu",
			"hover-color": "--primary",
			"padding": "5px 7px 5px 7px",
			"transition": "color 0.3s --transitionTimingFunction-easeInOut 0s",
			"margin": "0px 7px 0px 7px",
			"md-display": "none",
			"children": "Log In"
		}
	},
	"link4": {
		"kind": "Link",
		"props": {
			"href": "https://ukit.com/signUp",
			"color": "--secondary",
			"text-decoration-line": "initial",
			"font": "--menu",
			"hover-color": "--primary",
			"padding": "5px 18px 5px 18px",
			"transition": "color 0.3s --transitionTimingFunction-easeInOut 0s",
			"margin": "0px 7px 0px 7px",
			"border-width": "2px",
			"border-style": "solid",
			"border-color": "--color-secondary",
			"border-radius": "50px",
			"children": "Create a Website"
		}
	}
};

const EnHeader = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override
			slot="SectionContent"
			max-width="1056px"
			flex-direction="row"
			justify-content="space-between"
			align-items="center"
		/>
		<Link {...override("link")}>
			<Image {...override("image")} />
		</Link>
		<Box {...override("box")}>
			<Link {...override("link1")} />
			<Link {...override("link2")} />
			<Link {...override("link3")} />
			<Link {...override("link4")} />
		</Box>
		{children}
	</Section>;
};

Object.assign(EnHeader, { ...Section,
	defaultProps,
	overrides
});
export default EnHeader;