module.exports = {
    mode: "jit",
    purge: ['./*.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {

                'dm': ['"Dm Sans"'],
            },
            colors: {
                orangeff9: "#FF9900",
                orangef85: "#F85A47",
                text31: "#31353B",
                grayda: "#DADADA",
                white: "#FFFFFF",
                // text33:"#333333",

            },
            gridTemplateColumns: {
                "grid-work": " 1fr auto 1fr auto 1fr",
            }
        },

    },
    variants: {
        extend: {},
    },
    plugins: [],
}