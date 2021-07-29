module.exports = {
	siteMetadata: {
		siteUrl: "https://www.yourdomain.tld",
		title: "portfolio",
	},
	plugins: [
		`gatsby-plugin-anchor-links`,
		{
			resolve: "gatsby-plugin-web-font-loader",
			options: {
				google: {
					families: ["Lato", "sans-serif"],
				},
			},
		},
	],
	pathPrefix: "/portfolio",
};
