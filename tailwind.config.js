/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '481px',
      // => @media (min-width: 480px) { ... }
      'md': '737px',
      // => @media (min-width: 736px) { ... }
      'lg': '981px',
      // => @media (min-width: 980px) { ... }
      'xl': '1281px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        scenarexGreen: "#007F8D",
        mastheadColor: "#233D4D",
        mastheadSmallColor: "#EEC100",
        postTitleColor: "#303030",
        postDateColor: "#9a9a9a",
        bodyColor: "#515151",
        bodyBackgroundColor: "#fff",
        linkColor: "#268bd2",
        headingsColor: "#313131", // h1,h2,h3,h4,h5,h6
        strongColor: "#303030", // strong
        preBackgroundColor: "#f9f9f9", // pre
        blockquoteColor: "#7a7a7a", // blockquote
        blockquoteBorderColor: "#e5e5e5",
        tableBorderColor: "#e5e5e5",
        tableOddBackgroundColor: "#f9f9f9",
        offWhite: "rgba(0, 0, 0, 0.0375)",
      },
      borderWidth: {
        '6': '6px',
      },
    },
  },
  plugins: [],
};
