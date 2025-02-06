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
            900: '#404040',    // Darkest gray
            800: '#595959',    // Darker gray
            700: '#737373',    // Medium-dark gray
            600: '#8c8c8c',    // Slightly lighter dark gray
            500: '#a6a6a6',    // Lighter dark gray
            400: '#bfbfbf',    // Light-medium gray
            300: '#d9d9d9',    // Light gray
            200: '#e6e6e6',    // Very light gray
            100: '#e6e6e6',    // Base gray
            50: '#f2f2f2',     // Almost white, lightest gray            
            DEFAULT: '#f2f2f2',
            foreground: '#000000',
          },
          secondary:{
            50: '#f1f1f1',
            100: '#d0d0d0',
            200: '#a1a1a1',
            300: '#7a7a7a',
            400: '#535353',
            500: '#3c3c3c',
            600: '#292929',
            700: '#1c1c1c',
            800: '#121212',
            900: '#090909',            
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
        extend: 'dark',
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
