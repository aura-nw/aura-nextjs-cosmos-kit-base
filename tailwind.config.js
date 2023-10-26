/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'light-gray': 'var(--light-gray)',
        'light-medium-gray': 'var(--light-medium-gray)',
        'medium-gray': 'var(--medium-gray)',
        'subtle-dark': 'var(--subtle-dark)',
        'primary-color': 'var(--primary-color)',
        'second-color': 'var(--second-color)',
        'light-green': 'var(--light-green)',
        'medium-green': 'var(--medium-green)',
        'light-yellow': 'var(--light-yellow)',
        'medium-yellow': 'var(--medium-yellow)',
        'light-red': 'var(--light-red)',
        'medium-red': 'var(--medium-red)',
      },
      animation: {
        flash: 'flash 1s cubic-bezier(0, 0, 0.2, 1)',
      },
      keyframes: {
        flash: {
          '75%, 100%': {
            transform: 'scale(1.8)',
            opacity: 0,
          },
        },
      },
    },
  },
}
