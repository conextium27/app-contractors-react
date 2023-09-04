import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        color_gray: 'rgba(51, 51, 51, 0.60)',
        backgroud_gray: 'rgba(255, 255, 255, 0.60)',
        backgrondgrandient:  'linear-gradient(119deg, #FCFFFD 13.94%, #F2F1FF 96.95%), var(--Pure-white, #FFF)',
      },
      boxShadow:{
        boxshadow: '0px 49px 100px 0px rgba(0, 0, 0, 0.10)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
