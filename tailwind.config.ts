"use client"

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
          primary:{
            900: '#191919',
            800: '#333333',
            700: '#4c4c4c',
            600: '#666666',
            500: '#808080',
            400: '#999999',
            300: '#b3b3b3',
            200: '#cccccc',
            100: '#e6e6e6',
            50: '#ffffff',
            DEFAULT: '#ffffff',
            foreground: '#000000',
          },
          secondary:{
            900: '#f1f1f1',
            800: '#e3e3e3',
            700: '#d6d6d6',
            600: '#c8c8c8',
            500: '#bababa',
            400: '#acacac',
            300: '#9e9e9e',
            200: '#919191',
            100: '#838383',
            50: '#757575',
            DEFAULT: '#757575',
            foreground: '#000000' 
          }
        },
      },
      dark: {
        layout:{},
        colors:{
          background: '#202225',
          foreground: `#ffffff`,
          primary:{
            900: '#030304',
            800: '#060707',
            700: '#0a0a0b',
            600: '#0d0e0f',
            500: '#101113',
            400: '#131416',
            300: '#16181a',
            200: '#1a1b1e',
            100: '#1d1f21',
            50: '#202225',
            DEFAULT: '#202225',
            foreground: '#FFFFFF',
          },
          secondary:{
            900: '#eff0f0',
            800: '#e0e0e0',
            700: '#d0d1d1',
            600: '#c1c1c2',
            500: '#b1b2b3',
            400: '#a1a2a3',
            300: '#929394',
            200: '#828385',
            100: '#737475',
            50: '#636466',
            DEFAULT: '#636466',
            foreground: '#000000', 
          }
        },
      },
      terminal:{
        layout: {},
        colors:{
          background: '#9badb5',
          foreground: `#18181b`,
          primary:{            
            900: '#000507',
            800: '#010a0e',
            700: '#010f15',
            600: '#02141c',
            500: '#031a23',
            400: '#031f29',
            300: '#042430',
            200: '#042937',
            100: '#052e3e',
            50: '#053345',
            DEFAULT: '#053345',
            foreground: '#82996d'
          },
          secondary:{
            900: '#0d0f0b',
            800: '#1a1f16',
            700: '#272e21',
            600: '#343d2c',
            500: '#414d37',
            400: '#4e5c41',
            300: '#5b6b4c',
            200: '#687a57',
            100: '#758a62',
            50: '#82996d',
            DEFAULT: '#d8ffb6',
            foreground: '#161912'
          }
        }
      },
      modern:{
        extend: 'dark',
        colors: {
          background: '#0D001A',
          foreground: '#9353d3',
          primary:{
            900: '#050406',
            800: '#09080d',
            700: '#0e0c13',
            600: '#121019',
            500: '#171420',
            400: '#1c1826',
            300: '#201c2c',
            200: '#252032',
            100: '#292439',
            50: '#2e283f',
            DEFAULT: '#2e283f',
            foreground: '#aba9b2'
          },
          secondary: {
            50: '#fb2e86',
            100: '#e22979',
            200: '#c9256b',
            300: '#b0205e',
            400: '#971c50',
            500: '#7e1743',
            600: '#641236',
            700: '#4b0e28',
            800: '#32091b',
            900: '#19050d',
            DEFAULT: '#fb2e86',
            foreground: '#19050d'
          },
          focus: '#F182F6'
        },
        layout:{}
      }
    }
  })],
};
export default config;
