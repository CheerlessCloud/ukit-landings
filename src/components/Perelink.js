import React from "react";
import { useOverrides } from "@quarkly/components";
import { Link } from "@quarkly/widgets";
const defaultProps = {
	"hover-color": "--primary",
	"color": "--darkL1",
	"href": "/lp/ru/sozdat-sajt-agentstva-nedvizhimosti",
	"text-decoration-line": "initial",
	"hover-text-decoration-line": "initial"
};
const overrides = {};

const Perelink = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Link {...rest}>
		{children}
	</Link>;
};

Object.assign(Perelink, { ...Link,
	defaultProps,
	overrides
});
export default Perelink;