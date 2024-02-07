const { iconsPlugin, getIconCollections } = require("@egoist/tailwindcss-icons");
/** @type {import('tailwindcss').Config} */
module.exports = {
    plugins: [
        iconsPlugin({
            collections: getIconCollections(["ri", "ep"]),
        }),
        require("@tailwindcss/typography"),
    ],
}
