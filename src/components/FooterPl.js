import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import { Image, Link, Box, Hr, Section } from "@quarkly/widgets";
const defaultProps = {
	"padding": "18px 0 24px 0",
	"background": "linear-gradient(to right,#f3f5f8,#f3f5f8)",
	"lazy-load": true
};
const overrides = {
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
			"padding": "18px 0px 18px 0px",
			"md-flex-direction": "column"
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"color": "--dark",
			"text-decoration-line": "initial",
			"font": "--menu",
			"hover-color": "--primary",
			"padding": "5px 7px 5px 7px",
			"transition": "color 0.3s --transitionTimingFunction-easeInOut 0s",
			"margin": "0px 7px 0px 7px",
			"md-margin": "0px 7px 5PX 7px",
			"href": "https://ukit.com/pl/whyus",
			"children": "Dlaczego warto nas wybrać?"
		}
	},
	"link1": {
		"kind": "Link",
		"props": {
			"color": "--dark",
			"text-decoration-line": "initial",
			"font": "--menu",
			"hover-color": "--primary",
			"padding": "5px 7px 5px 7px",
			"transition": "color 0.3s --transitionTimingFunction-easeInOut 0s",
			"margin": "0px 7px 0px 7px",
			"md-margin": "0px 7px 5PX 7px",
			"href": "https://ukit.com/pl/pricing",
			"children": "Cennik"
		}
	},
	"link2": {
		"kind": "Link",
		"props": {
			"color": "--dark",
			"text-decoration-line": "initial",
			"font": "--menu",
			"hover-color": "--primary",
			"padding": "5px 7px 5px 7px",
			"transition": "color 0.3s --transitionTimingFunction-easeInOut 0s",
			"margin": "0px 7px 0px 7px",
			"md-margin": "0px 7px 5PX 7px",
			"href": "https://ukit.com/pl/signIn",
			"children": "Zaloguj się"
		}
	},
	"link3": {
		"kind": "Link",
		"props": {
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
			"href": "https://ukit.com/pl/signUp",
			"children": "Stwórz witrynę"
		}
	},
	"hr": {
		"kind": "Hr",
		"props": {
			"width": "100%",
			"margin": "16px 0px 16px 0px",
			"padding": "0px 0px 0px 0px",
			"background": "linear-gradient(to right,#f3f5f8,#f3f5f8)",
			"border-width": "0px 0px 2px 0px",
			"border-color": "#6c757d29"
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"width": "100%",
			"md-display": "flex",
			"md-align-items": "center",
			"md-flex-direction": "column",
			"md-justify-content": "center"
		}
	},
	"link4": {
		"kind": "Link",
		"props": {
			"text-decoration-line": "initial",
			"font": "--footer",
			"color": "--grey",
			"hover-color": "--primary",
			"margin": "0px 24px 0px -1px",
			"padding": "5px 0px 5px 0px",
			"md-margin": "0px 0px 0px 0px",
			"href": "https://ukit.com/pl/agreement",
			"children": "Ogólne warunki użytkowania"
		}
	},
	"link5": {
		"kind": "Link",
		"props": {
			"text-decoration-line": "initial",
			"font": "--footer",
			"color": "--grey",
			"hover-color": "--primary",
			"margin": "0px 24px 0px -1px",
			"padding": "5px 0px 5px 0px",
			"md-margin": "0px 0px 0px 0px",
			"href": "https://ukit.com/pl/storage",
			"children": "Umowa Posiadacza Karty"
		}
	},
	"link6": {
		"kind": "Link",
		"props": {
			"text-decoration-line": "initial",
			"font": "--footer",
			"color": "--grey",
			"hover-color": "--primary",
			"margin": "0px 24px 0px -1px",
			"padding": "5px 0px 5px 0px",
			"md-margin": "0px 0px 0px 0px",
			"href": "https://ukit.com/pl/privacy",
			"children": "Polityka prywatności"
		}
	},
	"link7": {
		"kind": "Link",
		"props": {
			"text-decoration-line": "initial",
			"font": "--footer",
			"color": "--grey",
			"hover-color": "--primary",
			"margin": "0px 24px 0px -1px",
			"padding": "5px 0px 5px 0px",
			"md-margin": "0px 0px 0px 0px",
			"href": "https://ukit.com/pl/details",
			"children": <>
				Informacje prawne{"\n"}
			</>
		}
	},
	"link8": {
		"kind": "Link",
		"props": {
			"text-decoration-line": "initial",
			"font": "--footer",
			"color": "--grey",
			"hover-color": "--primary",
			"margin": "0px 24px 0px -1px",
			"padding": "5px 0px 5px 0px",
			"md-margin": "0px 0px 0px 0px",
			"href": "/lp/pl",
			"children": "Gotowe rozwiązania"
		}
	}
};

const FooterPl = props => {
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
			flex-wrap="wrap"
			md-flex-direction="column"
			md-align-items="center"
			md-justify-content="center"
		/>
		<Image {...override("image")} />
		<Box {...override("box")}>
			<Link {...override("link")} />
			<Link {...override("link1")} />
			<Link {...override("link2")} />
			<Link {...override("link3")} />
		</Box>
		<Hr {...override("hr")} />
		<Box {...override("box1")}>
			<Link {...override("link4")} />
			<Link {...override("link5")} />
			<Link {...override("link6")} />
			<Link {...override("link7")} />
			<Link {...override("link8")} />
		</Box>
		{children}
	</Section>;
};

Object.assign(FooterPl, { ...Section,
	defaultProps,
	overrides
});
export default FooterPl;