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
      light:{
        layout:{},
        colors:{
          background: '#f4f4f5',
          foreground: `#18181b`,
          primary:{            
            900: '#cce4f5',
            800: '#b3d8f1',
            700: '#99cceb',
            600: '#80bfe6',
            500: '#66b3e0',
            400: '#4da7db',
            300: '#338ad5',
            200: '#2974bf',
            100: '#235ea1',
            50: '#1b487d',
            DEFAULT: '#2986cc',
            foreground: '#FFFFFF'
          }
        }
      },
      dark: {
        layout:{},
        colors:{
          background:'#40444b',
          foreground: '#d0c9c9',
          primary: {
            900: '#c9c9ca',
            800: '#b0b0b1',
            700: '#979798',
            600: '#7e7e7f',
            500: '#656566',
            400: '#4c4d4e',
            300: '#424345',
            200: '#37393b',
            100: '#2d2e30',
            50: '#202225',
            DEFAULT: '#40444b',
            foreground: '#d0c9c9'
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
