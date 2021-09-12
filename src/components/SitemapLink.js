import React from "react";
import { useOverrides } from "@quarkly/components";
import { Link } from "@quarkly/widgets";
const defaultProps = {
	"href": "#",
	"children": "Some text"
};
const overrides = {};

const SitemapLink = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Link {...rest}>
		{children}
	</Link>;
};

Object.assign(SitemapLink, { ...Link,
	defaultProps,
	overrides
});
export default SitemapLink;