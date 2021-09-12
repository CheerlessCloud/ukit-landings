import React from "react";
import { useOverrides } from "@quarkly/components";
import { Link } from "@quarkly/widgets";
const defaultProps = {
	"href": "/lp/ru/sozdat-sait-vizitku-online",
	"font": "--base",
	"color": "--dark",
	"text-decoration-line": "initial",
	"display": "flex",
	"flex-direction": "row",
	"width": "50%",
	"hover-color": "--primary",
	"md-width": "100%",
	"children": "Сайт-визитка для бизнеса"
};
const overrides = {};

const SitemapLink = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	const {
		Slink = {}
	} = rest;
	return <Link {...rest}>
		{children}
	</Link>;
};

Object.assign(SitemapLink, { ...Link,
	defaultProps,
	overrides
});
export default SitemapLink;