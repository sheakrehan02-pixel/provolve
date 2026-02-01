/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in-down': 'fadeInDown 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 15s ease infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'teleport': 'teleport 0.6s ease-out forwards',
        'teleport-out': 'teleportOut 0.5s ease-in forwards',
        'teleport-in': 'teleportIn 0.8s ease-out forwards',
        'ripple': 'ripple 0.6s ease-out forwards',
        'particle': 'particle 1s ease-out forwards',
        'vortex': 'vortex 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        teleport: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(0.8)', opacity: '0.7' },
          '100%': { transform: 'scale(0)', opacity: '0' },
        },
        teleportOut: {
          '0%': { transform: 'scale(1)', opacity: '1', filter: 'blur(0px)' },
          '100%': { transform: 'scale(0)', opacity: '0', filter: 'blur(20px)' },
        },
        teleportIn: {
          '0%': { transform: 'scale(0)', opacity: '0', filter: 'blur(20px)' },
          '100%': { transform: 'scale(1)', opacity: '1', filter: 'blur(0px)' },
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '0.8' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
        particle: {
          '0%': { transform: 'translate(-50%, -50%) translate(0, 0) scale(0)', opacity: '1' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translate(-50%, -50%) translate(var(--tx), var(--ty)) scale(1)', opacity: '0' },
        },
        vortex: {
          '0%': { transform: 'rotate(0deg) scale(1)', opacity: '1' },
          '50%': { transform: 'rotate(180deg) scale(0.5)', opacity: '0.8' },
          '100%': { transform: 'rotate(360deg) scale(0)', opacity: '0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

