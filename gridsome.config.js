// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: "CleverFields",
    siteDescription:
        "A Reims, CleverFields vous aide � concevoir, analyser et p�r�nniser vos applications Web et Mobile.",
    siteUrl: "https://cleverfields.github.io",
    titleTemplate: "%s | CleverFields",
    icon: "src/favicon.svg",
    pathPrefix: "/cleverfields.github.io",
    plugins: [
        {
            use: "gridsome-plugin-tailwindcss"
        },
        {
            use: "@gridsome/plugin-google-analytics",
            options: {
                id: "UA-XXXXXXXXX-X"
            }
        },
        {
            use: "@gridsome/plugin-sitemap",
            options: {
                cacheTime: 600000 // default
            }
        }
    ]
};
