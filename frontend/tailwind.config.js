export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        glass: '0 20px 80px rgba(15, 23, 42, 0.18)',
      },
      backgroundImage: {
        gradientRadial: 'radial-gradient(circle at top left, rgba(59, 130, 246, 0.35), transparent 28%), radial-gradient(circle at bottom right, rgba(59, 130, 246, 0.18), transparent 20%)',
      },
      colors: {
        premium: '#0f172a',
      },
    },
  },
  plugins: [],
};
