/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            screens: {
                lg: "1240px",
            },
            backgroundColor: {
                primary: "#030416",
                "transperent-hero": "#1d1f2e",
                secondary: "#071626",
            },
            fontFamily: {
                primary: "Lexend",
            },
            fontSize: {
                screen: "5rem",
                fit: "2.75rem",
            },
            animation: {
                "infinite-scroll": "infinite-scroll 25s linear infinite",
                "opposite-infinite-scroll":
                    "opposite-infinite-scroll 25s linear infinite",
            },
            keyframes: {
                "infinite-scroll": {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(-100%)" },
                },
                "opposite-infinite-scroll": {
                    from: { transform: "translateX(-100%)" },
                    to: { transform: "translateX(0)" },
                },
            },
        },
    },
    plugins: [],
};
