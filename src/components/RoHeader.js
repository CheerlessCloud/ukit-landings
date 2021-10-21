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
			"href": "https://ukit.com/ro"
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
			"href": "https://ukit.com/ro/whyus",
			"color": "--dark",
			"text-decoration-line": "initial",
			"font": "--menu",
			"hover-color": "--primary",
			"padding": "5px 7px 5px 7px",
			"transition": "color 0.3s --transitionTimingFunction-easeInOut 0s",
			"margin": "0px 7px 0px 7px",
			"md-display": "none",
			"children": "De ce noi?"
		}
	},
	"link2": {
		"kind": "Link",
		"props": {
			"href": "https://ukit.com/ro/pricing",
			"color": "--dark",
			"text-decoration-line": "initial",
			"font": "--menu",
			"hover-color": "--primary",
			"padding": "5px 7px 5px 7px",
			"transition": "color 0.3s --transitionTimingFunction-easeInOut 0s",
			"margin": "0px 7px 0px 7px",
			"md-display": "none",
			"children": "Tarife"
		}
	},
	"link3": {
		"kind": "Link",
		"props": {
			"href": "https://ukit.com/ro/signIn",
			"color": "--dark",
			"text-decoration-line": "initial",
			"font": "--menu",
			"hover-color": "--primary",
			"padding": "5px 7px 5px 7px",
			"transition": "color 0.3s --transitionTimingFunction-easeInOut 0s",
			"margin": "0px 7px 0px 7px",
			"md-display": "none",
			"children": "Autentificare"
		}
	},
	"link4": {
		"kind": "Link",
		"props": {
			"href": "https://ukit.com/ro/signUp",
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
			"children": "Începeți acum!"
		}
	}
};

const RoHeader = props => {
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

Object.assign(RoHeader, { ...Section,
	defaultProps,
	overrides
});
export default RoHeader;