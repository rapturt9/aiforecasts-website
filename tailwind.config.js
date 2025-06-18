const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#05050A",
        foreground: "#cbd5e1",
        accent: "#6366F1",
        "accent-hover": "#5855eb",
        secondary: "#64748b",
        muted: "#475569",
        border: "rgba(203, 213, 225, 0.1)",
        "glass-bg": "rgba(203, 213, 225, 0.05)",
        "glass-border": "rgba(203, 213, 225, 0.1)",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
});