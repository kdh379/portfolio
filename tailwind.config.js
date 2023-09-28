
const screenValue = {
    // [breakpoint, max-width]
    mobile: [480, 600],
    tablet: [600, 900],
    desktop: [1200, 1200],
};

const customSize = {
    sidebar: "250px",
    appHeader: "44px",
};

const screens = Object.fromEntries( Object.entries( screenValue ).map( ( [key, value] ) => [key, `${value[0]}px`] ) );
const screenWidth = Object.fromEntries( Object.entries( screenValue ).map( ( [key, value] ) => [key, `${value[1]}px`] ) );

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
    content: [
        "app/**/*.{tsx,scss}",
        "components/**/*.{tsx,scss}",
        "styles/**/*.{tsx,scss}",
    ],
    darkMode: "class",
    theme: {
        screens: {
            ...screens,
        },
        extend: {
            width: {
                ...screenWidth,
            },
            maxWidth: {
                ...screenWidth,
            },
            height: {},
            spacing: {
                ...customSize,
            },
            borderColor: {
                DEFAULT: "hsl(var(--bc)/20%)",
            },
            transitionDuration: {
                layout: 300,
            },
        },
    },
    plugins: [require( "daisyui" )],
    daisyui: {
        darkTheme: "dark", // name of one of the included themes for dark mode
        base: true, // applies background color and foreground color for root element by default
        styled: true, // include daisyUI colors and design decisions for all components
        utils: true, // adds responsive and modifier utility classes
        rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
        prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
        logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    },
};

module.exports = tailwindConfig;