module.exports = {
	siteMetadata: {
		siteUrl: "https://christopherjohnston.co.uk/",
		title: "portfolio",
	},
	plugins: [
		`gatsby-plugin-anchor-links`,
		{
			resolve: "gatsby-plugin-robots-txt",
			options: {
				host: "https://christopherjohnston.co.uk/",
				policy: [{ userAgent: "*", allow: "/" }],
			},
		},
		{
			resolve: "gatsby-plugin-web-font-loader",
			options: {
				google: {
					families: ["Lato", "sans-serif"],
				},
			},
		},
	],
};
