import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({
    themes:{
      /*Color Options Primary, Secondary, Success, Warning, Danger*/
      /*50 Lightest 900 darkest*/
      light:{
        layout:{},
        colors:{
          background: '#f4f4f5',
          foreground: `#18181b`,
          primary:{            
            900: '#0f1118',
            800: '#1e222f',
            700: '#2d3247',
            600: '#3c435e',
            500: '#4b5476',
            400: '#5a658e',
            300: '#6976a5',
            200: '#7886bd',
            100: '#8797d4',
            50: '#96a8ec',
            DEFAULT: '#96a8ec',
            foreground: '#0f1118'
          },
          secondary:{
            900: '#18160f',
            800: '#2f2c1e',
            700: '#47412d',
            600: '#5e573c',
            500: '#766d4b',
            400: '#8e835a',
            300: '#a59969',
            200: '#bdae78',
            100: '#d4c487',
            50: '#ecda96',
            DEFAULT: '#ecda96',
            foreground: '#18160f'
          }
        }
      },
      dark: {
        layout:{},
        colors:{
          background:'#40444b',
          foreground: '#d0c9c9',
          primary: {
            900: '#170b19',
            800: '#2e1732',
            700: '#46224b',
            600: '#5d2d64',
            500: '#74397d',
            400: '#8b4496',
            300: '#a24faf',
            200: '#ba5ac8',
            100: '#d166e1',
            50: '#e871fa',
            DEFAULT: '#e871fa',
            foreground: '#170b19'
          },
          secondary: {
            900: '#0e0b19',
            800: '#1c1632',
            700: '#2b224b',
            600: '#392d64',
            500: '#47387d',
            400: '#554396',
            300: '#634eaf',
            200: '#725ac8',
            100: '#8065e1',
            50: '#8e70fa',
            DEFAULT: '#8e70fa',
            foreground: '#0e0b19'
          }
        }
      },
      modern:{
        extend: 'dark',
        colors: {
          background: '#0D001A',
          foreground: '#9353d3',
          primary:{
            50: '#3B096C',
            100: '#520F83',
            200: '#7318A2',
            300: '#9825C2',
            400: '#c031e2',
            500: '#DD62ED',
            600: '#F182F6',
            700: '#FCADF9',
            800: '#FDD5F9',
            900: '#FEECFE',
            DEFAULT: '#DD62ED',
            foreground: '#ffffff'
          },
          focus: '#F182F6'
        },
        layout:{}
      }
    }
  })],
};
export default config;
