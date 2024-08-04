/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "xs": "400px",
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      container:{
        center:true,
        padding:{
          DEFAULT:"1rem",
          // padding:"2rem",
          // el:"3rem"
          // lg:"0.625rem",
        }
      },
      letterSpacing:{
        "tightest":"-0.065em"
      },
      fontFamily:{
        "IranYekanBlack":"IranYekan Black",
        "IranYekanExtraBlack":"IranYekan ExtraBlack",
        "IranYekanBold":"IranYekan Bold",
        "IranYekanExtraBold":"IranYekan ExtraBold",
        "IranYekanLight":"IranYekan Light",
        "IranYekanMedium":"IranYekan Medium",
        "IranYekanRegular":"IranYekan Regular",
        "IranYekanThin":"IranYekan Thin"
      },
      colors:{
        "zard":"#f9d110",
        "abi":"#4587d5",
        "sormei":"#142336"
      }
    },
  },
  plugins: [
    function({addVariant}){
      addVariant('child','& > *');
      addVariant('child-hover','& > *:hover')
    }
  ],
}

