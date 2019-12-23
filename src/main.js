// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

require("~/assets/css/main.css");

import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { router, head, isClient }) {
    head.htmlAttrs = {
        lang: "fr"
    };

    head.bodyAttrs = {
        class: "gradient"
    };

    head.meta.push(
        {
            name: "description",
            content: "HTML,CSS,XML,JavaScript"
        },
        {
            name: "keywords",
            content:
                "CleverFields,audit web,consulting web,développement,python,php"
        },
        {
            name: "author",
            content: "Arnaud Lecat"
        }
    );

    // Set default layout as a global component
    Vue.component("Layout", DefaultLayout);
}
