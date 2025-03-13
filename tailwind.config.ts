
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				ziggurat: {
					dark: '#09090b',
					darker: '#030303',
					gold: '#f5a425',
					blue: '#0ea5e9',
					gray: '#333333',
					lightgray: '#888888',
					purple: '#8B5CF6',
					magenta: '#D946EF',
					red: '#ea384c'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'glow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' },
				},
				'slide-up': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				'pulse-light': {
					'0%, 100%': { opacity: '0.8' },
					'50%': { opacity: '1' },
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
				'shimmer': {
					'0%': { transform: 'translateX(-100%) rotate(30deg)' },
					'100%': { transform: 'translateX(100%) rotate(30deg)' },
				},
				'lightning-pulse': {
					'0%, 100%': { opacity: '0.3' },
					'50%': { opacity: '1' },
				},
				'beat': {
					'0%, 100%': { transform: 'scale(1)' },
					'25%': { transform: 'scale(1.1)' },
				},
				'bounce-subtle': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' },
				},
				'wave': {
					'0%': { transform: 'translateY(0)' },
					'25%': { transform: 'translateY(-5px)' },
					'50%': { transform: 'translateY(0)' },
					'75%': { transform: 'translateY(5px)' },
					'100%': { transform: 'translateY(0)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'glow': 'glow 3s ease-in-out infinite',
				'slide-up': 'slide-up 0.5s ease-out',
				'fade-in': 'fade-in 0.8s ease-out',
				'pulse-light': 'pulse-light 2s ease-in-out infinite',
				'rotate-slow': 'rotate-slow 12s linear infinite',
				'shimmer': 'shimmer 3s infinite',
				'lightning-pulse': 'lightning-pulse 2s infinite',
				'beat': 'beat 0.7s ease-in-out infinite',
				'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
				'wave': 'wave 2s ease-in-out infinite',
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				display: ['Orbitron', 'Clash Display', 'sans-serif'],
			},
			backdropBlur: {
				xs: '2px',
			},
			rotate: {
				'y-180': '180deg',
			},
			perspective: {
				'1000': '1000px',
			},
			backfaceVisibility: {
				'hidden': 'hidden',
			},
			transformStyle: {
				'3d': 'preserve-3d',
			},
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		function({ addUtilities }) {
			const newUtilities = {
				'.backface-hidden': {
					'backface-visibility': 'hidden',
				},
				'.preserve-3d': {
					'transform-style': 'preserve-3d',
				},
				'.perspective-1000': {
					'perspective': '1000px',
				},
				'.rotate-y-180': {
					'transform': 'rotateY(180deg)',
				},
				'.transform-style-3d': {
					'transform-style': 'preserve-3d',
				},
			}
			addUtilities(newUtilities)
		}
	],
} satisfies Config;
