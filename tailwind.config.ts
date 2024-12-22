import type { Config } from "tailwindcss";

export default {
    content: ["./src/**/*.{html,htm}"],
    theme: {
        colors: {
            yellow: "hsl(47, 88%, 63%)",
            white: "hsl(0, 0%, 100%)",
            grey: {
                500: "hsl(0, 0%, 42%)",
                950: "hsl(0, 0%, 7%)",
            },
        },
        fontFamily: {
            sans: ["Figtree", "FigtreeStatic", "sans-serif"],
        },
        borderRadius: {
            none: "0",
            sm: "4px",
            DEFAULT: "10px",
            lg: "20px",
        },
        boxShadow: {
            DEFAULT: "8px 8px hsl(0, 0%, 0%)",
        },
        extend: {
            keyframes: {
                intro: {
                    from: {
                        transform: "scale(0.96)",
                        opacity: "0",
                    },
                    to: {
                        transform: "scale(1)",
                        opacity: "1",
                    },
                },
            },
            animation: {
                intro: "intro 200ms ease-out 300ms backwards",
            },
        },
    },
} satisfies Config;
