import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            keyframes: {
                "wave-animation": {
                    "0%": { transform: "none" },
                    "15%": {
                        transform:
                            "rotate3d(0, 0, 1, -10deg) translate3d(-20%, 0, 0)",
                    },
                    "30%": {
                        transform:
                            "rotate3d(0, 0, 1, 7deg) translate3d(10%, 0, 0)",
                    },
                    "45%": {
                        transform:
                            "rotate3d(0, 0, 1, -10deg) translate3d(-15%, 0, 0)",
                    },
                    "60%": {
                        transform:
                            "rotate3d(0, 0, 1, 5deg) translate3d(10%, 0, 0)",
                    },
                    "75%": {
                        transform:
                            "rotate3d(0, 0, 1, -2deg) translate3d(-5%, 0, 0)",
                    },
                    "100%": { transform: "none" },
                },
                "text-slide-4": {
                    "0%, 20%": {
                        transform: "translateY(0%)",
                    },
                    "25%, 45%": {
                        transform: "translateY(-20%)",
                    },
                    "50%, 70%": {
                        transform: "translateY(-40%)",
                    },
                    "75%, 95%": {
                        transform: "translateY(-60%)",
                    },
                    "100%": {
                        transform: "translateY(-80%)",
                    },
                },
                moveToTopRight: {
                    "100%": { transform: "translate(20%, -20%)" }, // Adjust the values as needed
                },
            },
            animation: {
                wave: "wave-animation 1s infinite",
                firstwave: "wave-animation 1s",
                textslide:
                    "text-slide-4 10s cubic-bezier(0.83, 0, 0.17, 1) infinite",
                moveToTopRight:
                    "moveToTopRight 0.15s cubic-bezier(.4,0,0.2,1) forwards",
            },
        },
    },
    plugins: [],
};
export default config;
