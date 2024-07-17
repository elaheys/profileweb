/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "xs": "480px",
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      container:{
        center:true,
        padding:{
          DEFAULT:"3rem",
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

