import React, { useEffect, useState } from "react";
import SitemapLink from "./SitemapLink";
import { useOverrides } from "@quarkly/components";
import { Box } from "@quarkly/widgets";
const defaultProps = {
	"display": "flex",
	"flex-wrap": "wrap",
	"sm-flex-direction": "column"
};
const overrides = {};

const SitemapLinkBox = props => {
	const {
		override,
		rest
	} = useOverrides(props, overrides, defaultProps);
	const [links, setLinks] = useState([]);
	useEffect(() => {
		fetch("https://api.airtable.com/v0/appqcdoHzQ8wjxKkO/RU%20sitemap?view=grid", {
			headers: {
				'Authorization': 'Bearer keyJ0QwdTmrR1ahxk'
			}
		}).then(response => response.json()).then(data => setLinks(data.records.map(({
			fields
		}) => fields)));
	}, []);
	return <Box {...rest}>
		links.map(Slink => 
		<SitemapLink {...override("SitemapLink")} Slink={Slink} />
		)
	</Box>;
};

Object.assign(SitemapLinkBox, { ...Box,
	defaultProps,
	overrides
});
export default SitemapLinkBox;