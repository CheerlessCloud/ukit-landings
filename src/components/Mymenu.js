import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import QuarklycommunityKitMenu from "./QuarklycommunityKitMenu";
const defaultProps = {
	"exact-active-match": true,
	"rootId": "6151ac9c29a0a1001e6c8fb1",
	"font": "--base",
	"color": "--dark",
	"display": "flex",
	"flex-wrap": "wrap",
	"padding": "0 0 0 0"
};
const overrides = {};

const Mymenu = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <QuarklycommunityKitMenu {...rest}>
		<Override
			slot="link"
			font="--base"
			color="--dark"
			text-decoration-line="initial"
			hover-color="--primary"
		/>
		<Override
			slot="item"
			display="flex"
			width="50%"
			padding="0 0 0 0"
			md-width="100%"
		/>
		{children}
	</QuarklycommunityKitMenu>;
};

Object.assign(Mymenu, { ...QuarklycommunityKitMenu,
	defaultProps,
	overrides
});
export default Mymenu;