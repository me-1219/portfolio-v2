/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",

  theme: {
    extend: {
      colors: {
        navy: {
          900: "#0A0F1E",
          800: "#0D1526",
          700: "#111B30",
          600: "#1A2744",
        },

        teal: {
          400: "#00D4B8",
          500: "#00BFA5",
          600: "#00A896",
        },

        cream: "#F0EEE9",

        slate: {
          muted: "#4A5568",
        },
      },

      fontFamily: {
        display: ['"Plus Jakarta Sans"', "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },

      animation: {
        blink: "blink 1s step-end infinite",
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        "slide-right": "slideRight 0.6s ease forwards",

        float: "float 4s ease-in-out infinite",
        "draw-line": "drawLine 1.5s ease-out forwards",
        "pop-in": "popIn .5s ease-out forwards",

        glow: "glow 2.5s ease-in-out infinite",
        rotate: "rotate 18s linear infinite",
        pulseSlow: "pulseSlow 3s ease-in-out infinite",
      },

      keyframes: {
        blink: {
          "0%,100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0",
          },
        },

        fadeUp: {
          from: {
            opacity: "0",
            transform: "translateY(30px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        fadeIn: {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },

        slideRight: {
          from: {
            opacity: "0",
            transform: "translateX(-20px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },

        float: {
          "0%,100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-8px)",
          },
        },

        drawLine: {
          from: {
            strokeDashoffset: "40",
          },
          to: {
            strokeDashoffset: "0",
          },
        },

        popIn: {
          from: {
            opacity: "0",
            transform: "scale(.85) translateY(8px)",
          },
          to: {
            opacity: "1",
            transform: "scale(1) translateY(0)",
          },
        },

        glow: {
          "0%,100%": {
            boxShadow: "0 0 10px rgba(0,212,184,.25)",
          },
          "50%": {
            boxShadow: "0 0 28px rgba(0,212,184,.7)",
          },
        },

        rotate: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },

        pulseSlow: {
          "0%,100%": {
            opacity: ".5",
            transform: "scale(1)",
          },
          "50%": {
            opacity: "1",
            transform: "scale(1.05)",
          },
        },
      },
    },
  },

  plugins: [],
};